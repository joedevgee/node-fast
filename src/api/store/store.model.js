const mongoose = require("mongoose");

/**
 * Product Schema
 */

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

storeSchema.statics = {
  async list() {
    const list = this.find();
    return list;
  }
};

/**
 * @typedef Store
 */
module.exports = mongoose.model("Store", storeSchema);
