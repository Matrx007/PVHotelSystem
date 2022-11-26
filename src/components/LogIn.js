import React from "react";
import LogInNavbar from "./Navbars/LogInNavbar";

function LogIn() {
  return (
    <div>
      <LogInNavbar />
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
        <button className="btn btn_2" type="submit">
          Sisene
        </button>
      </form>
    </div>
  );
}

export default LogIn;
