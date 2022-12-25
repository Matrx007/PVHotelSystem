import React, { useState } from "react";
import OtherPagesNavbar from "./Navbars/OtherPagesNavbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate, useParams } from "react-router-dom";

function BookRoomsSchedule() {
  const [date, setDate] = useState(new Date());
  const history = useNavigate();
  const { roomValue } = useParams();

  const getDayAndMonth = (date) => {
    const month = date.toLocaleString("et-EE", {
      day: "numeric",
      month: "long",
    });
    return `${month}`;
  };

  const handleClick = () => {
    history(
      `/details?firstDate=${Math.floor(
        date[0].getTime() / 1000
      )}&secondDate=${Math.floor(
        date[1].getTime() / 1000
      )}&roomProperty=${roomValue}`
    );
  };

  return (
    <div>
      <OtherPagesNavbar />
      <h1>Broneeri tuba</h1>
      <div className="calendar_container_1">
        <h3 className="room_type">Ajavahemik</h3>
        {date.length > 0
          ? `Valitud vahemikus ${getDayAndMonth(date[0])} kuni ${getDayAndMonth(
              date[1]
            )}`
          : ""}
        <Calendar
          value={date}
          onChange={setDate}
          selectRange={true}
          className="calendar"
          locale="et-EE"
        />
        <button className="btn" onClick={handleClick}>
          Edasi
        </button>
      </div>
    </div>
  );
}

export default BookRoomsSchedule;
