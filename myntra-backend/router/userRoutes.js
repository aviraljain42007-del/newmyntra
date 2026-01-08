const { verifyToken }  = require("../middleware/auth");

const express = require("express");

const { getall, newsignup, checklogin, seedetails, getMe, logout } = require("../controller/userController");

const userrouter = express.Router();

userrouter.get("/getall", getall);
userrouter.post("/signup" , newsignup)
userrouter.post("/login" , checklogin)
userrouter.get("/getdetails:id" , seedetails)
userrouter.get("/me", verifyToken, getMe);
userrouter.post("/logout", logout)


exports.userrouter = userrouter;

