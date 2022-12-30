import React from "react";
import SignUpNavbar from "../Navbars/SignUpNavbar";

function SignUp() {
  return (
    <div>
      <SignUpNavbar />
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
        <button className="btn register" type="submit">
          Registreeru
        </button>
      </form>
    </div>
  );
}

export default SignUp;
