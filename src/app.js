const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const crimeRoutes = require("./routes/crimeReporting");
const mongoose = require("mongoose");
const path=require("path")

dotenv.config();

//server port
const PORT = process.env.PORT || 3045;

//app
const app = express();

//mongo db connection
mongoose
.connect("mongodb://localhost:27017/CRepo")
.then(()=>console.log("MongoDB connected"))
.catch((err)=>console.log("error",err))

//view engine
app.set("view engine","ejs")
app.set("views",path.resolve("./src/views"))

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

//routes
app.use("/", crimeRoutes);

//error handle
app.use((err, req, res, next) =>
{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    res.status(statusCode).json(
    {
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack
    });
});

app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)});
