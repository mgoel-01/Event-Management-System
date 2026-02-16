import "./Details.css";
import dateLogo from "../../assets/calendar.png";
import timeLogo from "../../assets/clock.png";
import venueLogo from "../../assets/location.png";

let Details= ()=>{
    return(
        <div id="details">
            <header>
                <div id="back">
                    <a href="cards.html">⬅️Back To Events</a>
                </div>
            </header>
            <div id="mid">
                <div id="detailed-card">
                    <div id="img-card">

                    </div>
                    <div id="event-details">
                    <h1>Event Name</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, minus quos fugit quam magni nesciunt provident neque, doloribus quaerat dolor eligendi ipsa, excepturi at nostrum porro. Adipisci praesentium animi explicabo!</p>
                    <div className="event-logos">
                            <div className="logo-row">
                                <img src={dateLogo} alt="Date: " className="logo" />
                                <span>20 February 2026</span>
                            </div>
                            <div className="logo-row">
                                <img src={timeLogo} alt="Time: " className="logo" />
                                <span>03:00 P.M</span>
                            </div>
                            <div className="logo-row">
                                <img src={venueLogo} alt="Venue: " className="logo" />
                                <span>M.G Auditorium</span>
                            </div>
                    </div>
                    <a href="reg.html">Click here to register</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Details