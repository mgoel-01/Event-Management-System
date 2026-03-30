import React, { useState } from "react";

const CreateEvent = () => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    date: "",
    time: "",
    location: "",
    price: "",
    image: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    const response = await fetch(
      "http://localhost:5000/api/events/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          title: form.title,
          description: form.description,
          category: form.category,
          url: form.image,
          date: form.date,
          time: form.time,
          location: form.location,
          price: Number(form.price),
          createdBy: user.id
        })
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("Event Created Successfully!");
      window.location.href = "/my-events"; // go to MyEvents page
    } else {
      alert(data.message || "Error creating event");
    }

  } catch (error) {
    console.log(error);
    alert("Server Error");
  }
};

  return (
    <div id="create-event">
      <h1>Create Event</h1>

      <form onSubmit={handleSubmit} id="create-form">

        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Music">Music</option>
          <option value="Technology">Technology</option>
          <option value="Food">Food</option>
          <option value="Business">Business</option>
          <option value="Workshop">Workshop</option>
          <option value="Adventure">Adventure</option>
        </select>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Ticket Price"
          value={form.price}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Event Description"
          value={form.description}
          onChange={handleChange}
          rows="4"
        />

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;