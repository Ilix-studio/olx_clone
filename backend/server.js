require('dotenv').config()
const express = require("express");
const connectDB  = require('./config/db');
const app = express()
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => { 
    console.log(`listening at http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    res.send('hi')
  })

  connectDB();


  app.use('/api/users', require('./routes/userRoutes'))
  app.use('/api/products', require('./routes/productRoutes'))