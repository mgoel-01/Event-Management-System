import "./Signup.css"
import { useNavigate } from "react-router-dom"

const Signup= ()=>{

     const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    }

    return(
        <div id="signup-page">
            <form onSubmit={handleSubmit}>
                <div id="signup-box">
                    <h2 id="signup-app-title">EventBooking.com</h2>
                    <h3 id="signup-title">Create Account</h3>
                    <label htmlFor="email">Email Address: </label>
                    <input type="email" id="email" />
                    <label htmlFor="pass"> Create a strong password:   </label>
                    <input type="password" id="pass"/>
                    <div id="buttonContainer">
                        <button type="submit" id="signup-btn">Continue</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Signup 