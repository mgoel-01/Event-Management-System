import React from 'react'
import Cards from './components/Cards'
import DashBoard from './components/DashBoard'
import Login from "./components/Login/Login.jsx"
import Details from "./components/Details/Details.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Navbar from "./components/Navbar.jsx";
import Profile from "./components/Profile.jsx";
import OrganizerRoute from "./components/OrganizerRoutes.jsx";
import MyEvents from "./components/MyEvents.jsx";
import CreateEvent from "./components/CreateEvent.jsx";
import Payment from "./components/Payment";
import Success from "./components/Success";
import MyBookings from "./components/MyBookings.jsx";
import EditEvent from './components/EditEvent.jsx';

import {Routes,Route} from "react-router-dom"
import { useLocation } from 'react-router-dom';
import { Navigate } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Sunset Music Festival",
    category: "Music",
    image_name: "sunset_festival.jpg",
    url: "https://plus.unsplash.com/premium_photo-1661306437817-8ab34be91e0c?q=80&w=1170&auto=format&fit=crop",
    date: "2026-03-10",
    day: "Tuesday",
    time: "18:30",
    location: "Mumbai Central Park, Mumbai",
    price: 1499,
    description:
      "Experience an unforgettable evening of live performances as top artists light up the stage under a breathtaking sunset. From indie vibes to electrifying beats, this open-air music festival promises food stalls, vibrant crowds, and pure summer energy."
  },
  {
    id: 2,
    title: "Tech Innovators Meetup",
    category: "Technology",
    image_name: "tech_meetup.png",
    url: "https://plus.unsplash.com/premium_photo-1736892868741-35bc1ae89091?q=80&w=1170&auto=format&fit=crop",
    date: "2026-03-15",
    day: "Sunday",
    time: "10:00",
    location: "Bangalore Tech Convention Center, Bangalore",
    price: 799,
    description:
      "Join leading developers, founders, and tech enthusiasts for a day of networking, innovation talks, and startup showcases. Discover emerging trends in AI, cloud computing, and product design while connecting with the brightest minds in the industry."
  },
  {
    id: 3,
    title: "Food Carnival 2026",
    category: "Food",
    image_name: "food_carnival.jpg",
    url: "https://images.unsplash.com/photo-1676903781910-ff0291ce9031?q=80&w=1171&auto=format&fit=crop",
    date: "2026-04-02",
    day: "Thursday",
    time: "12:00",
    location: "Delhi Exhibition Grounds, Delhi",
    price: 499,
    description:
      "Indulge in a culinary adventure featuring street food favorites, gourmet delights, and live cooking demos from renowned chefs. A paradise for food lovers with flavors from around the world all in one vibrant celebration."
  },
  {
    id: 4,
    title: "Startup Pitch Night",
    category: "Business",
    image_name: "startup_pitch.jpg",
    url: "https://plus.unsplash.com/premium_photo-1675791190627-c3ec9ae8bc3d?q=80&w=1170&auto=format&fit=crop",
    date: "2026-04-08",
    day: "Wednesday",
    time: "17:00",
    location: "Hyderabad Innovation Hub, Hyderabad",
    price: 999,
    description:
      "Watch ambitious entrepreneurs pitch groundbreaking ideas to top investors and industry leaders. A high-energy evening filled with innovation, networking opportunities, and the next big startup story in the making."
  },
  {
    id: 5,
    title: "Photography Workshop",
    category: "Workshop",
    image_name: "photo_workshop.jpg",
    url: "https://plus.unsplash.com/premium_photo-1668383207771-dcf6e2d520f5?q=80&w=736&auto=format&fit=crop",
    date: "2026-04-15",
    day: "Wednesday",
    time: "09:30",
    location: "Jaipur Art Studio, Jaipur",
    price: 1299,
    description:
      "Learn the art of capturing stunning visuals with guidance from professional photographers. From camera settings to creative composition, this hands-on workshop will elevate your photography skills to the next level."
  },
  {
    id: 6,
    title: "AI & ML Conference",
    category: "Technology",
    image_name: "ai_conference.jpg",
    url: "https://plus.unsplash.com/premium_photo-1701113010522-5d7e58d333ec?q=80&w=1170&auto=format&fit=crop",
    date: "2026-05-01",
    day: "Friday",
    time: "11:00",
    location: "Chennai International Convention Hall, Chennai",
    price: 1999,
    description:
      "Dive deep into artificial intelligence and machine learning advancements with keynote sessions from global experts. Explore real-world case studies, research breakthroughs, and future-ready innovations shaping tomorrow’s world."
  },
  {
    id: 7,
    title: "Live Standup Comedy Night",
    category: "Entertainment",
    image_name: "comedy_night.jpg",
    url: "https://images.unsplash.com/photo-1683304554869-8a871c913096?q=80&w=687&auto=format&fit=crop",
    date: "2026-05-12",
    day: "Tuesday",
    time: "20:00",
    location: "Phoenix Mall Amphitheatre, Pune",
    price: 899,
    description:
      "Get ready for a laughter-packed evening featuring some of the funniest stand-up comedians in the country. From relatable everyday humor to bold punchlines, this show guarantees non-stop entertainment."
  },
  {
    id: 8,
    title: "Outdoor Adventure Camp",
    category: "Adventure",
    image_name: "adventure_camp.jpg",
    url: "https://images.unsplash.com/photo-1640951332580-1072ff909952?q=80&w=1170&auto=format&fit=crop",
    date: "2026-05-20",
    day: "Wednesday",
    time: "06:00",
    location: "Solang Valley Base Camp, Manali",
    price: 2499,
    description:
      "Escape into nature with thrilling outdoor activities including trekking, rock climbing, and campfire nights under the stars. Perfect for adventure seekers looking to recharge and reconnect with the wild."
  }
];



const App = () => {
  const location=useLocation();

  return (
    <>
         {location.pathname !== "/login" &&
          location.pathname !== "/signup" && <Navbar />}
    <Routes>
            <Route
  path="/"
  element={
    localStorage.getItem("token")
      ? <Navigate to="/dashboard" />
      : <Navigate to="/login" />
  }
/>
            {/* <Route path="/details" element={<Details/>}/> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/dashboard" element={<DashBoard events={events}/>}/>
            <Route path="/details/:id" element={<Details events={events}/>} />
            {/* <Route path="/" element={<Navigate to="/login" />} /> */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/my-events"element={
                <OrganizerRoute>
                  <MyEvents />
                </OrganizerRoute>
              }
            />

            <Route
              path="/create-event"
              element={
                <OrganizerRoute>
                  <CreateEvent />
                </OrganizerRoute>
              }
            />
            <Route path="/payment" element={<Payment />} />
            <Route path="/success" element={<Success />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/edit-event/:id" element={<EditEvent />} />
         </Routes>

      </>
  )
}


export default App
