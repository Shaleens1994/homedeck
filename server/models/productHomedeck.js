const { Schema, model } = require('mongoose');

const productHomedeckSchema = new Schema({
  
    itemcategory: {
      type: String,
      required: true,
      unique: true,
      trim: true
  },
  
    productitem: {
      type: String,
      required: true,
      unique: true,
      trim: true
  },
  
    productdeatils: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    
    image: { 
      type: String,
      required: true,
      unique: true,
      trim: true
  },

   rentamount:  {
    type: Number,
    required: true
    
  },

    availability: {
      type: String,
      required: true,
      unique: true,
      trim: true
  },
  
    volume: {
      type: Number,
      required: true
  },
  
});

const productHomedeck = model('productHomedeck', productHomedeckSchema);

module.exports = productHomedeck;
