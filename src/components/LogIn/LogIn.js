import React, { useState } from "react";
import LogInNavbar from "../Navbars/LogInNavbar";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import AuthPicture from "../LogIn/AuthPicture.png";

function LogIn() {
  const { signIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/");
    } catch {
      setError(e.message);
      alert("Vale parool või kasutajatunnus. Kas oled konto loonud?");
    }
  };

  return (
    <div>
      <LogInNavbar />
      <div className="contact_bg">
        <form onSubmit={handleSubmit}>
          <div className="grid-for-contact">
            <h2 style={{ marginTop: "2em", marginBottom: "3em" }}>
              Sisesta oma konto andmed
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
                Sisene
              </button>
            </div>
          </div>
          <img src={AuthPicture} alt="" className="auth_picture" />
        </form>
      </div>
    </div>
  );
}

export default LogIn;
