import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import SectionBar from './SectionBar'
import { useNavigate } from 'react-router-dom'

const DashBoard = (props) => {
  const navigate = useNavigate();

  // ✅ Step 1: state for filter
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  // ✅ Step 2: filter logic
  const filteredEvents =
    selectedCategory === "All"
      ? props.events
      : props.events.filter(
          (event) => event.category === selectedCategory
        );

  return (
    <div id="dashboard">
      <h1>Discover Events</h1>

      {/* ✅ Step 3: pass function to SectionBar */}
      <SectionBar setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />

      <div className="cardContainer">
        {/* ✅ Step 4: use filteredEvents instead of props.events */}
        {filteredEvents.map((elem) => {
          return (
            <Cards
              id={elem.id}
              key={elem.id}
              tag={elem.category}
              title={elem.title}
              url={elem.url}
              date={elem.date}
              time={elem.time}
              location={elem.location}
              price={elem.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DashBoard;