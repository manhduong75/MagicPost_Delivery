import React, { useState } from "react";
import style from "./HeadGathering.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import SidebarItem from "../../components/SidebarItem/SidebarItem.jsx";
import ProfileCard from "../../components/ProfileCard/ProfileCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faUsersGear,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import HeadGatheringManageAccount from "../../components/HeadGatheringManageAccount/HeadGatheringManageAccount.jsx";

const HeadGathering = () => {
  const [tab, setTab] = useState("Profile");

  const render = () => {
    switch (tab) {
      case "Manage account":
        return <HeadGatheringManageAccount />;
      case "Statistics":
        return <div>Statistics</div>;
      default:
        return (
          <ProfileCard
            type="Trưởng tập kết"
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
          onClick={() => setTab("Manage account")}
        />
        <SidebarItem
          text="Thống kê giao hàng"
          icon={faChartSimple}
          onClick={() => setTab("Statistics")}
        />
      </Sidebar>
      <div className={style.wrapper}>{render()}</div>
    </>
  );
};

export default HeadGathering;
