// routes/product.js
const express = require("express");
const { getall } = require("../controller/userController");

const userrouter = express.Router();


// POST /api/products/add
// Expects req.body to contain all product fields, including image as a string path
userrouter.get("/getall", getall);

exports.userrouter = userrouter;

