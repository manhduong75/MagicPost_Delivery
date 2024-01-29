import React, { useState } from "react";
import style from "./HeadTranCreateAccount.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const HeadTranCreateAccount = () => {
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [role, setRole] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/AdminCreateAccount", {
        email,
        username,
        password,
        role,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={style.wrapper}>
      <form>
        <h1>Tạo tài khoản</h1>
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
            type="text"
            placeholder="Tên đăng nhập"
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
        <div className={style.input}>
          <input
            type="password"
            placeholder="Nhập lại mật khẩu"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <FontAwesomeIcon icon={faLock} className={style.icon} />
        </div>
        <div>
          <label for="roles">Chức vụ: </label>
          <select
            id="roles"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          >
            <option value="Trưởng điểm tập kết">Giao dịch viên</option>
          </select>
        </div>
        <button onClick={handleSubmit}>Tạo</button>
      </form>
    </div>
  );
};

export default HeadTranCreateAccount;
