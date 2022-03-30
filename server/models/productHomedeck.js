const { Schema, model } = require('mongoose');

const productHomedeckSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  skills: [
    {
      type: String,
      trim: true,
    },
  ],
});

const productHomedeck = model('productHomedeck', productHomedeckSchema);

module.exports = productHomedeck;
