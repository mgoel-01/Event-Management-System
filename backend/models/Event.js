import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,

  category: {
    type: String,
    required: true
  },

  image_name: String,

  url: {
    type: String
  },

  date: {
    type: String,
    required: true
  },

  day: String,

  time: String,

  location: String,

  price: {
    type: Number,
    default: 0
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

export default mongoose.model("Event", eventSchema);