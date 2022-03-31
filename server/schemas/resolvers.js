const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Order } = require('../models');


const resolvers = {
  Query: {  
   

    products: async () => {
      return await Product.find();
    },

    product: async (parent, { _id }) => {
      return await Product.findById(_id)
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
        });
        user.orders.sort((a, b) => b.orderDate - a.orderDate);
        return user;
      }

      throw new AuthenticationError('Not logged in');
    },

    order: async (parent, {_id}, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
        });

        return user.orders.id(_id);
      }
    }
  },

  
    }

  }
}

module.exports = resolvers;