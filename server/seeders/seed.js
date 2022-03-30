const db = require('../config/connection');
const { user, productHomedeck } = require('../models');
const productData = require('./productData.json');

db.once('open', async () => {
  try {
    await user.deleteMany({});
    await productHomedeck.deleteMany({});
    await productHomedeck.create(productData);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
