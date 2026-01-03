// routes/product.js
const express = require("express");
const { getall, newsignup, checklogin } = require("../controller/userController");

const userrouter = express.Router();

userrouter.get("/getall", getall);
userrouter.post("/signup" , newsignup)
userrouter.post("/login" , checklogin)


exports.userrouter = userrouter;

