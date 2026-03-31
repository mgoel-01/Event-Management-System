import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyEvents = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
  const fetchEvents = async () => {
    try {
      const res = await fetch("http://event-management-system-613m.onrender.com/api/events");
      const data = await res.json();

      const user = JSON.parse(localStorage.getItem("user"));

      // 🔥 filter only my events
      const myEvents = data.filter(
        (event) => event.createdBy === user.id
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

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Events</h1>

      {events.length === 0 ? (
        <p>No events created yet.</p>
      ) : (
        events.map((event) => (
          <div key={event._id} style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "8px"
          }}>
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>

            {/* Organizer controls */}
<button onClick={() => navigate(`/edit-event/${event._id}`)}>
  Edit
</button>



            <button
              style={{ marginLeft: "10px", color: "red" }}
              onClick={() => handleDelete(event._id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default MyEvents;