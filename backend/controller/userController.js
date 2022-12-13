
const User = require("../models/userSchema");

//desc - register User
//route - POST /api/user
//Public
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(301).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    }); 
  }else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};
//desc - login User
//route - POST /api/user
//Public
const loginUser = async(req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({ email });
  if(user){
    res.json({
        _id: user.id,
        name: user.name,
        email: user.email,  
    })
  }else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
};

//desc - login User
//route - GET /api/user
//privaqte
const getUser = async(req, res) => {
    const { _id, name, email } = await User.findById(req.user.id);
    res.status(200).json({
        id: _id,
        name,
        email,
      });
};
module.exports = {
  registerUser,
  loginUser,
  getUser,
};

//set errorhandler in middleawew , gro trycatech
