const express = require("express");
const cors = require("cors");
require('dotenv/config');
// const mongoose = require('mongoose');

// const routerAuth = require('./routes/auth');
// const routerProduct = require('./routes/product');
// const routerCategory = require('./routes/category');


const app = express();

// middleware
app.use(cors());
app.use(express.json());

// app.use("/api", routerAuth);
// app.use("/api", routerProduct);
// app.use("/api", routerCategory);

// connect db
// mongoose.connect('mongodb://localhost:27017/we17103', () => {
//     console.log('successfully')
// });

app.listen(process.env.PORT, () => {
    console.log('Kết nối thành công, cổng ' + process.env.PORT)
})