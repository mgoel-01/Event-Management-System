import React from "react";

const MyEvents = () => {
  // TEMP: fake data (later replace with backend)
  const events = [
    { id: 1, title: "Music Fest", date: "2026-03-10" },
    { id: 2, title: "Tech Meetup", date: "2026-03-15" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Events</h1>

      {events.length === 0 ? (
        <p>No events created yet.</p>
      ) : (
        events.map((event) => (
          <div key={event.id} style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "8px"
          }}>
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>

            {/* Organizer controls */}
            <button>Edit</button>
            <button style={{ marginLeft: "10px", color: "red" }}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default MyEvents;