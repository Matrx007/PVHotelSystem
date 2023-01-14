import React, { useState } from "react";
import SignUpNavbar from "../Navbars/SignUpNavbar";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthPicture from "../LogIn/AuthPicture.png";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/enter");
    } catch {
      setError(e.message);
      if (password.length < 6) {
        alert(
          "Sinu salasõna peab koosnema vähemalt 6-st tähemärgist või numbrist"
        );
      }
    }
  };

  return (
    <div>
      <SignUpNavbar />
      <div className="contact_bg">
        <form onSubmit={handleSubmit}>
          <div className="grid-for-contact">
            <h2 style={{ marginTop: "2em", marginBottom: "3em" }}>
              Loo endale sobiv konto
            </h2>
            <div>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Kasutajatunnus"
              />
            </div>
            <div className="password">
              <div>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Parool"
                />
              </div>
              <button className="btn" type="submit">
                Registreeru
              </button>
            </div>
          </div>
          <img src={AuthPicture} alt="" className="auth_picture" />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
