import React, { useEffect, useState } from "react";
import { getRoomsSortedBy } from "../HotelApi";
import OtherPagesNavbar from "../Navbars/OtherPagesNavbar";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import CalendarLogic from "../CalendarLogic";

function RoomOverview() {
  const { roomId } = useParams();
  const [rooms, setRooms] = useState([]);

  const fetchRoom = async () => {
    const res = (await getRoomsSortedBy()).find(
      (element) => element.id === roomId
    );
    const { name, price, pictures, available, bookedDates } = res;
    setRooms({
      name,
      price,
      pictures,
      available,
      bookedDates,
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
        <img src={rooms.pictures} alt="" className="img img_1" />
        <div className="room_description">
          <h3>{rooms.name}</h3>
          <p className="available">{rooms.available} saadaval</p>
          <h3 className="price price_1">{rooms.price} € / öö</h3>
          <Link
            to={`/book-rooms-schedule/${roomId}/${rooms.name}`}
            className="btn btn_1"
          >
            Broneeri
          </Link>
          <div className="calendar_container">
            <h3 className="available">Saadavus</h3>
            <CalendarContainer>
              <CalendarLogic rooms={rooms} />
            </CalendarContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomOverview;

const CalendarContainer = styled.div`
  .highlighted {
    color: white;
    background-color: #991ba1;
  }
  .highlighted:hover {
    background-color: #801687;
  }
`;
