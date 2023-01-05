const UserProduct = require("../models/ProductSchema");
const User = require("../models/userSchema");
const multer = require("multer");
const asyncHandler = require("express-async-handler");

//desc -  get User Products
//route - GET /api/user
//Private
const getProduct = asyncHandler(async (req, res) => {
  const userProducts = await UserProduct.find();
  res.status(200).json(userProducts);
});

//Image storage
const Storage = multer.diskStorage({
  destination: "upload",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: Storage,
}).single("testImage");


//desc -  create User Product
//route - POST /api/user
//Private
const createProduct = asyncHandler(async (req, res) => {
  const { productName, price, image, phno } = req.body;
  if (!productName || !price || !image || !phno) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const user = await User.findById(req.user.id);
  const userProduct = await UserProduct.create({
    user,
    productName,
    price,
    image: {
      data:req.file.filename,
      contentType: [ 'image/png', 'image/jpg', 'image/jpeg'],
    },
    phno,
  });
  if (userProduct) {
    res.status(201).json({
      user: req.body.id,
      productName: userProduct.productName,
      price: userProduct.price,
      image: upload(),
      phno: userProduct.phno,
    });
  } else {
    res.status(400);
    throw new Error("Invalid product data");
  }
});

const updateProduct = asyncHandler (async (req, res) => {
    const userProduct = await UserProduct.findById(req.params.id)
    if(!userProduct){
        res.status(400);
        throw new Error("Product not found");
    }
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401);
        throw new Error("User not found")
      }
      if(userProduct.user.toString() !== user.id){
        res.status(401);
        throw new Error("User not authorized")
      }
      const updatedProduct =  await UserProduct.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(updatedProduct);
});
const deleteProduct = asyncHandler(async (req, res) => {
    const userProduct = await UserProduct.findById(req.params.id)
    if(!userProduct){
        res.status(400);
        throw new Error("Product not found");
    }
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401);
        throw new Error("User not found")
      }
    if(userProduct.user.toString() !== user.id){
        res.status(401);
        throw new Error("User not Authorized")
    }
    await userProduct.remove();
    res.status(200).json({id: req.params.id})
});

module.exports = {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
