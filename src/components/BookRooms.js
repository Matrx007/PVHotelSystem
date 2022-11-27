import React, { useState, useEffect } from "react";
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
          return <RoomTypes room={room.name} />;
        })}
        <button className="btn">Edasi</button>
      </div>
    </div>
  );
}

export default BookRooms;
