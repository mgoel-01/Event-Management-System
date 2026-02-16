import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () =>
{
    const navigate= useNavigate();
    const handleLogin=async(e)=>{
        e.preventDefault();
        console.log("Login Button Clicked");
        const email=document.getElementById("email").value;
        const password=document.getElementById("pass").value;
        try{
            const response=await fetch("http://x`:5000/api/auth/login",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email,password})
            });
            const data=await response.json();
            if(response.ok){
                localStorage.setItem("token",data.token);
                navigate("/dashboard");
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
                    <h2 id="login-app-title">EventBooking.com</h2>
                    <h3 id="login-title">Login</h3>
                <label htmlFor="email">Email Address: </label>
                    <input type="email" id="email" />
                <br />
                <br />
                <label htmlFor="pass">Password:   </label>
                <input type="password" id="pass"/>
                <br />
                <br />
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