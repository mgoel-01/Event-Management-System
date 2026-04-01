import "./Signup.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signup= ()=>{
    const navigate= useNavigate();
    const handleSignUp=async(e)=>{
        e.preventDefault();
        const name=document.getElementById("name").value;
        const email=document.getElementById("email").value;
        const role=document.getElementById("role").value;
        const password=document.getElementById("pass").value;
        try{
            const response=await fetch("https://event-management-system-613m.onrender.com/api/auth/signup",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name,email,role,password})
            });
            const data= await response.json();
            if(response.ok){
                alert("SignUp Successful!");
                navigate("/login");
            }
            else{
                alert(data.message);
            }
        }
        catch(error){
            console.log(error);
        }
    };
    return(
        <div id="signup-page">
            <form onSubmit={handleSignUp} autoComplete="off">
                <div id="signup-box">
                    <h2 id="signup-app-title">EventBooking.com</h2>
                    <h3 id="signup-title">Create Account</h3>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" autoComplete="off" required/>
                <label htmlFor="email">Email Address: </label>
                    <input type="email" id="email" autoComplete="off" required/>
                <br />
                <div id="signup-role">
                <label htmlFor="role">Role:</label>
                <select name="role" id="role" required>
                    <option value="attendee">Attendee</option>
                    <option value="organizer">Organizer</option>
                </select>
                </div>
                <br />
                <br />
                <label htmlFor="pass"> Create a strong password:   </label>
                <input type="password" id="pass" autoComplete="new-password" required/>
                <br />
                <br />
                <div id="buttonContainer">
                <button type="submit" id="signup-btn">Continue</button>
                </div>
            </div>
            </form>
        </div>
    )
}
export default Signup;