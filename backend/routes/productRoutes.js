const express = require("express");
const {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");
const router = express.Router();

router.route("/").get(getProduct).post(createProduct);
router.route("/:id").put(updateProduct).delete(deleteProduct);
module.exports = router;
