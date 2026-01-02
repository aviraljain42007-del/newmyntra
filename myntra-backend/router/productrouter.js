
const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { addProduct } = require("../controller/productContoller");


router.post("/add", upload.single("image"), addProduct);

module.exports = router;