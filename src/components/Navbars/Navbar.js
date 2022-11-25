import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header className="navbar">
        <div className="logo">
          <Link to="/" className="logo_text">
            Hotell "Omega"
          </Link>
        </div>
        <div className="navbar_links">
          <Link to="/register" className="navbar_link">
            Registreeru
          </Link>
          <p className="text_1 navbar_link">või</p>
          <Link to="/enter" className="navbar_link">
            Sisene
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
