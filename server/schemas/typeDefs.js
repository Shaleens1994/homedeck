const { gql } = require('apollo-server-express');

const typeDefs = gql`
type productHomedeck {
    _id: ID
    itemcategory: String
    productitem: String
    productdetails: String
    image: String
    rentamount: Int
    availability: String
    volume: Int
  }

  type Query {
    productHomedeck: [productHomedeck]
    
  }
 
`;

module.exports = typeDefs;
