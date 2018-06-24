const mongoose = require("mongoose");

/**
 * Product Schema
 * @typedef Store
 * */

const productSchema = new mongoose.Schema(
  {
    brand_name: {
      type: String,
      required: true
    },
    product_name: {
      type: String,
      required: true
    },
    product_price: {
      type: Number,
      required: true
    },
    product_promotion_price: {
      type: Number,
      required: false
    },
    product_discount: {
      type: String,
      required: false
    },
    product_images: [String],
    product_id: {
      type: String,
      required: true
    },
    product_url: {
      type: String,
      required: true
    }
  },
  {
    collection: "product"
  }
);

module.exports = mongoose.model("Product", productSchema);
