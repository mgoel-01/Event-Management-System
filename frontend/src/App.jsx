import React from 'react'
import Cards from './components/Cards'
import DashBoard from './components/DashBoard'
import Login from "./components/Login/Login.jsx"
import Details from "./components/Details/Details.jsx";
import Signup from "./components/Signup/Signup.jsx"
import {Routes,Route} from "react-router-dom"

import { Navigate } from "react-router-dom";

const events = [
  {
    "id": 1,
    "title": "Sunset Music Festival",
    "category": "Music",
    "image_name": "sunset_festival.jpg",
    "url": "https://plus.unsplash.com/premium_photo-1661306437817-8ab34be91e0c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "date": "2026-03-10",
    "day": "Tuesday",
    "time": "18:30",
    "location": "Mumbai Central Park, Mumbai",
    "price": 1499
  },
  {
    "id": 2,
    "title": "Tech Innovators Meetup",
    "category": "Technology",
    "image_name": "tech_meetup.png",
    "url": "https://plus.unsplash.com/premium_photo-1736892868741-35bc1ae89091?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "date": "2026-03-15",
    "day": "Sunday",
    "time": "10:00",
    "location": "Bangalore Tech Convention Center, Bangalore",
    "price": 799
  },
  {
    "id": 3,
    "title": "Food Carnival 2026",
    "category": "Food",
    "image_name": "food_carnival.jpg",
    "url": "https://images.unsplash.com/photo-1676903781910-ff0291ce9031?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "date": "2026-04-02",
    "day": "Thursday",
    "time": "12:00",
    "location": "Delhi Exhibition Grounds, Delhi",
    "price": 499
  },
  {
    "id": 4,
    "title": "Startup Pitch Night",
    "category": "Business",
    "image_name": "startup_pitch.jpg",
    "url": "https://plus.unsplash.com/premium_photo-1675791190627-c3ec9ae8bc3d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "date": "2026-04-08",
    "day": "Wednesday",
    "time": "17:00",
    "location": "Hyderabad Innovation Hub, Hyderabad",
    "price": 999
  },
  {
    "id": 5,
    "title": "Photography Workshop",
    "category": "Workshop",
    "image_name": "photo_workshop.jpg",
    "url": "https://plus.unsplash.com/premium_photo-1668383207771-dcf6e2d520f5?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "date": "2026-04-15",
    "day": "Wednesday",
    "time": "09:30",
    "location": "Jaipur Art Studio, Jaipur",
    "price": 1299
  },
  {
    "id": 6,
    "title": "AI & ML Conference",
    "category": "Technology",
    "image_name": "ai_conference.jpg",
    "url": "https://plus.unsplash.com/premium_photo-1701113010522-5d7e58d333ec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "date": "2026-05-01",
    "day": "Friday",
    "time": "11:00",
    "location": "Chennai International Convention Hall, Chennai",
    "price": 1999
  },
  {
    "id": 7,
    "title": "Live Standup Comedy Night",
    "category": "Entertainment",
    "image_name": "comedy_night.jpg",
    "url": "https://images.unsplash.com/photo-1683304554869-8a871c913096?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "date": "2026-05-12",
    "day": "Tuesday",
    "time": "20:00",
    "location": "Phoenix Mall Amphitheatre, Pune",
    "price": 899
  },
  {
    "id": 8,
    "title": "Outdoor Adventure Camp",
    "category": "Adventure",
    "image_name": "adventure_camp.jpg",
    "url": "https://images.unsplash.com/photo-1640951332580-1072ff909952?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "date": "2026-05-20",
    "day": "Wednesday",
    "time": "06:00",
    "location": "Solang Valley Base Camp, Manali",
    "price": 2499
  }
];


const App = () => {
  return (
       <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/details" element={<Details/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/dashboard" element={<DashBoard events={events}/>}/>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<Navigate to="/login" />} />
         </Routes>
      
  )
}


export default App
