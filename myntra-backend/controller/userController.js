const bcrypt = require("bcrypt");
const Product = require("../models/item");
const signup = require("../models/userdetails");

exports.getall = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

exports.newsignup = async (req, res) => {
  const { FirstName, LastName, Email, Password, Type } = req.body;
  const hashedpassword = await bcrypt.hash(Password, 10);
  const newid = new signup({
    FirstName,
    LastName,
    Email,
    Password: hashedpassword,
    Type,
  });
  await newid.save();
  return res.status(201).json(newid);
};


exports.checklogin = async(req , res) =>{

const {Email , Password} = req.body

const user = await signup.findOne({Email});
if(!user){
    return res.json(["Email not registered"])
}
 const matchpassword = await bcrypt.compare(Password , user.Password) 
 if(!matchpassword){
   
    return res.json(["wrong password"])
 }

 res.status(200).json([user.Type , user.FirstName])

}