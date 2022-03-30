const { Schema, model } = require('mongoose');
const orderedProducts = require('./orderedProducts');
const bcrypt = require('bcrypt');
const userSchema = new Schema({
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    phoneNumber: {
      type: String,
      trim: true
    },
    orders: [Order.schema]
  });




  const user = model('user', userSchema);

module.exports = user;