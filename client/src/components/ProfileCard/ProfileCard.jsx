import React from "react";
import style from "./ProfileCard.module.scss";

const ProfileCard = ({ ...props }) => {
  console.log(props.place);
  return (
    <div className={style.wrapper}>
      <img src={require("../../assets/avatar.png")} />
      <h2>{props.type}</h2>
      {props.place && <h4>Cơ sở: {props.place}</h4>}
      <h4>Họ và tên: {props.name}</h4>
      <p>Ngày sinh: {props.dob}</p>
      <p>Giới tính: {props.gender}</p>
      <div className={style.options}>
        <button className={style.update}>Cập nhật thông tin</button>
        <button className={style.logout}>Đăng xuất</button>
      </div>
    </div>
  );
};

export default ProfileCard;
