const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const path=require("path")

//routes import
const home_route=require("./routes/home")
const E_complaint_route = require("./routes/E_complaint");
const Missing_person_route=require("./routes/missing_person")
const Unidentified_body_route=require("./routes/Unidentified_body")
const Cyber_Crime_route=require("./routes/CyberCrime")

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
app.use(express.static(path.join(__dirname, "../public")));

//routes
app.use("/",home_route)
app.use("/E_complaint", E_complaint_route);
app.use("/Missing_person",Missing_person_route)
app.use("/Unidentified_body",Unidentified_body_route)
app.use("/Cyber_Crime",Cyber_Crime_route)

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
