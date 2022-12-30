import React, { useState, useEffect } from "react";
import OtherPagesNavbar from "../Navbars/OtherPagesNavbar";
import { getRoomsSortedBy } from "../HotelApi";
import RoomCard from "../SearchRooms/RoomCard";

function SearchRooms() {
  const [rooms, setRooms] = useState([]);
  // const [dates, setDates] = useState([]);
  const [sortDirection, setSortDirection] = useState(true);
  const [sortType, setSortType] = useState("name");

  useEffect(() => {
    getRoomsSortedBy(sortType, sortDirection).then((data) => setRooms(data));
    // getRoomsByAvailability(1, 5).then((data) => console.log(data));
  }, [sortType, sortDirection]);

  const handleDirection = () => {
    setSortDirection(!sortDirection);
  };

  return (
    <div>
      <OtherPagesNavbar />
      <div className="search_elements">
        <h1>Sirvi tube</h1>
        <div>
          <select onChange={(e) => setSortType(e.target.value)}>
            <option value="name">Toa tüüp</option>
            <option value="available">Saadavus</option>
            <option value="price">Hind</option>
          </select>
          <select id="space" onChange={handleDirection}>
            <option>Kasvav</option>
            <option>Kahanev</option>
          </select>
        </div>
      </div>
      {rooms.map((room) => {
        return (
          <div key={room.id}>
            <RoomCard room={room} />
          </div>
        );
      })}
    </div>
  );
}

export default SearchRooms;
