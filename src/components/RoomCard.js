import React from "react";

function RoomCard({ room }) {
  return (
    <div className="room_card">
      <img src={room.pictures} alt="" />
      <div className="room_description">
        <h3>{room.name}</h3>
        <p className="available">{room.available} saadaval</p>
        <h3 className="price">{room.price} € / öö</h3>
      </div>
    </div>
  );
}

export default RoomCard;
