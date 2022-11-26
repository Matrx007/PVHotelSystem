import React, { useState, useEffect } from "react";
import OtherPagesNavbar from "./Navbars/OtherPagesNavbar";
// import axios from "axios";
import { getRooms } from "./HotelApi";

function SearchRooms() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function getRooms() {
  //     const response = await axios.get(<getRooms />);
  //     console.log(response);
  //   }
  //   getRooms();
  // }, []);
  console.log(getRooms);

  return (
    <div>
      <OtherPagesNavbar />
    </div>
  );
}

export default SearchRooms;
