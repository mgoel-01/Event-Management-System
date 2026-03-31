  // routes/booking.js
  import express from "express";
  import Booking from "../models/Booking.js";

  const router = express.Router();

  // ✅ CREATE BOOKING
  router.post("/", async (req, res) => {
    try {
      const { userId, eventId, eventName, quantity, totalAmount } = req.body;

      const booking = new Booking({
        userId,
        eventId,
        eventName,
        quantity,
        totalAmount
      });

      await booking.save();

      res.status(201).json({
        message: "Booking stored successfully",
        booking
      });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get("/user/:userId", async (req, res) => {
    try {
      const bookings = await Booking.find({
        userId: req.params.userId
      });

      res.json(bookings);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  export default router;