import React from "react";

function RoomCard({ pictures, name, available, price }) {
  return (
    <div className="room_card">
      <img src={pictures} alt="" />
      <div className="room_description">
        <h3>{name}</h3>
        <p className="available">{available} saadaval</p>
        <h3 className="price">{price} € / öö</h3>
      </div>
    </div>
  );
}

export default RoomCard;
