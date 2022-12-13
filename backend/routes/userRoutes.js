const express = require('express')
const { registerUser, loginUser, getUser } = require('../controller/userController')
const router = express.Router()



router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/user', getUser)


module.exports = router;