import React, { useState } from "react";

const CreateEvent = () => {
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Event Created:", form);

    // Later → send to backend
    alert("Event Created Successfully!");

    setForm({
      title: "",
      date: "",
      location: ""
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create Event</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;