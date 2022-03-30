const { productHomedeck } = require('../models');

const resolvers = {
  Query: { productHomedeck: async () => {
    return await productHomedeck.find({});
  }
   
  }

 
};

module.exports = resolvers;
