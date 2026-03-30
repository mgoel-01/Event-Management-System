import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

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