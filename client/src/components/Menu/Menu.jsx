import style from "./Menu.module.scss";
import React from "react";
import { Link } from "react-router-dom";
import boostrap from "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  return (
    <div className={style["menu"]}>
      <div className={style["container"]}>
        <div className={style["row"]}>
          <div className={style["main-menu"]}>
            <ul className={style["menu-list"]}>
              <li className={style["menu-item"]}>
                <Link to="#" className={style["menu-link"]}>
                  Trang chủ
                </Link>
              </li>
              <li className={style["menu-item"]}>
                <Link to="#" className={style["menu-link"]}>
                  Dịch vụ
                </Link>
                <ul className={style.submenu}>
                  <li>
                    <Link to="" className={style["menu-link-list"]}>
                      Chuyển phát nhanh hàng hóa, tài liệu
                    </Link>
                  </li>
                  <li>
                    <Link to="" className={style["menu-link-list"]}>
                      Chuyển phát Hoả tốc, hẹn giờ
                    </Link>
                  </li>
                  <li>
                    <Link to="" className={style["menu-link-list"]}>
                      Chuyển phát Thương mại điện tử
                    </Link>
                  </li>
                  <li>
                    <Link to="" className={style["menu-link-list"]}>
                      Chuyển phát Tiết kiệm hàng hóa
                    </Link>
                  </li>
                  <li>
                    <Link to="" className={style["menu-link-list"]}>
                      Phân loại hàng hóa đặc biệt
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={style["menu-item"]}>
                <Link to="#" className={style["menu-link"]}>
                  Tin tức
                </Link>
                <ul className={style.submenu}>
                  <li>
                    <Link to="" className={style["menu-link-list"]}>
                      Tin hoạt động
                    </Link>
                  </li>
                  <li>
                    <Link to="" className={style["menu-link-list"]}>
                      Tin khuyến mãi
                    </Link>
                  </li>
                  <li>
                    <Link to="" className={style["menu-link-list"]}>
                      Tin đấu thầu
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={style["menu-item"]}>
                <Link to="#" className={style["menu-link"]}>
                  Hỗ trợ khách hàng
                </Link>
                <ul className={style.submenu}>
                  <li>
                    <Link to="" className={style["menu-link-list"]}>
                      Hướng dẫn sử dụng
                    </Link>
                  </li>
                  <li>
                    <Link to="" className={style["menu-link-list"]}>
                      Câu hỏi thường gặp
                    </Link>
                  </li>
                  <li>
                    <Link to="" className={style["menu-link-list"]}>
                      Gửi thông tin khiếu nại
                    </Link>
                  </li>
                  <li>
                    <Link to="" className={style["menu-link-list"]}>
                      Góp ý sản phẩm dịch vụ
                    </Link>
                  </li>
                  <li>
                    <Link to="" className={style["menu-link-list"]}>
                      Liên hệ
                    </Link>
                  </li>
                  <li>
                    <Link to="" className={style["menu-link-list"]}>
                      Thông tin hỗ trợ khách hàng
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;