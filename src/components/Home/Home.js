import { Link } from "react-router-dom";
import HotelPicture from "../Home/HotelPicture.png";

function Home() {
  return (
    <div className="container">
      <div className="rooms">
        <Link to="/book-rooms" className="room_link">
          Broneeri tube
        </Link>
        <p className="text_2">või</p>
        <Link to="/search-rooms" className="room_link">
          Sirvi tube
        </Link>
      </div>
      <img className="hotel" src={HotelPicture} alt="" />
    </div>
  );
}

export default Home;
