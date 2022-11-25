import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="rooms">
        <div className="room_1">
          <Link to="/book-rooms" className="room_link">
            Broneeri tuba
          </Link>
        </div>
        <p className="text_2">või</p>
        <div className="room_2">
          <Link to="/search-rooms" className="room_link">
            Sirvi tube
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
