import React, { useState, useEffect } from "react";
import OtherPagesNavbar from "./Navbars/OtherPagesNavbar";
import { getRooms } from "./HotelApi";
import RoomCard from "./RoomCard";

function SearchRooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getRooms().then((data) => setRooms(data));
  }, []);

  return (
    <div>
      <OtherPagesNavbar />
      <h1>Sirvi tube</h1>
      {rooms.map((room) => {
        return (
          <RoomCard
            pictures={room.pictures}
            name={room.name}
            available={room.available}
            price={room.price}
          />
        );
      })}
    </div>
  );
}

export default SearchRooms;
