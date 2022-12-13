

//desc - register User
//route - POST /api/user
//Public
const registerUser = (req, res) => {
    res.json({message: "Register User"})
       
}
//desc - login User
//route - POST /api/user
//Public
const loginUser = (req, res) => {
    res.json({message: "login User"})
}

//desc - login User
//route - GET /api/user
//privaqte
const getUser = (req, res)=> {
    res.json({message: "get the User"})
}
module.exports = {
    registerUser,
    loginUser,
    getUser,
}

//set errorhandler in middleawew , gro trycatech