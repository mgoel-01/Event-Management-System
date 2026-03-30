import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: String,
  eventId: Number,
  eventName: String,
  quantity: Number,
  totalAmount: Number,
  paymentStatus: {
    type: String,
    default: "Success"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Booking", bookingSchema);