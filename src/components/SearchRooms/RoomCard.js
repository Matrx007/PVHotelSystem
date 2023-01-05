import React from "react";
import { Link } from "react-router-dom";

function RoomCard({ room }) {
  return (
    <div className="room_card">
      <img src={room.pictures} alt="" className="img" />
      <div style={{ marginTop: "3em" }}>
        <div className="room_type_links">
          <h3>{room.name}</h3>
          <Link to={`/room-overview/${room.id}`} className="link_1">
            Ülevaade
          </Link>
          <Link
            to={`/book-rooms-schedule/${room.id}/${room.name}`}
            className="link_1 link_2"
          >
            Broneeri
          </Link>
        </div>
        <p style={{ marginTop: "1em" }}>{room.available} saadaval</p>
        <h3 style={{ marginTop: "6em" }}>{room.price} € / öö</h3>
      </div>
    </div>
  );
}

export default RoomCard;
