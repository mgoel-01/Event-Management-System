import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "",
    date: "",
    time: "",
    location: "",
    price: "",
    url: "",
    description: ""
  });

  // ✅ Fetch existing event data
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`https://event-management-system-613m.onrender.com/api/events`);
        const data = await res.json();

        const event = data.find(e => e._id === id);

        if (event) {
          setForm(event);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchEvent();
  }, [id]);

  // handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Update event
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `http://event-management-system-613m.onrender.com/api/events/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            ...form,
            price: form.price ? Number(form.price) : 0
          })
        }
      );

      if (res.ok) {
        alert("Event updated successfully");
        navigate("/my-events");
      } else {
        alert("Update failed");
      }

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Edit Event</h1>

      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} />
        <input name="category" value={form.category} onChange={handleChange} />
        <input type="date" name="date" value={form.date} onChange={handleChange} />
        <input type="time" name="time" value={form.time} onChange={handleChange} />
        <input name="location" value={form.location} onChange={handleChange} />
        <input name="price" value={form.price} onChange={handleChange} />
        <input name="url" value={form.url} onChange={handleChange} />
        <textarea name="description" value={form.description} onChange={handleChange} />

        <button type="submit">Update Event</button>
      </form>
    </div>
  );
};

export default EditEvent;