    import "./Details.css";
    import dateLogo from "../../assets/calendar.png";
    import timeLogo from "../../assets/clock.png";
    import venueLogo from "../../assets/location.png";
    import { useState , useEffect} from "react";
    import { useNavigate } from "react-router-dom";
    
    let Details= (props)=>{

        const navigate = useNavigate();

        const pricePerTicket = 299;
        const serviceRate = 0.10; // 10%

        const [quantity, setQuantity] = useState(1);

        const increaseQty = () => {
            setQuantity(prev => prev + 1);
        };

        const decreaseQty = () => {
            if (quantity > 1) {
                setQuantity(prev => prev - 1);
            }
        };

        const subtotal = quantity * pricePerTicket;
        const serviceFee = subtotal * serviceRate;
        const total = subtotal + serviceFee;


        console.log(props.events) ;
        const [selected, setSelected] = useState({})

        useEffect(() => {
        if (!props.events || props.events.length === 0) return;

        const storedId = localStorage.getItem("id");

        if (storedId) {
            const foundEvent = props.events.find(
                (elem) => elem.id === parseInt(storedId)
            );

            if (foundEvent) {
                setSelected(foundEvent);
            }
        }
    }, [props.events]);



        return(
            <div id="details">
                
                <header>
                    <div id="back">
                        <span
    style={{ cursor: "pointer" }}
    onClick={() => navigate(-1)}
    >
    ⬅️ Back To Events
    </span>
                    </div>
                </header>

                <div id="mid">
                        <div id="detailed-card">
                            <div id="img-card">
                                <img id="image" src={selected.url} alt="" />
                            </div>
                            <div id="event-details">
                                    <h1>{selected.title}</h1>
                                    <p>{selected.description}</p>
                                    <div className="event-logos">
                                            <div className="logo-row">
                                                <img src={dateLogo} alt="Date: " className="logo" />
                                                <span>{selected.date}</span>
                                            </div>
                                            <div className="logo-row">
                                                <img src={timeLogo} alt="Time: " className="logo" />
                                                <span>{selected.time}</span>
                                            </div>
                                            <div className="logo-row">
                                                <img src={venueLogo} alt="Venue: " className="logo" />
                                                <span>{selected.location}</span>
                                            </div>
                                            {/* <a href="reg.html">Click here to register</a> */}
                                                        <div id="ticket-box">
                                                            <div id="counterTicket">
                                                                    <h3>Select Tickets</h3>

                                                                    <div id="Counter">

                                                                        <div id="ticket-row">
                                                                            <div id="ticket-info">
                                                                                <span className="ticket-title">General Admission</span>
                                                                                <span className="ticket-price">$299 per ticket</span>
                                                                            </div>

                                                                            <div id="ticket-controls">
                                                                                <button className="qty-btn"
                                                                                onClick={decreaseQty}
                                                                                >−</button>
                                                                                <span id="quantity">{quantity}</span>
                                                                                <button className="qty-btn"
                                                                                onClick={increaseQty}
                                                                                >+</button>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    <p id="availability">300 tickets available</p>
                                                            </div>

                                                            <div id="bill">

                                                                    <div className="bill-row">
                                                                        <span>
                                                                            Subtotal ({quantity} ticket{quantity > 1 ? "s" : ""})
                                                                        </span>
                                                                        <span>
                                                                            ${subtotal.toFixed(2)}
                                                                        </span>
                                                                    </div>

                                                                    <div className="bill-row">
                                                                        <span>Service Fee</span>
                                                                        <span>
                                                                            ${serviceFee.toFixed(2)}
                                                                        </span>
                                                                    </div>

                                                                    <hr />

                                                                    <div className="bill-total">
                                                                        <span>Total</span>
                                                                        <span id="total-price">
                                                                            ${total.toFixed(2)}
                                                                        </span>
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