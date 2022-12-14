const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controller/userController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/user", protect, getUser);

module.exports = router;
