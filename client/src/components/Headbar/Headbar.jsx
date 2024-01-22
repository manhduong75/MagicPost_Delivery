import React from "react";
import style from "./Headbar.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faSearch,
  faBell,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

const Headbar = ({ user }) => {
  const avatar = require("../../assets/avatar.png");
  var selfRoute = "/";
  if (user) {
    if (user.role) {
      selfRoute = "/" + user.role.toString().toLowerCase().replace("_", "");
    } else {
      if (user.staff_id[0] === "T") selfRoute = "/transaction";
      else selfRoute = "/gathering";
    }
  }
  console.log(selfRoute);
  return (
    <div className={`${style.wrapper} row `}>
      <div className={`${style.left}  ${user ? "col-md-3" : "col-md-6"}  `}>
        <a href="http://localhost:3000/" className={style.logo}>
          <img src={require("../../assets/logo.png")} alt="logo" />
        </a>
      </div>

      <div
        className={`${style.right} ${user ? "col-md-9" : "col-md-6"} d-flex `}
      >
        {user ? (
          <>
            <div className={`${style.search} `}>
              <form action="/" method="get">
                <input
                  type="text"
                  placeholder="Tra cứu đơn hàng"
                  name="s"
                  className={style.loggedIn}
                />
                <button type="submit" value="">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
            </div>

            <ul className={`${style.userMenu} d-flex`}>
              <li className={style.notification}>
                Thông báo
                <FontAwesomeIcon icon={faBell} className={style.bell} />
              </li>
              <li className={style.username}>Username</li>
              <li>
                <Link to={selfRoute}>
                  <img src={avatar} alt="avatar" />
                </Link>
              </li>
              <li
                className={style.logout}
                onClick={() => {
                  localStorage.removeItem("user");
                  window.location.reload(true);
                }}
              >
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  className={style.out}
                />
              </li>
            </ul>
          </>
        ) : (
          <>
            <div className={`${style.search} col-md-7`}>
              <form action="/" method="get">
                <input
                  type="text"
                  placeholder="Tìm kiếm"
                  name="s"
                  className={style.notLoggedIn}
                />
                <button type="submit" value="">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
            </div>
            <div className={`${style.login} col-md-5`}>
              <Link className={style.link} to="/login">
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  className={style.icon}
                />
                ĐĂNG KÝ / ĐĂNG NHẬP
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Headbar;
