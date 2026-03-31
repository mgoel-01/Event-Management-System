import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
const Login = () =>
{
    const navigate= useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async(e) =>
    {
        e.preventDefault();
        console.log("Login Button Clicked");
        try{
            const response=await fetch("https://event-management-system-613m.onrender.com/api/auth/login",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email,password})
            });
            const data=await response.json();
            if(response.ok){
                localStorage.setItem("token",data.token);
                localStorage.setItem("user",JSON.stringify(data.user));
                localStorage.setItem("role", data.user.role);
                if(data.user.role==="organizer"){
                    navigate("/dashboard")
                }
                else  if(data.user.role==="attendee"){
                    navigate("/dashboard");
                }
            }
            else{
                alert(data.message);
            }
        }
        catch(error){
            console.log(error);
        }
    };
    return (
         <div id="loginpage">
                <form onSubmit={handleLogin}>
                    <div id="box">
                        {/* <h2 id="login-app-title">EventBooking.com</h2> */}
                        <h3 id="login-title">Login</h3>
                        <label htmlFor="email">Email Address: </label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="pass">Password:   </label>
                        <input type="password" id="pass" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <div id="buttonContainer">
                            <button type="submit" id="login">Login</button>
                        </div>

                    <Link to="/signup" id="signup">Don't have an account? Sign Up!</Link>

                    </div>
                </form>
         </div>
    )
}

export default Login ;