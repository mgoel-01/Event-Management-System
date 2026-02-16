import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () =>
{
    const navigate= useNavigate();
    const handleLogin = (e) =>
    {
        e.preventDefault();
        navigate("/dashboard");
    }
    return (
         <div id="loginpage">
                <form onSubmit={handleLogin}>
                    <div id="box">
                        {/* <h2 id="login-app-title">EventBooking.com</h2> */}
                        <h3 id="login-title">Login</h3>
                        <label htmlFor="email">Email Address: </label>
                        <input type="email" id="email" />
                        <label htmlFor="pass">Password:   </label>
                        <input type="password" id="pass"/>
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