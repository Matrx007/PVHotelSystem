import React from "react";

function RoomTypes({ room }) {
  return (
    <div>
      <button className="room">{room.name}</button>
    </div>
  );
}

export default RoomTypes;
