import React from "react";
import Navbar3 from "./Navbars/Navbar3";

function LogIn() {
  return (
    <div>
      <Navbar3 />
      <h1>Sisene</h1>
      <form action="#">
        <label>
          Kasutajatunnus
          <div>
            <input type="text" />
          </div>
        </label>
        <div className="password">
          <label>
            Parool
            <div>
              <input type="password" />
            </div>
          </label>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
