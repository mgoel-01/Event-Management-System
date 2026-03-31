<<<<<<< HEAD
import React from "react";

const MyEvents = () => {
  // TEMP: fake data (later replace with backend)
  const events = [
    { id: 1, title: "Music Fest", date: "2026-03-10" },
    { id: 2, title: "Tech Meetup", date: "2026-03-15" }
  ];
=======
import React, { useEffect, useState } from "react";

const MyEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/events");
        const data = await res.json();

        const user = JSON.parse(localStorage.getItem("user"));

        // 🔥 show only events created by this user
const myEvents = data.filter(
  (event) => String(event.createdBy) === String(user.id)
);

        setEvents(myEvents);

      } catch (err) {
        console.log(err);
      }
    };

    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

await fetch(`http://localhost:5000/api/events/${id}`, {
  method: "DELETE",
  headers: {
    Authorization: `Bearer ${token}`
  }
});

      // remove from UI
      setEvents(events.filter(e => e._id !== id));

    } catch (err) {
      console.log(err);
    }
  };
>>>>>>> origin/main

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Events</h1>

      {events.length === 0 ? (
        <p>No events created yet.</p>
      ) : (
        events.map((event) => (
<<<<<<< HEAD
          <div key={event.id} style={{
=======
          <div key={event._id} style={{
>>>>>>> origin/main
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "8px"
          }}>
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>

<<<<<<< HEAD
            {/* Organizer controls */}
            <button>Edit</button>
            <button style={{ marginLeft: "10px", color: "red" }}>
=======
            <button>Edit</button>

            <button
              style={{ marginLeft: "10px", color: "red" }}
              onClick={() => handleDelete(event._id)}
            >
>>>>>>> origin/main
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default MyEvents;