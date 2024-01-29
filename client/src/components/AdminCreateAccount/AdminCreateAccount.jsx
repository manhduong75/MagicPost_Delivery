import React, { useState } from "react";
import style from "./AdminCreateAccount.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const AdminCreateAccount = () => {
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [role, setRole] = useState([
    "Trưởng điểm giao dịch",
    "Trưởng điểm tập kết",
  ]);
  const Add = role.map((Add) => Add);
  axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/admin-create", {
        email: email,
        username: username,
        password: password,
        role: role,
      })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className={style.wrapper}>
      <form onSubmit={handleSubmit}>
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
        <div>
          <label for="roles">Chức vụ: </label>
          <select
            id="roles"
            onChange={(e) => {
              setRole(e.target.text);
            }}
          >
            {Add.map((address, key) => (
              <option value={key}>{address}</option>
            ))}
          </select>
        </div>
        <button type="submit">Tạo</button>
      </form>
    </div>
  );
};

export default AdminCreateAccount;
