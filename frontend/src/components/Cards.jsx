import React from 'react'
import { useNavigate } from "react-router-dom";
import {  Calendar , Clock, MapPin } from 'lucide-react';
import { Link } from "react-router-dom";
const Cards = (props) => {

  // console.log(props);   
  const role = props.role;
const navigate = useNavigate();
const handleLoginBook = (e) =>
        {
          e.preventDefault() ;
          navigate("/details") ;
        }
        
  return (
    <div className={`card ${props.isBooked ? "booked" : ""}`} >
      <div className="upperPart">
        <p className="tag">{props.tag}</p>
        <img src={props.url} alt="" />
      </div>

      <div className="middlePart">
        <h1>{props.title}</h1>
        <p><Calendar size={16.5}/>  {props.date}</p>
        <p><Clock size={16.5} /> {props.time}</p>
        <p><MapPin size={16.5} /> {props.location} </p>
      </div>

      <div className='bottomPart'>
        <p>Rs. {props.price}</p>
      {role === "attendee" && (
  props.isBooked ? (
    <button disabled>Booked ✅</button>
  ) : (
    <button
      onClick={() => {
        navigate(`/details/${props.id}`);
      }}
    >
      Book Now
    </button>
  )
)}

{role === "organizer" && (
  <button
  onClick={() => navigate(`/details/${props.id}`)} // ✅ FIXED
>
  View Details
</button>
)}
      </div>

    </div>
  )
}

export default Cards
