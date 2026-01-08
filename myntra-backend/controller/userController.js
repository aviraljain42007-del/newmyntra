const bcrypt = require("bcrypt");
const Product = require("../models/item");
const signup = require("../models/userdetails");
const { signToken } = require("../middleware/auth");

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
    return res.json("Email not registered")
}
 const matchpassword = await bcrypt.compare(Password , user.Password) 
 if(!matchpassword){
   
    return res.json("wrong password")
 }

 const token = signToken(user)
 res.cookie("token" , token ,{
  httpOnly : true,
  sameSite : "lax"
 })
 res.status(200).json("login successful")

}

exports.seedetails = async(req ,res) =>{
  const {id} = req.params;
  const item = await Product.findById(id);
  res.status(200).json(item)

}

exports. getMe = (req, res) => {
  try {
    res.status(200).json({
      id: req.user.id,
      email: req.user.email,
      type: req.user.role,
      name: req.user.name
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.logout = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax" 
  });

  res.status(200).json({ message: "Logged out successfully" });
};