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
                            <img id="image" src="https://images.unsplash.com/photo-1770387795112-e2b476b15f71?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
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
                                        <a href="reg.html">Click here to register</a>
                                                    <div id="ticket-box">
                                                        <div id="counterTicket">
                                                                <h3>Select Tickets</h3>

                                                                <div id="Counter">

                                                                    <div id="ticket-row">
                                                                         <div id="ticket-info">
                                                                            <span class="ticket-title">General Admission</span>
                                                                            <span class="ticket-price">$299 per ticket</span>
                                                                        </div>

                                                                        <div id="ticket-controls">
                                                                            <button class="qty-btn">−</button>
                                                                            <span id="quantity">1</span>
                                                                            <button class="qty-btn">+</button>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                                <p id="availability">300 tickets available</p>
                                                        </div>

                                                        <div id="bill">

                                                                <div class="bill-row">
                                                                    <span>Subtotal (1 ticket)</span>
                                                                    <span>$299.00</span>
                                                                </div>

                                                                <div class="bill-row">
                                                                    <span>Service Fee</span>
                                                                    <span>$29.90</span>
                                                                </div>

                                                                <hr />

                                                                <div class="bill-total">
                                                                    <span>Total</span>
                                                                    <span id="total-price">$328.90</span>
                                                                </div>

                                                                <button id="checkout-btn">
                                                                    Continue to Checkout
                                                                </button>

                                                        </div>

                                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
        </div>

    )
}
export default Details