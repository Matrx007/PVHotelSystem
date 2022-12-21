import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OtherPagesNavbar from "./Navbars/OtherPagesNavbar";
import { getRooms } from "./HotelApi";
import RoomTypes from "./RoomTypes";

function BookRooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getRooms().then((data) => setRooms(data));
  }, []);

  return (
    <div>
      <OtherPagesNavbar />
      <h1>Broneeri tuba</h1>
      <div className="room_types">
        <div className="heading">
          <h3>Toa tüübid</h3>
        </div>
        {rooms.map((room) => {
          return (
            <div key={room.id}>
              <RoomTypes room={room} />
            </div>
          );
        })}
        <div className="btn_container">
          <Link to="/book-rooms-schedule" className="btn">
            Edasi
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookRooms;
