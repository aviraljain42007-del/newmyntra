const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      required: true,
    },


    originalPrice: {
      type: Number,
      required: true,
    },

    currentPrice: {
      type: Number,
      required: true,
    },

    discountPercentage: {
      type: Number,
    },

    ratingStars: {
      type: Number,
      min: 0,
      max: 5,
    },

    ratingCount: {
      type: Number,
      default: 0,
    },

    returnPeriod: {
      type: Number, // days
      default: 30,
    },

    deliveryDate: {
      type: Date,
    },

    image: {
      type: String, // multer file path
      required: true,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);