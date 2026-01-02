const Product = require("../models/item");
exports.addProduct = async (req, res) => {
  
    const product = new Product({
      ...req.body,
      image: req.file.path,
    });

    await product.save();
    res.status(201).json(product);
};

exports.deleteitem = async(req,res) =>{
    const {id}= req.params;
     await Product.findByIdAndDelete(id);
    res.status(200).json({id})
}