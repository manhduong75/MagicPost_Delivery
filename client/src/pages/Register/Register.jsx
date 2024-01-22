import React, { useState } from "react";
import style from "./Register.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", {
        email,
        username,
        password,
      })
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={style.wrapper}>
      <form>
        <h1>Register</h1>
        <div className={style.input}>
          <input
            type="text"
            placeholder="Username"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <FontAwesomeIcon icon={faUser} className={style.icon} />
        </div>
        <div className={style.input}>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
        </div>
        <div className={style.input}>
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <FontAwesomeIcon icon={faLock} className={style.icon} />
        </div>
        <button onClick={handleSubmit}>Register</button>
        <div className={style.login}>
          <p>
            Already have an account?{" "}
            <Link to="/login" className={style.link}>
              Login now!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
