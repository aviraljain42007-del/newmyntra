// controllers/productController.js
const Product = require("../models/item");

// Add new product
exports.addProduct = async (req, res) => {
    const {
      itemName,
      company,
      originalPrice,
      currentPrice,
      discountPercentage,
      ratingStars,
      ratingCount,
      returnPeriod,
      deliveryDate,
      image, // string path from frontend
    } = req.body;

    // Create new product
    const product = new Product({
      itemName,
      company,
      originalPrice,
      currentPrice,
      discountPercentage,
      ratingStars,
      ratingCount,
      returnPeriod,
      deliveryDate,
      image,
    });

    await product.save();
    res.status(201).json(product);
};



