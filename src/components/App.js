import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Home/Layout";
import Home from "./Home/Home";
import SignUp from "./SignUp/SignUp";
import LogIn from "./LogIn/LogIn";
import BookRooms from "./BookRooms/BookRooms";
import SearchRooms from "./SearchRooms/SearchRooms";
import RoomOverview from "./RoomOverview/RoomOverview";
import BookRoomsSchedule from "./BookRooms/BookRoomsSchedule";
import Details from "./BookRooms/Details";
import NoMatch from "./BookRooms/NoMatch";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
        </Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/enter" element={<LogIn />}></Route>
        <Route path="/book-rooms" element={<BookRooms />}></Route>
        <Route path="/search-rooms" element={<SearchRooms />}></Route>
        <Route path="/room-overview/:roomId" element={<RoomOverview />}></Route>
        <Route
          path="/book-rooms-schedule/:roomId/:roomValue"
          element={<BookRoomsSchedule />}
        ></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
