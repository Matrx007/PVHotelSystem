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

  const firstImage =
    rooms.pictures && rooms.pictures.length > 0 ? rooms.pictures[0] : "";

  const secondImage =
    rooms.pictures && rooms.pictures.length > 0 ? rooms.pictures[1] : "";

  const thirdImage =
    rooms.pictures && rooms.pictures.length > 0 ? rooms.pictures[2] : "";

  return (
    <div>
      <OtherPagesNavbar />
      <h1>Toa ülevaade</h1>
      <div className="room_card">
        <img src={rooms.pictures} alt="" className="img img_1" />
        <div style={{ marginTop: "4em" }}>
          <h3>{rooms.name}</h3>
          <p style={{ marginTop: "1em" }}>{rooms.available} saadaval</p>
          <h3 style={{ marginTop: "7em", marginBottom: "2.5em" }}>
            {rooms.price} € / öö
          </h3>
          <Link
            to={`/book-rooms-schedule/${roomId}/${rooms.name}`}
            className="btn btn_1"
          >
            Broneeri
          </Link>
          <div className="room_type_images">
            <img src={firstImage} alt="" className="img_2" />
            <img src={secondImage} alt="" className="img_2" />
            <img src={thirdImage} alt="" className="img_2" />
          </div>
        </div>
        <div className="calendar_container">
          <div>
            <h3 style={{ marginBottom: "0.5em" }}>Saadavus</h3>
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
