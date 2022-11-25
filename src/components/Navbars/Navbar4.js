import React from "react";
import { Link } from "react-router-dom";

function Navbar4() {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/" className="logo_text">
          Hotell "Omega"
        </Link>
      </div>
    </header>
  );
}

export default Navbar4;
