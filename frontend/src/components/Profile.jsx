import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/api/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setUser(res.data);
    };

    fetchProfile();
  }, []);

  if (!user) return <h2>Loading...</h2>;

  return (
    <div className="profile-container">
      <h1>My Profile</h1>

      <div className="profile-info">
        <h3>Name: {user.name}</h3>
        <h3>Email: {user.email}</h3>
      </div>

      <div>
        <h2>Created Events</h2>
        {user.createdEvents.length === 0 ? (
          <p>No events created</p>
        ) : (
          user.createdEvents.map((event) => (
            <div key={event._id}>
              <h4>{event.title}</h4>
              <p>{event.date}</p>
            </div>
          ))
        )}
      </div>

      <div>
        <h2>Booked Events</h2>
        {user.bookedEvents.length === 0 ? (
          <p>No bookings yet</p>
        ) : (
          user.bookedEvents.map((event) => (
            <div key={event._id}>
              <h4>{event.title}</h4>
              <p>{event.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;