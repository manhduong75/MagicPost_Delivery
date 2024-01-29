import React, { useState, useEffect } from "react";
import style from "./Admin.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import SidebarItem from "../../components/SidebarItem/SidebarItem.jsx";
import ProfileCard from "../../components/ProfileCard/ProfileCard.jsx";
import AdminManageLocations from "../../components/AdminManageLocations/AdminManageLocations.jsx";
import AdminManageAccounts from "../../components/AdminManageAccounts/AdminManageAccounts.jsx";
import AdminCreateAccount from "../../components/AdminCreateAccount/AdminCreateAccount.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faUsersGear,
  faChartSimple,
  faMapLocationDot,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  const [tab, setTab] = useState("Profile");
  const [accounts, setAccounts] = useState([]);

  const updateAccounts = (newAccount) => {
    setAccounts([...accounts, newAccount]);
  };

  const render = () => {
    switch (tab) {
      case "Manage location":
        return <AdminManageLocations />;
      case "Manage account":
        return <AdminManageAccounts accounts={accounts} />;
      case "Statistics":
        return <div>Statistics</div>;
      case "Create account":
        return <AdminCreateAccount updateAccounts={updateAccounts} />;
      default:
        return (
          <ProfileCard
            type="Lãnh đạo"
            name="Họ và tên"
            gender="Nam"
            dob="dd/mm/yyyy"
          />
        );
    }
  };

  return (
    <>
      <Sidebar>
        <SidebarItem
          text="Thông tin cá nhân"
          icon={faCircleUser}
          onClick={() => setTab("Profile")}
        />
        <SidebarItem
          text="Quản lý cơ sở"
          icon={faMapLocationDot}
          onClick={() => setTab("Manage location")}
        />
        <SidebarItem
          text="Quản lý tài khoản"
          icon={faUsersGear}
          onClick={() => setTab("Manage account")}
        />
        <SidebarItem
          text="Thống kê giao hàng"
          icon={faChartSimple}
          onClick={() => setTab("Statistics")}
        />
        <SidebarItem
          text="Tạo tài khoản"
          icon={faUserPlus}
          onClick={() => setTab("Create account")}
        />
      </Sidebar>
      <div className={style.wrapper}>{render()}</div>
    </>
  );
};

export default Admin;
