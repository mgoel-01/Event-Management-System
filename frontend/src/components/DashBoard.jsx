import React from 'react'
import Cards from './Cards'
import SectionBar from './SectionBar'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const DashBoard = (props) => {
  //so props.events is the array 
  // console.log(props.events) ;
  const navigate= useNavigate();
  useEffect(()=>{
    const token=localStorage.getItem("token");
    if(!token){
      navigate("/login");
    }
  },[]);
  return (
    <div id="dashboard">
      <h1>Discover Events</h1>
      <SectionBar />
      <div className="cardContainer">
        {props.events.map((elem,idx)=>
                    {
                      return <Cards id = {idx} key={idx} tag={elem.category} title={elem.title} url = {elem.url} date ={elem.date} time={elem.time} location={elem.location} price={elem.price}/>
                    })}
      </div>
    </div>
  )
}

export default DashBoard
