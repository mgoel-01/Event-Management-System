import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { event, quantity, total } = location.state || {};

  if (!event) {
    return <h2>No booking data found ❌</h2>;
  }

  const handlePayment = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: localStorage.getItem("userId") || "guest",
        eventId: event.id,
        eventName: event.title,
        quantity: quantity,
        totalAmount: total
      })
    });

    const data = await res.json();

      alert("Payment Successful ✅");

      navigate("/success");

    } catch (error) {
      console.error(error);
      alert("Booking failed ❌");
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