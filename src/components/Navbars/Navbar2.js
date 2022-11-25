import React from "react";
import { Link } from "react-router-dom";

function Navbar2() {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/" className="logo_text">
          Hotell "Omega"
        </Link>
      </div>
      <div className="navbar_links">
        <p>Konto juba olemas?</p>
        <Link to="/enter" className="navbar_link">
          Sisene
        </Link>
      </div>
    </header>
  );
}

export default Navbar2;
