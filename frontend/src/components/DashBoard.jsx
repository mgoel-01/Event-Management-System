import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import SectionBar from "./SectionBar";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || null;
  const userId = user?.id;
  const role = localStorage.getItem("role");

  const [events, setEvents] = useState([]); // ✅ all events
  const [bookedEvents, setBookedEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ Fetch all events (MAIN FIX)
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("https://event-management-system-613m.onrender.com/api/events");
        const data = await res.json();

        setEvents(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchEvents();
  }, []);

  // ✅ Fetch bookings
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    if (!userId) return;

    const fetchBookings = async () => {
      try {
        const res = await fetch(
          `https://event-management-system-613m.onrender.com/api/bookings/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
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

  // ✅ Check if event is booked
  const isBooked = (eventId) => {
    return bookedEvents.some(
      (e) => e.eventId === eventId || e.eventId?._id === eventId
    );
  };

  // ✅ Filter events
  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <div id="dashboard">
      <h1>
        {role === "organizer"
          ? "Manage Your Events"
          : "Discover Events"}
      </h1>

      <h2>Hello {user?.name || "Guest"}!</h2>

      {/* Category Filter */}
      <SectionBar
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      <div className="cardContainer">
        {filteredEvents.map((elem) => (
          <Cards
            key={elem._id}
            id={elem._id}
            tag={elem.category}
            title={elem.title}
            url={elem.url}
            date={elem.date}
            time={elem.time}
            location={elem.location}
            price={elem.price}
            isBooked={isBooked(elem._id)}
            role={role}
            createdBy={elem.createdBy} // optional
          />
        ))}
      </div>
    </div>
  );
};

export default DashBoard;