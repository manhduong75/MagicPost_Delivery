import React from "react";
import style from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className={style.search}>
      <div className={style.container}>
        <ul className={style.u1}>
          <li className={`${style.att} ${style.acti}`} data-title="one">
            Tra cứu{" "}
          </li>
          <li className={style.att} data-title="two">
            Dịch vụ
          </li>
        </ul>
        <div className={`${style["ct-tracuu"]}`}>
          <ul className={style.u2}>
            <li data-title="ct1" className={style.active}>
              Tra cứu vận đơn
            </li>
            <li data-title="ct2">Ước tính cước phí</li>
            <li data-title="ct3">Tìm kiếm điểm giao dịch</li>
            <li data-title="ct4">Tìm kiếm điểm tập kết</li>
          </ul>
          <div className={`${style["form-search"]} d-flex flex-row`}>
            <div className={`${style["side-1"]} col-md-7`}>
              <h4>Mã phiếu gửi</h4>
              <p>(Tra nhiều bill bằng cách thêm dấu phẩy giữa các bill)</p>
              <form action="/" method="get">
                <input type="text" placeholder="VD: 12345,15678" name="s" />
                <button type="submit" value="">
                  Tra cứu
                  <FontAwesomeIcon icon={faArrowRight} className={style.icon} />
                </button>
              </form>
            </div>
            <div className={`${style["side-2"]} col-md-5`}>
              <img src={require("../../assets/img-search.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;