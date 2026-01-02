// routes/product.js
const express = require("express");
const { addProduct } = require("../controller/userController");
const hostrouter = express.Router();


// POST /api/products/add
// Expects req.body to contain all product fields, including image as a string path
hostrouter.post("/addnew", addProduct);

exports.hostrouter = hostrouter;