import React from "react";
import style from "./CreateOrder.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faArrowRight,
  faUserCheck,
  faBox,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

const CreateOrder = () => {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");

  const [items, setItems] = useState([
    {
      quantity: "",
      weight: "",
      money: "",
    },
  ]);
  const handleAddItem = () => {
    // Add a new item to the items array
    setItems([
      ...items,
      {
        quantity: "",
        weight: "",
        money: "",
      },
    ]);
  };
  const handleQuantityChange = (index, event) => {
    const newItems = [...items];
    newItems[index].quantity = event.target.value;
    setItems(newItems);
  };

  const handleWeightChange = (index, event) => {
    const newItems = [...items];
    newItems[index].weight = event.target.value;
    setItems(newItems);
  };

  const handleMoneyChange = (index, event) => {
    const newItems = [...items];
    newItems[index].money = event.target.value;
    setItems(newItems);
  };

  const totalWeight = items.reduce(
    (total, item) => total + Number(item.weight),
    0
  );
  const totalMoney = items.reduce(
    (total, item) => total + Number(item.money) * Number(item.quantity),
    0
  );

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
      )
      .then((response) => {
        setCities(response.data);
      });
  }, []);

  useEffect(() => {
    if (selectedCity) {
      const city = cities.find((city) => city.Id === selectedCity);
      setDistricts(city.Districts);
    } else {
      setDistricts([]);
      setWards([]);
    }
  }, [selectedCity]);

  useEffect(() => {
    if (selectedDistrict) {
      const district = districts.find(
        (district) => district.Id === selectedDistrict
      );
      if (district) {
        setWards(district.Wards);
      } else {
        setWards([]);
      }
    } else {
      setWards([]);
    }
  }, [selectedDistrict]);

  useEffect(() => {}, [selectedWard]);

  function handleNameChange(index, event) {
    const newItems = [...items];
    newItems[index].name = event.target.value;
    setItems(newItems);
  }

  function renderItems() {
    return items.map((item, index) => {
      return (
        <div className={`${style.product} row`} key={index}>
          <div className="col-2">
            <label>Tên hàng {index + 1}</label>
            <span className={style.textDanger}>*</span>
          </div>
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập tên hàng"
              value={item.name}
              onChange={(event) => handleNameChange(index, event)}
            />
            <div className={`${style.infoOrder} row`}>
              <div className={`${style.quantity} col-sm-4`}>
                <img src={require("../../assets/quantity.png")} alt="" />
                <input
                  type="number"
                  className="form-control"
                  placeholder="Số lượng"
                  value={item.quantity}
                  onChange={(event) => handleQuantityChange(index, event)}
                />
              </div>
              <div className={`${style.weight} col-sm-4`}>
                <img src={require("../../assets/weight.png")} alt="" />
                <input
                  type="number"
                  className="form-control"
                  placeholder="Trọng lượng"
                  value={item.weight}
                  onChange={(event) => handleWeightChange(index, event)}
                />
              </div>
              <div className={`${style.money} col-sm-4`}>
                <img src={require("../../assets/money.png")} alt="" />
                <input
                  type="number"
                  className="form-control"
                  placeholder="Giá trị hàng"
                  value={item.money}
                  onChange={(event) => handleMoneyChange(index, event)}
                />
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className={`${style.container} container`}>
      <form
        action=""
        id="createEditForm"
        className={`${style.CreateOrder} form-group`}
      >
        <div className="row">
          <div className="col-md-6">
            <div className={`${style.box} form-group d-flex flex-column`}>
              <div className={style.header}>
                <div className="d-flex justify-content-between">
                  <div className={style.left}>
                    <FontAwesomeIcon icon={faUser} className={style.icon} />
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className={style.icon}
                    />
                    <span>NGƯỜI GỬI</span>
                  </div>
                  <div className={style.right}></div>
                </div>
              </div>
              <div className={style.body}>
                <div className={`${style.formGroup} row`}>
                  <label className="col-xl-2 col-lg-4">
                    Họ tên
                    <span className={style.textDanger}>*</span>
                  </label>
                  <div className="col-xl-10 col-lg-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập tên người gửi"
                    />
                  </div>
                </div>
                <div className={`${style.formGroup} row`}>
                  <label className="col-xl-2 col-lg-4">
                    Điện thoại
                    <span className={style.textDanger}>*</span>
                  </label>
                  <div className="col-xl-10 col-lg-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập số điện thoại người gửi"
                    />
                  </div>
                </div>
                <div className={`${style.formGroup} row`}>
                  <label className="col-xl-2 col-lg-4">
                    Email
                    <span className={style.textDanger}>*</span>
                  </label>
                  <div className="col-xl-10 col-lg-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập email người gửi"
                    />
                  </div>
                </div>
                <div className={`${style.formGroup} row`}>
                  <label className="col-xl-2 col-lg-4">
                    Địa chỉ
                    <span className={style.textDanger}>*</span>
                  </label>
                  <div className="col-xl-10 col-lg-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập địa chỉ ( số nhà/tên đường cụ thể )"
                    />
                  </div>
                </div>
                <div className={`${style.formGroup} row`}>
                  <label className="col-xl-2 col-lg-4"></label>
                  <div className={`${style.selectLocation} col-xl-10 col-lg-8`}>
                    <Select
                      className={style.location}
                      options={cities.map((city) => ({
                        value: city.Id,
                        label: city.Name,
                      }))}
                      onChange={(e) => setSelectedCity(e.value)}
                      placeholder="Chọn tỉnh/thành"
                    />
                    <Select
                      className={style.location}
                      options={districts.map((district) => ({
                        value: district.Id,
                        label: district.Name,
                      }))}
                      onChange={(e) => setSelectedDistrict(e.value)}
                      placeholder="Chọn quận/huyện"
                    />
                    <Select
                      className={style.location}
                      options={wards.map((ward) => ({
                        value: ward.Id,
                        label: ward.Name,
                      }))}
                      onChange={(e) => setSelectedWard(e.value)}
                      placeholder="Chọn phường/xã"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${style.box} form-group d-flex flex-column`}>
              <div className={style.header}>
                <div className="d-flex justify-content-between">
                  <div className={style.left}>
                    <FontAwesomeIcon
                      icon={faUserCheck}
                      className={style.icon}
                    />
                    <span>NGƯỜI NHẬN</span>
                  </div>
                  <div className={style.right}></div>
                </div>
              </div>
              <div className={style.body}>
                <div className={`${style.formGroup} row`}>
                  <label className="col-xl-2 col-lg-4">
                    Điện thoại
                    <span className={style.textDanger}>*</span>
                  </label>
                  <div className="col-xl-10 col-lg-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập số điện thoại người nhận"
                    />
                  </div>
                </div>
                <div className={`${style.formGroup} row`}>
                  <label className="col-xl-2 col-lg-4">
                    Họ tên
                    <span className={style.textDanger}>*</span>
                  </label>
                  <div className="col-xl-10 col-lg-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập tên người nhận"
                    />
                  </div>
                </div>
                <div className={`${style.formGroup} row`}>
                  <label className="col-xl-2 col-lg-4">
                    Địa chỉ
                    <span className={style.textDanger}>*</span>
                  </label>
                  <div className="col-xl-10 col-lg-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập địa chỉ ( số nhà/tên đường cụ thể )"
                    />
                  </div>
                </div>
                <div className={`${style.formGroup} row`}>
                  <label className="col-xl-2 col-lg-4"></label>
                  <div className={`${style.selectLocation} col-xl-10 col-lg-8`}>
                    <Select
                      className={style.location}
                      options={cities.map((city) => ({
                        value: city.Id,
                        label: city.Name,
                      }))}
                      onChange={(e) => setSelectedCity(e.value)}
                      placeholder="Chọn tỉnh/thành"
                    />
                    <Select
                      className={style.location}
                      options={districts.map((district) => ({
                        value: district.Id,
                        label: district.Name,
                      }))}
                      onChange={(e) => setSelectedDistrict(e.value)}
                      placeholder="Chọn quận/huyện"
                    />
                    <Select
                      className={style.location}
                      options={wards.map((ward) => ({
                        value: ward.Id,
                        label: ward.Name,
                      }))}
                      onChange={(e) => setSelectedWard(e.value)}
                      placeholder="Chọn phường/xã"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={`${style.box} form-group d-flex flex-column`}>
              <div className={style.header}>
                <div className="d-flex justify-content-between">
                  <div className={style.left}>
                    <FontAwesomeIcon icon={faBox} className={style.icon} />
                    <span>THÔNG TIN HÀNG HÓA</span>
                  </div>
                  <div className={style.right}></div>
                </div>
              </div>
              <div className={style.body}>
                <div className={`${style.inputGroup} row`}>
                  <label className={style.head}>LOẠI HÀNG HÓA</label>
                  <div className="row mb-3">
                    <div className={`${style.tick} col-md-4`}>
                      <input
                        type="radio"
                        id="parcel"
                        name="goodsType"
                        value="parcel"
                      />
                      <label for="parcel">Bưu kiện</label>
                    </div>
                    <div className={`${style.tick} col-md-4`}>
                      <input
                        type="radio"
                        id="document"
                        name="goodsType"
                        value="document"
                      />
                      <label for="document">Tài liệu</label>
                    </div>
                  </div>
                </div>
                {renderItems()}
                <div className={style.add}>
                  <button type="button" onClick={handleAddItem}>
                    <FontAwesomeIcon icon={faPlus} />
                    Thêm hàng hóa
                  </button>
                </div>
                <div className={`${style.total} row mb-2`}>
                  <label className="col-xl-3 col-lg-4">Tổng khối lượng</label>
                  <div className={`${style.textRight} col-xl-9 col-lg-8 `}>
                    {totalWeight} g
                  </div>
                  <label className="col-xl-3 col-lg-4">Tổng giá trị</label>
                  <div className={`${style.textRight} col-xl-9 col-lg-8 `}>
                    {totalMoney} đ
                  </div>
                </div>
                <div className={`${style.listSpecial} row`}>
                  <label className={style.head}>
                    TÍNH CHẤT HÀNG HÓA ĐẶC BIỆT
                  </label>
                  <div className={style.list}>
                    <div className={`${style.tick} col-lg-4 col-md-6`}>
                      <input
                        type="checkbox"
                        id="checkbox-1"
                        name="specialProperties"
                        value="HGC"
                      />
                      <label for="HGC">Giá trị cao</label>
                    </div>
                    <div className={`${style.tick} col-lg-4 col-md-6`}>
                      <input
                        type="checkbox"
                        id="checkbox-2"
                        name="specialProperties"
                        value="HDV"
                      />
                      <label for="HDV">Dễ vỡ</label>
                    </div>
                  </div>
                </div>
                <div className={`${style.size} row`}>
                  <label className="col-xl-2 col-lg-4">Kích thước</label>
                  <div className={`${style.formGroup1} col-xl-10 col-lg-8`}>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Dài (cm)"
                    />
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rộng (cm)"
                    />
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Cao (cm)"
                    />
                  </div>
                </div>
                <div className={`${style.code} row`}>
                  <label className="col-xl-3 col-lg-4">Mã đơn hàng</label>
                  <div className="col-xl-9 col-lg-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập mã đơn hàng tự tạo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${style.box} form-group d-flex flex-column`}>
              <div className={`${style.require} row`}>
                <div className={`${style.whoPay} col-lg-6`}>
                  <label className={style.head}>Người trả cước</label>
                  <div className={`${style.tick} `}>
                    <input type="radio" id="sender" name="payer" />
                    <label for="sender">Người gửi</label>
                  </div>
                  <div className={`${style.tick} `}>
                    <input type="radio" id="receiver" name="payer" />
                    <label for="receiver">Người nhận</label>
                  </div>
                </div>
                <div className={`${style.where} col-lg-6`}>
                  <label className={style.head}>Yêu cầu lấy hàng</label>
                  <div className={`${style.tick} `}>
                    <input type="radio" id="home" name="pickup" />
                    <label for="home">Đến lấy hàng tại nhà</label>
                  </div>
                  <div className={`${style.tick} `}>
                    <input type="radio" id="postOffice" name="pickup" />
                    <label for="postOffice">Tại bưu cục</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.boxMoney}>
          <div className={`${style.summary} row`}>
            <div className={`${style.lastMoney} col-md-4`}>
              <label>Tổng số tiền: {totalMoney} đ</label>
            </div>
            <div className={`${style.lastMoney} col-md-4`}>
              <label>Thời gian dự kiến: 1-3 ngày</label>
            </div>
            <div className={`${style.accept} col-md-4`}>
              <div className={style.confirm}>
                <input type="checkbox" id="terms" name="terms" />
                <label for="terms">
                  Tôi đã đọc và đồng ý với điều khoản quy định
                </label>
              </div>
              <div className={style.push}>
                <button type="submit">Gửi ngay</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CreateOrder;
