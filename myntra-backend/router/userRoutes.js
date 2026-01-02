// routes/product.js
const express = require("express");
const { getall } = require("../controller/userController");

const userrouter = express.Router();

userrouter.get("/getall", getall);

exports.userrouter = userrouter;

