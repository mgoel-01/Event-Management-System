import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      url,
      date,
      time,
      location,
      price,
      createdBy
    } = req.body;

    const event = new Event({
      title,
      description,
      category,
      url,
      date,
      time,
      location,
      price,
      createdBy
    });

    await event.save();

    // ✅ VERY IMPORTANT: return here
    return res.status(201).json({
      message: "Event created successfully",
      event
    });

  } catch (err) {
    console.log("CREATE EVENT ERROR:", err);

    return res.status(500).json({
      message: "Server error"
    });
  }
});

router.get("/",async(req,res)=>{
    try{
        const events=await Event.find();
        res.json(events);
    }
    catch(error){
        res.status(500).json({message: "Server Error"});
    }
});

router.delete("/:id",async(req,res)=>{
    try{
        const events=await Event.findByIdAndDelete(req.params.id);
        res.json({message: "Event Deleted"});
    }
    catch(error){
        res.status(500).json({message: "Server Error"});
    }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json({
      message: "Event updated successfully",
      event: updatedEvent
    });

  } catch (error) {
    console.log("UPDATE ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    return res.json(event);
  } catch (err) {
    console.log("FETCH ONE EVENT ERROR:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;