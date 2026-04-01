import express  from "express";
import mongoose  from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app=express();

//Routes
import authRoutes from "./routes/auth.js";
import eventRoutes from "./routes/EventRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import bookingRoutes from "./routes/booking.js";
import paymentRoutes from "./routes/payment.js";
//Middleware
app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.get("/",(req,res)=>{
    res.send("Backend is running");
}); 
app.use("/api/events",eventRoutes);

app.use("/api/users", userRoutes);

app.use("/api/bookings", bookingRoutes);

app.use("/api/payment", paymentRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
import authMiddleware from "./middleware/authMiddleware.js";
app.get("/api/protected",authMiddleware,(req,res)=>{
    res.json({message: "You are authorized",user: req.user});
});

