import React, { useState } from "react";
import LogInNavbar from "../Navbars/LogInNavbar";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

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
        <h1>Sisene</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid_for_contact">
            <label>
              Kasutajatunnus
              <div>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
              </div>
            </label>
            <div className="password">
              <label>
                Parool
                <div>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </label>
            </div>
            <button className="btn btn_2" type="submit">
              Sisene
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
