import React, { useEffect, useState } from "react";
import { getRoomsSortedBy } from "./HotelApi";
import OtherPagesNavbar from "./Navbars/OtherPagesNavbar";
import { Link, useParams } from "react-router-dom";

function RoomOverview() {
  const { roomId } = useParams();
  const [rooms, setRooms] = useState([]);

  const fetchRoom = async () => {
    const res = (await getRoomsSortedBy()).find(
      (element) => element.id === roomId
    );
    const { name, price, pictures, available } = res;
    setRooms({
      name,
      price,
      pictures,
      available,
    });
  };

  useEffect(() => {
    fetchRoom();
  }, []);

  return (
    <div>
      <OtherPagesNavbar />
      <h1>Toa ülevaade</h1>
      <div className="room_card">
        <img src={rooms.pictures} alt="" className="img" />
        <div className="room_description">
          <div className="room_type_links">
            <h3>{rooms.name}</h3>
          </div>
          <p className="available">{rooms.available} saadaval</p>
          <h3 className="price price_1">{rooms.price} € / öö</h3>
          <Link to="/book-rooms-schedule" className="btn btn_1">
            Broneeri
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoomOverview;
