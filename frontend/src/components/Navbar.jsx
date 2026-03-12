import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../assets/image.png"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar= ()=>{
    const navigate=useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem("token");
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
    else if (location.pathname === "/bookings") {
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
                <NavLink to="/dashboard" className="home">Home</NavLink>
                <NavLink to="/" className="profile">Profile</NavLink>
                <NavLink to="/" className="myBookings">My Bookings</NavLink>
                <span to="/" className="logout" onClick={handleLogout}>Log Out</span>
            </div>
        </div>
    )
}
export default Navbar;