import React from "react";
import StaffHeader from "../../../components/Company/Layout/StaffHeader";
import { FaPencilAlt } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
const UpdateStatusPage = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <StaffHeader />
      <div className=" sm:mx-[50px] sm:px-[10px] sm:py-5 sm:min-h-[1000px] min-h-[1000px] py-5 px-[10px]">
        {/* Title */}
        <div className="w-full h-[65px] px-[10px]">
          <div className="w-full float-left block text-[#26B99A]">
            <h3 className="mx-[9px] text-[24px] flex font-[500]">
              <FaPencilAlt size={30} className="mr-2 mt-1" />
              Đơn hàng: MP0002
            </h3>
            <h5 className="text-[14px] font-[500] leading-[18px] ml-11">
              <a href="/staff/quan-ly-buu-gui" className="flex text-[#31708f]">
                <ins>Quản lý bưu gửi</ins>
                <BiLinkExternal size={14} className="ml-1 mt-[2px]" />
              </a>
            </h5>
          </div>
        </div>

        {/* Form */}
        <div>
          <form action="">
            <div className="min-h-[1px] float-left px-[10px] w-full">
              <div className="mx-[-10px]">
                {/* 1 */}
                <div className="lg:w-5/12 lg:relative lg:min-h-[1px] lg:px-[10px] lg:float-left w-full relative min-h-[1px] px-[10px] float-left">
                  <div className="relative w-full h-[100%] mb-[10px] px-[17px] py-[10px] inline-block bg-white border border-solid border-[#e6e9ed] opacity-100 transition-all">
                    <div className="border-b-[2px] border-solid border-b-[#e6e9ed] text-[#26B99A] pt-[1px] pb-[6px] px-[5px] mb-[10px]">
                      <h2 className="mt-[5px] mb-[6px] block truncate text-[18px] font-[500]">
                        Người gửi
                      </h2>
                    </div>

                    {/* content người gửi */}
                    <div className="pt-0 px-[5px] pb-[6px] relative w-full float-left mt-[5px] mb-6 clear-both">
                      <div className="mx-[-10px]">
                        <div className="relative min-h-[1px] float-left px-[10px] w-[50%]">
                          <div className="mx-0 mb-[10px] text-[#31708f]">
                            <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                              Họ tên
                              <span className="text-[#a94442]">*</span>
                            </label>
                            <input
                              type="text"
                              value="Nguyễn Thị Thơm"
                              placeholder="Họ tên"
                              className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                            />
                          </div>
                        </div>
                        <div className="relative min-h-[1px] float-left px-[10px] w-[50%]">
                          <div className="mx-0 mb-[10px] text-[#31708f]">
                            <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                              Điện thoại
                              <span className="text-[#a94442]">*</span>
                            </label>
                            <input
                              type="text"
                              value="0345344400"
                              placeholder="Điện thoại người gửi"
                              className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mx-0 mb-[10px] text-[#31708f]">
                        <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                          Quận/Huyện và Tỉnh/TP
                          <span className="text-[#a94442]">*</span>
                        </label>
                        <input
                          type="text"
                          value="Thái Thụy, Thái Bình"
                          placeholder="VD: Tiền Hải, Thái Bình"
                          className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                        />
                      </div>

                      <div className="mx-0 mb-[10px] text-[#31708f]">
                        <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                          Địa chỉ
                          <span className="text-[#a94442]">*</span>
                        </label>
                        <input
                          type="text"
                          value="Số 156 Cần Treo, Thái Thụy, Thái Bình"
                          placeholder="Số nhà, tên đường/thôn, ấp..."
                          className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="border-b-[2px] border-solid border-b-[#e6e9ed] text-[#26B99A] pt-[1px] pb-[6px] px-[5px] mb-[10px]">
                      <h2 className="mt-[5px] mb-[6px] block  text-[18px] font-[500]">
                        Người nhận
                      </h2>
                    </div>
                    {/* content người nhận */}
                    <div className="pt-0 px-[5px] pb-[6px] relative w-full float-left mt-[5px] clear-both">
                      <div className="mx-[-10px]">
                        <div className="relative min-h-[1px] float-left px-[10px] w-[50%]">
                          <div className="mx-0 mb-[10px] text-[#31708f]">
                            <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                              Họ tên
                              <span className="text-[#a94442]">*</span>
                            </label>
                            <input
                              type="text"
                              value="Trần Kim Nam"
                              placeholder="Họ tên"
                              className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="relative min-h-[1px] float-left px-[10px] w-[50%]">
                        <div className="mx-0 mb-[10px] text-[#31708f]">
                          <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                            Số điện thoại
                            <span className="text-[#a94442]">*</span>
                          </label>
                          <input
                            type="text"
                            value="0398678876"
                            placeholder="Số điện thoại"
                            className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                          />
                        </div>
                      </div>

                      <div className="mx-0 mb-[10px] text-[#31708f]">
                        <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                          Quận/Huyện và Tỉnh/TP
                          <span className="text-[#a94442]">*</span>
                        </label>
                        <input
                          type="text"
                          value="Cầu Giấy, Hà Nội"
                          placeholder="VD: Tiền Hải, Thái Bình"
                          className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                        />
                      </div>

                      <div className="mx-0 mb-[10px] text-[#31708f]">
                        <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                          Địa chỉ
                          <span className="text-[#a94442]">*</span>
                        </label>
                        <input
                          type="text"
                          value="114 Cầu Giấy, Hà Nội"
                          placeholder="Số nhà, tên đường/thôn, ấp..."
                          className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2 */}
                <div className="lg:w-1/3 lg:relative lg:min-h-[1px] lg:px-[10px] lg:float-left w-full relative min-h-[1px] px-[10px] float-left">
                  <div className="relative w-full h-[100%] mb-[10px] px-[17px] py-[10px] inline-block bg-white border border-solid border-[#e6e9ed] opacity-100 transition-all">
                    <div className="border-b-[2px] border-solid border-b-[#e6e9ed] text-[#26B99A] pt-[1px] pb-[6px] px-[5px] mb-[10px]">
                      <h2 className="mt-[5px] mb-[6px] block truncate text-[18px] font-[500]">
                        Thông tin bưu gửi
                      </h2>
                    </div>

                    <div className="pt-0 px-[5px] pb-[6px] relative w-full float-left mt-[5px]  clear-both">
                      <div className="mx-0 mb-[10px] text-[#31708f]">
                        <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                          Mã sản phẩm
                          <span className="text-[#a94442]">*</span>
                        </label>
                        <input
                          type="text"
                          value="MP002"
                          placeholder="Mã sản phẩm"
                          className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                        />
                      </div>
                      <div className="mx-0 mb-[10px] text-[#31708f]">
                        <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                          Tên sản phẩm
                          <span className="text-[#a94442]">*</span>
                        </label>
                        <input
                          type="text"
                          value="Gấu bông Magic Post"
                          placeholder="Tên sản phẩm"
                          className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                        />
                      </div>

                      <div className="mx-0 mb-[10px] text-[#31708f]">
                        <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                          Loại sản phẩm
                          <span className="text-[#a94442]">*</span>
                        </label>
                        <input
                          type="text"
                          value="Hàng hóa"
                          placeholder="Loại sản phẩm"
                          className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                        />
                      </div>
                      <div className="mx-[-10px]">
                        <div className="relative min-h-[1px] float-left px-[10px] w-5/12">
                          <div className="mx-0 mb-[10px] text-[#31708f]">
                            <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                              Giá trị
                              <span className="text-[#a94442]">*</span>
                            </label>
                            <input
                              type="text"
                              value="120000"
                              placeholder="vnđ"
                              className="transition-all text-right leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                            />
                          </div>
                        </div>
                        <div className="relative min-h-[1px] float-left px-[10px] w-1/3">
                          <div className="mx-0 mb-[10px] text-[#31708f]">
                            <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                              K.lượng
                              <span className="text-[#a94442]">*</span>
                            </label>
                            <input
                              type="text"
                              value="500"
                              placeholder="gram"
                              className="transition-all text-right leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                            />
                          </div>
                        </div>
                        <div className="relative min-h-[1px] float-left px-[10px] w-1/4">
                          <div className="mx-0 mb-[10px] text-[#31708f]">
                            <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                              S.lượng
                              <span className="text-[#a94442]">*</span>
                            </label>
                            <input
                              type="text"
                              value="1"
                              placeholder="1"
                              className="transition-all text-right leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mx-0 mb-[10px] text-[#31708f] text-left">
                        <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                          Kích thước (nếu có)
                        </label>
                        <div className="mx-[-10px]">
                          <div className="relative min-h-[1px] float-left px-[10px] w-1/3">
                            <div className="mx-0 mb-[10px] text-[#31708f]">
                              <input
                                type="text"
                                value="50"
                                placeholder="Dài (cm)"
                                className="transition-all text-right leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                              />
                            </div>
                          </div>
                          <div className="relative min-h-[1px] float-left px-[10px] w-1/3">
                            <div className="mx-0 mb-[10px] text-[#31708f]">
                              <input
                                type="text"
                                value="20"
                                placeholder="Rộng (cm)"
                                className="transition-all text-right leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                              />
                            </div>
                          </div>
                          <div className="relative min-h-[1px] float-left px-[10px] w-1/3">
                            <div className="mx-0 mb-[10px] text-[#31708f]">
                              <input
                                type="text"
                                value="50"
                                placeholder="Cao (cm)"
                                className="transition-all text-right leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mx-[-10px]">
                        <div className="relative min-h-[1px] float-left px-[10px] w-[50%]">
                          <div className="mx-0 mb-[10px] text-[#31708f]">
                            <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                              Giá cước
                              <span className="text-[#a94442]">*</span>
                            </label>
                            <input
                              type="text"
                              value="15000"
                              placeholder="VNĐ"
                              className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="relative min-h-[1px] float-left px-[10px] w-[50%]">
                        <div className="mx-0 mb-[10px] text-[#31708f]">
                          <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                            Tổng tiền
                            <span className="text-[#a94442]">*</span>
                          </label>
                          <input
                            type="text"
                            value="135000"
                            placeholder="VNĐ"
                            className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                          />
                        </div>
                      </div>

                      <div className="mx-0 mb-[10px] text-[#31708f]">
                        <label
                          for="description"
                          className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]"
                        >
                          Ghi chú
                        </label>
                        <textarea
                          name="description"
                          id="description"
                          value="Đây là miêu tả của bưu gửi"
                          rows="3"
                          className="h-auto leading-[30px] w-full px-3 py-[6px] text-[14px] block bg-white border border-solid border-[#dde2e8] shadow-sm"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3 */}
                <div className="lg:w-1/4 lg:relative lg:min-h-[1px] lg:px-[10px] lg:float-left w-full relative min-h-[1px] px-[10px] float-left">
                  <div className="relative w-full h-[100%] mb-[10px] px-[17px] py-[10px] inline-block bg-white border border-solid border-[#e6e9ed] opacity-100 transition-all">
                    <div className="border-b-[2px] border-solid border-b-[#e6e9ed] text-[#26B99A] pt-[1px] pb-[6px] px-[5px] mb-[10px]">
                      <h2 className="mt-[5px] mb-[6px] block truncate text-[18px] font-[500]">
                        Trạng thái đơn hàng
                      </h2>
                    </div>

                    <div className="pt-0 px-[5px] pb-[6px] relative w-full float-left mt-[5px] clear-both min-h-[1px]">
                      <div className="mx-0 mb-[10px] text-[#31708f]">
                        <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                          Cập nhật trạng thái
                          <span className="text-[#a94442]">*</span>
                        </label>
                        <select
                          name="service"
                          id="service"
                          className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                        >
                          <option value="3">Lựa chọn trạng thái</option>
                          <option value="2">Chờ lấy hàng</option>
                          <option value="1">Đã lấy hàng</option>
                          <option value="">Đang vận chuyển</option>
                          <option value="">Chờ phát</option>
                          <option value="">Phát thành công</option>
                          <option value="">Phát không thành công</option>
                          <option value="">Chờ chuyển hoàn</option>
                          <option value="">Chuyển hoàn</option>
                          <option value="">Phát hoàn thành công</option>
                          <option value="">Chuyển tiếp</option>
                          <option value="">Vô thừa nhận</option>
                          <option value="">Đơn hàng hủy</option>
                          <option value="">Bồi thường</option>
                        </select>
                      </div>
                    </div>

                    <div className="mx-0 mb-[20px]">
                      <button
                        type="submit"
                        className="mr-[5px] inline-block transition-all text-center w-full cursor-pointer text-white bg-[#26B99A] mb-0 font-normal align-middle border-none px-3 py-[6px] leading-[1.43] text-[14px] whitespace-nowrap"
                      >
                        Cập nhật
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateStatusPage;
