
const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { addProduct, deleteitem } = require("../controller/productContoller");


router.post("/add", upload.single("image"), addProduct);
router.delete("/delete:id" , deleteitem);

module.exports = router;