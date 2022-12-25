import React, { useEffect, useState } from "react";
import { getRoomsSortedBy } from "./HotelApi";
import OtherPagesNavbar from "./Navbars/OtherPagesNavbar";
import { Link, useParams } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

function RoomOverview() {
  const { roomId } = useParams();
  const [rooms, setRooms] = useState([]);
  const [date, setDate] = useState(new Date());

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

  const mark = ["06-12-2022", "07-12-2022", "08-12-2022", "09-12-2022"];

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
          <Link to={`/book-rooms-schedule/${rooms.name}`} className="btn btn_1">
            Broneeri
          </Link>
          <div className="calendar_container">
            <h3>Saadavus</h3>
            <Calendar
              value={date}
              onChange={setDate}
              tileClassName={({ date, view }) => {
                if (mark.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
                  return "highlight";
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomOverview;
