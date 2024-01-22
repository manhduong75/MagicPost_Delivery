import React from "react";

import style from "./Footer.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPaperPlane,
  faPhone,
  faFacebook,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.list1}>
            <h3>CÔNG TY CP BƯU CHÍNH MAGICPOST</h3>
            <p>
              {" "}
              <FontAwesomeIcon icon={faPaperPlane} className={style.icon} />
              MagicPost là doanh nghiệp hàng đầu cung cấp dịch vụ chuyển phát
              nhanh hàng hóa, bưu kiện tại Việt Nam
            </p>
            <h3 className={style.contact}>THÔNG TIN LIÊN HỆ</h3>
            <p>
              <FontAwesomeIcon icon={faLocationDot} className={style.icon} />
              VP giao dịch: Tòa nhà MagicPost, Ngõ 58 Trần Bình,Cầu Giấy,Hà Nội
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
              Email: cskh@magicpost.com.vn
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className={style.icon} />
              Điện thoại: 1900 545 545
            </p>
            <h4 className={style.connect}>Kết nối cùng MacgicPost</h4>
            <ul className={style.social}>
              <a
                href="https://www.facebook.com/profile.php?id=100021264309040"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("../../assets/icon-fb.png")} alt="" />
              </a>
              <a
                href="https://zaloweb.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("../../assets/icon-zalo.png")} alt="" />
              </a>
              <a
                href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&emr=1&ifkv=ASKXGp1lY0bJXZah3HAUebjNw6pEtntA1vHmDF2phvP2F2VEVAeQQPPe2f_8Ig6KRAlzxaqKGi86&ltmpl=default&ltmplcache=2&osid=1&passive=true&rm=false&scc=1&service=mail&ss=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1156925905%3A1703436450234297&theme=glif"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("../../assets/icon-email.png")} alt="" />
              </a>
            </ul>
          </div>
          <div className={style.list2}>
            <h4>Về MagicPost</h4>
            <ul>
              <li>
                <Link className={style.info} to="#">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link className={style.info} to="#">
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link className={style.info} to="#">
                  Tin tức
                </Link>
              </li>
              <li>
                <Link className={style.info} to="#">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
          <div className={style.list3}>
            <h4>Hỗ trợ khách hàng</h4>
            <ul>
              <li>
                <Link className={style.info} to="#">
                  Chat online với CSKH
                </Link>
              </li>
              <li>
                <Link className={style.info} to="#">
                  Hướng dẫn sử dụng
                </Link>
              </li>
            </ul>
          </div>
          <div className={style.list4}>
            <h4>
              Hợp tác khách hàng doanh nghiệp, kết nối API, shop online, cá nhân
            </h4>
            <FontAwesomeIcon icon={faPhone} className={style.icon} /> 0363 963
            063
            <br />
            <FontAwesomeIcon icon={faEnvelope} className={style.icon} />{" "}
            manhduongdona@gmail.com
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;