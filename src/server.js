const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const crimeRoutes = require("./routes/crimeReporting");
const { default: mongoose } = require("mongoose");

dotenv.config();

const app = express();

/* Database connection */
mongoose
.connect("mongodb://localhost:27017/CRepo")
.then(()=>console.log("MongoDB connected"))
.catch((err)=>console.log("error",err))

/* Middlewares */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Routes */
app.use("/api/crimes", crimeRoutes);

/* Health check */
app.get("/", (req, res) =>
{
    res.status(200).json(
    {
        message: "Crime Reporting API is running"
    });
});

/* Error handler */
app.use((err, req, res, next) =>
{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    res.status(statusCode).json(
    {
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack
    });
});

/* Server start */
const PORT = process.env.PORT || 3045;

app.listen(PORT, () =>
{
    console.log(`Server running on port ${PORT}`);
});
