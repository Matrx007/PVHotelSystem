import React, { useState, useEffect } from "react";
import OtherPagesNavbar from "./Navbars/OtherPagesNavbar";
import { getRooms } from "./HotelApi";
import { Link } from "react-router-dom";

function BookRooms() {
  const [rooms, setRooms] = useState([]);
  const [roomValue, setRoomValue] = useState("");

  useEffect(() => {
    getRooms().then((data) => setRooms(data));
  }, []);

  const handleClick = (e) => {
    setRoomValue(e.target.value);
  };

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
              <button className="room" value={room.name} onClick={handleClick}>
                {room.name}
              </button>
            </div>
          );
        })}
        <div className="btn_container">
          <Link to={`/book-rooms-schedule/${roomValue}`} className="btn">
            Edasi
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookRooms;
