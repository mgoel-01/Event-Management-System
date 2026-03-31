import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import SectionBar from './SectionBar'
import { useNavigate } from 'react-router-dom'

const DashBoard = (props) => {
  const navigate = useNavigate();
<<<<<<< HEAD
  const user = JSON.parse(localStorage.getItem("user"));
  const [bookedEvents, setBookedEvents] = useState([]);
=======
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const userId = user?._id;
  const [bookedEvents, setBookedEvents] = useState([]);
  const role = localStorage.getItem("role");
>>>>>>> origin/main
  // ✅ Step 1: state for filter
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
<<<<<<< HEAD
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    const fetchBookings = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/bookings/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const data = await res.json();
        setBookedEvents(data);

      } 
      catch (err) {
        console.log(err);
      }
    };

    fetchBookings();
  }, []);
=======
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
    return;
  }

  if (!userId) return; // wait until user is available

  const fetchBookings = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/bookings/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await res.json();
      setBookedEvents(data);

    } catch (err) {
      console.log(err);
    }
  };

  fetchBookings();

}, [navigate, userId]);
>>>>>>> origin/main

  // ✅ Step 2: filter logic
  const isBooked = (eventId) => {
  return bookedEvents.some(e => e.eventId === eventId);
  };
  const filteredEvents =
    selectedCategory === "All"
      ? props.events
      : props.events.filter(
          (event) => event.category === selectedCategory
        );
  return (
    <div id="dashboard">
<<<<<<< HEAD
      <h1>Discover Events</h1>
      <h2>Hello {user.name}!</h2>
=======
      <h1>
  {role === "organizer" ? "Manage Your Events" : "Discover Events"}
</h1>
      <h2>Hello {user?.name || "Guest"}!</h2> 
>>>>>>> origin/main
      {/* ✅ Step 3: pass function to SectionBar */}
      <SectionBar setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />

      <div className="cardContainer">
        {/* ✅ Step 4: use filteredEvents instead of props.events */}
        {filteredEvents.map((elem) => {
          return (
            <Cards
              id={elem.id}
              key={elem.id}
              tag={elem.category}
              title={elem.title}
              url={elem.url}
              date={elem.date}
              time={elem.time}
              location={elem.location}
              price={elem.price}
              isBooked={isBooked(elem.id)}
<<<<<<< HEAD
=======
               role={localStorage.getItem("role")}
>>>>>>> origin/main
            />
          );
        })}
      </div>
    </div>
  );
};

export default DashBoard;