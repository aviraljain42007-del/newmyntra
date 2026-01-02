
const Product = require("../models/item");

exports.getall = async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
 
};