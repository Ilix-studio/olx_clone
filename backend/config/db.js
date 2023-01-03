require('dotenv').config()
const mongoose = require('mongoose')
const connectString = process.env.MONGO_STRING
mongoose.set('strictQuery', false);
const connectDB = async() => {
    try {
        await mongoose.connect(connectString, {
            useUnifiedTopology: true,
            useNewUrlParser:true,
        })
        console.log(`Mongo Connected 💖`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
module.exports = connectDB