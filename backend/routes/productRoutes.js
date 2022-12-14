const express = require("express");
const {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");
const {protect} = require("../middleware/authMiddleware")
const router = express.Router();

router.route("/").get(protect,getProduct).post(protect,createProduct);
router.route("/:id").put(protect,updateProduct).delete(protect,deleteProduct);
module.exports = router;
