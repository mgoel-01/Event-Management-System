import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
  const saveBooking = async () => {
    try {
      const bookingData = JSON.parse(
        localStorage.getItem("pendingBooking")
      );

      console.log("BOOKING DATA:", bookingData);

      const res = await fetch(
        "https://event-management-system-613m.onrender.com/api/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      const data = await res.json();

      console.log("BOOKING RESPONSE:", data);
      console.log("STATUS:", res.status);

    } catch (err) {
      console.log("BOOKING ERROR:", err);
    }
  };

  saveBooking();
}, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🎉 Booking Confirmed!</h1>
      <p>Your tickets have been successfully booked.</p>

      <button onClick={() => navigate("/my-bookings")}>
        View My Bookings
      </button>
    </div>
  );
};

export default Success;