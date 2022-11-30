import React, { useState, useEffect } from "react";
import OtherPagesNavbar from "./Navbars/OtherPagesNavbar";
import { getRooms } from "./HotelApi";
import RoomCard from "./RoomCard";

function SearchRooms() {
  const [rooms, setRooms] = useState([]);
  const [sortType_1, setSortType_1] = useState("");
  const [sortType_2, setSortType_2] = useState("");

  useEffect(() => {
    getRooms().then((data) => setRooms(data));
  }, []);

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        toad: "name",
        saadavus: "available",
        hind: "price",
      };
      const sortProperty = types[type];
      const ascending = [...rooms].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setRooms(ascending);
    };
    sortArray(sortType_1);
  }, [sortType_1]);

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        toad: "name",
        saadavus: "available",
        hind: "price",
      };
      const sortProperty = types[type];
      const descending = [...rooms].sort(
        (a, b) => a[sortProperty] - b[sortProperty]
      );
      setRooms(descending);
    };
    sortArray(sortType_2);
  }, [sortType_2]);

  return (
    <div>
      <OtherPagesNavbar />
      <div className="search_elements">
        <h1>Sirvi tube</h1>
        <div>
          <select id="#" onChange={(e) => setSortType_1(e.target.value)}>
            <option value="sorteerimine" disabled selected>
              Sorteerimine
            </option>
            <option value="toad">Toa tüüp</option>
            <option value="saadavus">Saadavus</option>
            <option value="hind">Hind</option>
          </select>
          <select id="space" onChange={(e) => setSortType_2(e.target.value)}>
            <option value="sorteerimine" disabled selected>
              Sorteerimine
            </option>
            <option value="toad">Toa tüüp</option>
            <option value="saadavus">Saadavus</option>
            <option value="hind">Hind</option>
          </select>
          <button className="search">Otsi saadavuse järgi</button>
        </div>
      </div>
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
