const { Schema, model } = require('mongoose');

const orderedProductsSchema = new Schema({
  
    orderDate: {
      type: Date,
      default:Date.now
     
  },
  
    datePeriods: {
      type: String,
      required: true
      
  },
  productHomedeck:[
{
 type: Schema.Types.ObjectId,
 ref: 'productHomedeck'
}
  ]
  
  
});

const orderedProducts = model('orderedProducts', orderedProductsSchema);

module.exports = orderedProducts;