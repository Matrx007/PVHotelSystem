import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import BookRooms from "./BookRooms";
import SearchRooms from "./SearchRooms";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/enter" element={<LogIn />}></Route>
        <Route path="/book-rooms" element={<BookRooms />}></Route>
        <Route path="/search-rooms" element={<SearchRooms />}></Route>
      </Routes>
    </div>
  );
}

export default App;
