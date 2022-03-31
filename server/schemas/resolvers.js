const { productHomedeck, orderedProducts, User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');


const resolvers = {
  Query: {  
    checkout: async (parent, args, context) =>{
      const order = new orderedProducts({ products: args.products});
      const { products } = await order.populate('products').execPopulate();
      const line_items = [];
      const url = new URL(context.headers.referer).origin;

      for (let i = 0; i < products.length; i++) {
        // generate product id
        const product = await stripe.products.create({
          name: products[i].model +" " +products[i].brand,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`]
        });

        
        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

      
        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success`,
        cancel_url: `${url}/`
      });
      
      return { session: session.id };
    },

    productHomedecklist: async () => {
      return await productHomedeck.find();
    },

    product: async (parent, { _id }) => {
      return await productHomedeck.findById(_id)
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orderedProductslist.productHomedeck',
        });
        user.orderedProductslist.sort((a, b) => b.orderDate - a.orderDate);
        return user;
      }

      throw new AuthenticationError('Not logged in');
    },

    order: async (parent, {_id}, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orderedProductslist.productHomedeck',
        });

        return user.orderedProductslist.id(_id);
      }
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, args, context) => {
      console.log(context);
      if (context.user) {
        const order = new orderedProducts(args);

        await User.findByIdAndUpdate(context.user._id, { $push: { orderedProductslist: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await productHomedeck.findByIdAndUpdate(_id, { $inc: { volume: decrement } }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }

  }
}

module.exports = resolvers;


