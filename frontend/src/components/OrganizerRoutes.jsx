import { Navigate } from "react-router-dom";

const OrganizerRoute = ({ children }) => {
  const role = localStorage.getItem("role");

  return role === "organizer" ? children : <Navigate to="/dashboard" />;
};

export default OrganizerRoute;