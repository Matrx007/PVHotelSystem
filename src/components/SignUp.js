import React from "react";
import Navbar2 from "./Navbars/Navbar2";

function SignUp() {
  return (
    <div>
      <Navbar2 />
      <h1>Registreeru</h1>
      <form action="#">
        <div className="inputs">
          <label>
            Kasutajatunnus
            <div>
              <input type="text" />
            </div>
          </label>
          <label>
            Täisnimi
            <div>
              <input type="text" />
            </div>
          </label>
        </div>
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

export default SignUp;
