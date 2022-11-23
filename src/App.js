import "./App.css";

import React from "react";

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <div className="logo">
          <p className="logo_text">Hotell "Omega"</p>
        </div>
        <div className="navbar_links">
          <a href="#" className="navbar_link">
            Registreeru
          </a>
          <p className="text_1 navbar_link">või</p>
          <a href="#" className="navbar_link">
            Sisene
          </a>
        </div>
      </header>
      <div className="container">
        <div className="rooms">
          <div className="room_1">
            <a href="#" className="room_link">
              Broneeri tuba
            </a>
          </div>
          <p className="text_2">või</p>
          <div className="room_2">
            <a href="#" className="room_link">
              Sirvi tube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
