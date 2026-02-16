import React from 'react'
import { useNavigate } from "react-router-dom";
import {  Calendar , Clock, MapPin } from 'lucide-react';
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
const Cards = (props) => {

  // console.log(props);   
const navigate = useNavigate();
const handleLoginBook = (e) =>
        {
          e.preventDefault() ;
          navigate("/details") ;
        }

  return (
    <div className='card'>
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
        <p>${props.price}</p>
<button onClick={() => navigate(`/details/${props.id}`)}>
  Book Now
</button>
      </div>

    </div>
  )
}

export default Cards
