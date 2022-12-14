const UserProduct = require("../models/ProductSchema");
const User = require("../models/userSchema");
const multer = require("multer");
const expressAsyncHandler = require("express-async-handler");

const getProduct = async (req, res) => {
  const userProducts = await UserProduct.find();
  res.status(200).json(userProducts);
};
//image storage path
const imgconfig = {};

//image Filter
const isImage = {};

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});

//desc -  create User Product
//route - POST /api/user
//Private
const createProduct = expressAsyncHandler(async (req, res) => {
  const { productName, price, image, phno } = req.body;
  if (!productName || !price || !image || !phno) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const user = await User.findById(req.user.id)
  const userProduct = await UserProduct.create({
    user,
    productName,
    price,
    image,
    phno,
  });
  if (userProduct) {
    res.status(201).json({
        
            
            user:req.body.id,
            productName:userProduct.productName,
            price: userProduct.price,
            image: userProduct.image,
            phno: userProduct.phno
        
    });
  } else {
    res.status(400);
    throw new Error("Invalid product data");
  }
});

const updateProduct = async (req, res) => {};
const deleteProduct = async (req, res) => {};

module.exports = {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
