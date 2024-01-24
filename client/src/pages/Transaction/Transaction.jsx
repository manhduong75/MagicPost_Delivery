import React, { useState } from "react";
import style from "./Transaction.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import SidebarItem from "../../components/SidebarItem/SidebarItem.jsx";
import ProfileCard from "../../components/ProfileCard/ProfileCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faUsersGear,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import CreateOrder from "../../components/CreateOrder/CreateOrder.jsx";

const Transaction = () => {
  const [tab, setTab] = useState("Profile");

  const render = () => {
    switch (tab) {
      case "Manage order":
        return <div>Manage order</div>;
      case "Create order":
        return <CreateOrder />;
      default:
        return (
          <ProfileCard
            type="Tập kết viên"
            name="Họ và tên"
            gender="Nam"
            dob="dd/mm/yyyy"
            place="Địa điểm"
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
          text="Quản lý tài khoản"
          icon={faUsersGear}
          onClick={() => setTab("Manage order")}
        />
        <SidebarItem
          text="Thống kê giao hàng"
          icon={faChartSimple}
          onClick={() => setTab("Create order")}
        />
      </Sidebar>
      <div className={style.wrapper}>{render()}</div>
    </>
  );
};

export default Transaction;
