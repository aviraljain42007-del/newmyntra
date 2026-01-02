const Product = require("../models/item");
exports.addProduct = async (req, res) => {
  try {
    const product = new Product({
      ...req.body,
      image: req.file.path,
    });

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: "Upload failed" });
  }
};