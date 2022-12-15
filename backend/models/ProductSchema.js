const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  productName: {
    type: String,
    required: [true, "Please add your product name"],
  },
  price: {
    type: String,
    required: [true, "Please add price"],
  },
  image: {
    data: Buffer,
    contentType: String,
   
  },
  phno: {
    type: Number,
    required: [true, "Please ad your phone number"],
  },
});
module.exports = mongoose.model("UserProduct", productSchema);
