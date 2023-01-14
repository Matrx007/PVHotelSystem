import HotelPicture from "../Home/HotelPicture.png";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Home() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/enter");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="container">
      <button className="log_out_btn" onClick={handleLogout}>
        Logi välja
      </button>
      <p className="account_info">Kasutajatunnus: {user && user.email}</p>
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
