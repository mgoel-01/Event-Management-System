import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../assets/image.png"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar= ()=>{
    const navigate=useNavigate();
    const role=localStorage.getItem("role");
    const handleLogout=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/login")
    }
    const location=useLocation();
    let pageTitle = "";
    if (location.pathname === "/dashboard") {
        pageTitle = "Home";
    } 
    else if (location.pathname === "/profile") {
        pageTitle = "Profile";
    } 
    else if (location.pathname === "/my-bookings") {
        pageTitle = "My Bookings";
    }
    return(
        <div id="navbar">
            <div id="navbar-left">
                <div id="navbar-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar-title">
                    <h2>{pageTitle}</h2>
                </div>
            </div>
            <div id="navbar-content">
                <NavLink to="/dashboard" className="Home">Home</NavLink>
                {role==="organizer"&&(
                    <>
                        <NavLink to="/my-events" className="myEvents">Your Events</NavLink>
                        <NavLink to="/create-event" className="createEvent">Create Event</NavLink>
                    </>
                )}
                <NavLink to="/profile" className="Profile">Profile</NavLink>
                <NavLink to="/my-bookings" className="myBookings">My Bookings</NavLink>
                <span  className="logout" onClick={handleLogout}>Log Out</span>
            </div>
        </div>
    )
}
export default Navbar;