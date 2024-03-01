const express =require('express');
const app = express();
const dotenv = require("dotenv");
const cookieParser =require("cookie-parser");

app.use(express.json());
app.use(cookieParser());



if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({
        path:"config/.env"
    })}

// //route import

const user= require("./routes/UserRoute");

app.use("/api/v2",user);

module.exports =app;