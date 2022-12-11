require('dotenv').config()
const express = require("express");
const connectDB  = require('./config/db');
const app = express()
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    res.send('hi')
  })

  connectDB();