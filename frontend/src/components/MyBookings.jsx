import { useEffect, useState } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;
  if (!userId) {
  return <h2>Please login first</h2>;
}
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch(
          `https://event-management-system-613m.onrender.com/api/bookings/user/${userId}`
        );

        const data = await res.json();
        setBookings(data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🎟️ My Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings yet 😢</p>
      ) : (
        bookings.map((b, index) => (
          <div key={index} style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0"
          }}>
            <h3>{b.eventName}</h3>
            <p>Tickets: {b.quantity}</p>
            <p>Total: ₹{b.totalAmount}</p>
            <p>Date: {new Date(b.date).toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MyBookings;