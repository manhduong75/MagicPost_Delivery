import React, { useState } from "react";
import style from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Login = () => {
  const facebook = require("../../assets/facebook.png");
  const google = require("../../assets/google.png");
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.message === "Login successful!") {
          navigate("/");
          localStorage.setItem("user", JSON.stringify(res.data.user));
          window.location.reload(true);
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={style.wrapper}>
      <form onSubmit={handleSubmit}>
        <h1>Đăng nhập</h1>
        <div className={style.input}>
          <input
            type="text"
            placeholder="Tài khoản"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <FontAwesomeIcon icon={faUser} className={style.icon} />
        </div>
        <div className={style.input}>
          <input
            type="password"
            placeholder="Mật khẩu"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <FontAwesomeIcon icon={faLock} className={style.icon} />
        </div>
        <button type="submit">ĐĂNG NHẬP</button>
        {/* <div className={style.register}>
          <p>Don't have an account? <Link to="/register" className={style.link}>Sign up now!</Link></p>
          <div className={style.options}>
            <p>or sign up with</p>
            <div className={style.logos}>
              <div className={style.logo} onClick={() => {
                window.open("http://localhost:5000/auth/facebook", "_self")
              }}>
                <img src={facebook} alt="facebook" />
              </div>
              <div className={style.logo} onClick={() => {
                window.open("http://localhost:5000/auth/google", "_self")
              }}>
                <img src={google} alt="google" />
              </div>
            </div>
          </div>
        </div> */}
      </form>
    </div>
  );
};

export default Login;
