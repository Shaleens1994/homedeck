const { productHomedeck, orderedProducts } = require('../models');


const resolvers = {
  Query: { productHomedeck: async () => {
    return await productHomedeck.find({});
  },
  orderedProducts: async () => {
    return await orderedProducts.find({});
  }
   
  }

 
};

module.exports = resolvers;
