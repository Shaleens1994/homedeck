const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
  
    orderDate: {
      type: Date,
      default:Date.now
     
  },
  
    datePeriods: {
      type: String,
      required: true
      
  },
  products:[
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
  
  
});

const Order = model('Order', orderSchema);

module.exports = Order;