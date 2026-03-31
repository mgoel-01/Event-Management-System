import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { event, quantity, total } = location.state || {};

  // ❌ If no data
  if (!event) {
    return <h2>No booking data found ❌</h2>;
  }

  const handlePayment = async () => {
    try {
      // ✅ Get user from localStorage
      const user = JSON.parse(localStorage.getItem("user"));

      // ✅ Prevent booking without login
      if (!user) {
        alert("Please login first");
        navigate("/login");
        return;
      }

      // ✅ API call
      const res = await fetch("https://event-management-system-613m.onrender.com/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId: user.id,           // 🔥 FIXED
          eventId: event._id,         // 🔥 FIXED
          eventName: event.title,
          quantity: quantity,
          totalAmount: total
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Booking failed");
      }

      alert("Payment Successful ✅");

      // ✅ Redirect to success page
      navigate("/success");

    } catch (error) {
      console.error(error);
      alert(error.message || "Booking failed ❌");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Payment Page 💳</h2>

      <p><strong>Event:</strong> {event.title}</p>
      <p><strong>Tickets:</strong> {quantity}</p>
      <p><strong>Total Amount:</strong> ₹{total.toFixed(2)}</p>

      <button onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

export default Payment;