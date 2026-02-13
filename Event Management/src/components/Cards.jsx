import React from 'react'
import { useNavigate } from "react-router-dom";
import {  Calendar , Clock, MapPin } from 'lucide-react';
const Cards = () => {
  const navigate=useNavigate();
  const BookNow=()=>{
    navigate("/details");
  }
  return (
    <div className='card'>
      <div className="upperPart">
        <p className="tag">Music</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuHPUc0mj-HJIueb9m1w-Eo4TfDjr2wK2RA&s" alt="" />
      </div>

      <div className="middlePart">
        <h1>Summer Music Festival 2026</h1>
        <p><Calendar size={16.5}/>  Wed , july 15 2026</p>
        <p><Clock size={16.5} /> 18:00</p>
        <p><MapPin size={16.5} /> Central Park Arena </p>
      </div>

      <div className='bottomPart'>
        <p>$69.69</p>
        <button onClick={BookNow}>Book Now</button>
      </div>

    </div>
  )
}

export default Cards
