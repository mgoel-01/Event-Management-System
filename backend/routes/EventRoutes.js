import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

router.post("/create",async(req,res)=>{
    try{
        const event= await Event.create(req.body);
        res.status(201).json(event);
    }
    catch(error){
        res.status(500).json({message: "Server Error"});
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

export default router;