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
  type orderedProducts {
    _id: ID
    orderDate: String
    datePeriods: String
    productHomedeck:[productHomedeck]

  }

  type Query {
    productHomedeck: [productHomedeck]
    orderedProducts:[orderedProducts]
        
  }
 
`;

module.exports = typeDefs;
