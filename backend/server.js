const express = require("express");
const mongoose =require("mongoose");
const cors= require("cors");
require("dotenv").config();

const app=express();
const authRoutes=require("./routes/auth.js");
//Middleware
app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.get("/",(req,res)=>{
    res.send("Backend is running");
});
mongoose.connect(process.env.MONGO_URI).then(()=> console.log("MongoDB Connected")).catch((error)=>console.log(error));
app.listen(5000,"0.0.0.0",()=>{
    console.log("Server running on port 5000");
});
const authMiddleware=require("./middleware/authMiddleware.js");
app.get("/api/protected",authMiddleware,(req,res)=>{
    res.json({message: "You are authorized",user: req.user});
});