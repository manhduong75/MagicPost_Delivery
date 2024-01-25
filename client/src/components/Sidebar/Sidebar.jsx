import React from "react";
import style from "./Sidebar.module.scss";

const Sidebar = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>;
};

export default Sidebar;
