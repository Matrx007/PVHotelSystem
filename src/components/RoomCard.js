import React from "react";
import { Link } from "react-router-dom";

function RoomCard({ room }) {
  return (
    <div className="room_card">
      <img src={room.pictures} alt="" className="img" />
      <div className="room_description">
        <div className="room_type_links">
          <h3>{room.name}</h3>
          <Link to={`/room-overview/${room.id}`} className="link_1">
            Ülevaade
          </Link>
          <Link
            to={`/book-rooms-schedule/${room.name}`}
            className="link_1 link_2"
          >
            Broneeri
          </Link>
        </div>
        <p className="available">{room.available} saadaval</p>
        <h3 className="price">{room.price} € / öö</h3>
      </div>
    </div>
  );
}

export default RoomCard;
