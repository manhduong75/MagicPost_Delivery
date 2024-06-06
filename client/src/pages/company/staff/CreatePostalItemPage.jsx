import React from "react";
import StaffHeader from "../../../components/Company/Layout/StaffHeader.jsx";
import { FaPencilAlt } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
const CreatePostalItemPage = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <StaffHeader />
      <div className=" sm:mx-[50px] sm:px-[10px] sm:py-5 sm:min-h-[1000px] min-h-[1000px] py-5 px-[10px]">
        {/* Title */}
        <div className="w-full h-[65px] px-[10px]">
          <div className="w-full float-left block text-[#26B99A]">
            <h3 className="mx-[9px] text-[24px] flex font-[500]">
              <FaPencilAlt size={30} className="mr-2 mt-1" />
              Tạo bưu gửi
            </h3>
            <h5 className="text-[14px] font-[500] leading-[18px] ml-11">
              <a href="/" className="flex text-[#31708f]">
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
                      <div className="mx-0 mb-[10px] text-[#31708f]">
                        <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                          Thông tin người gửi
                        </label>
                        <input
                          type="text"
                          placeholder="Tên thông tin người gửi (nếu có)"
                          className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                        />
                      </div>

                      <div className="mx-[-10px]">
                        <div className="relative min-h-[1px] float-left px-[10px] w-[50%]">
                          <div className="mx-0 mb-[10px] text-[#31708f]">
                            <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                              Họ tên
                              <span className="text-[#a94442]">*</span>
                            </label>
                            <input
                              type="text"
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
                              Số điện thoại
                              <span className="text-[#a94442]">*</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Số điện thoại"
                              className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                            />
                          </div>
                        </div>
                        <div className="relative min-h-[1px] float-left px-[10px] w-[50%]">
                          <div className="mx-0 mb-[10px] text-[#31708f]">
                            <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                              Họ tên
                              <span className="text-[#a94442]">*</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Họ tên"
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
                          placeholder="VD: Tiền Hải, Thái Bình"
                          className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                        />
                      </div>

                      <div className="mx-0 mb-[10px] text-[#31708f]">
                        <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                          Phường/Xã
                        </label>
                        <input
                          type="text"
                          placeholder="Phường/Xã"
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
                          Tên sản phẩm
                          <span className="text-[#a94442]">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Tên sản phẩm"
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
                                placeholder="Dài (cm)"
                                className="transition-all text-right leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                              />
                            </div>
                          </div>
                          <div className="relative min-h-[1px] float-left px-[10px] w-1/3">
                            <div className="mx-0 mb-[10px] text-[#31708f]">
                              <input
                                type="text"
                                placeholder="Rộng (cm)"
                                className="transition-all text-right leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                              />
                            </div>
                          </div>
                          <div className="relative min-h-[1px] float-left px-[10px] w-1/3">
                            <div className="mx-0 mb-[10px] text-[#31708f]">
                              <input
                                type="text"
                                placeholder="Cao (cm)"
                                className="transition-all text-right leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                              />
                            </div>
                          </div>
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
                        Bưu gửi
                      </h2>
                    </div>

                    <div className="pt-0 px-[5px] pb-[6px] relative w-full float-left mt-[5px] clear-both min-h-[1px]">
                      <div className="mx-0 mb-[10px] text-[#31708f]">
                        <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                          Dịch vụ vẫn chuyển
                          <span className="text-[#a94442]">*</span>
                        </label>
                        <select
                          name="service"
                          id="service"
                          className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                        >
                          <option value="3">Lựa chọn dịch vụ</option>
                          <option value="2">
                            Chuyển phát nhanh MP - Tài liệu
                          </option>
                          <option value="1">
                            Chuyển phát nhanh MP - Hàng hóa
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-0 px-[5px] pb-[6px] relative w-full float-left mt-[5px] clear-both min-h-[1px]">
                      <div className="mx-0 mb-[10px] text-[#31708f]">
                        <label className="pt-[8px] mb-0 inline-block max-w-[100%] font-bold text-[13px] leading-[1.48]">
                          Dịch vụ cộng thêm
                        </label>
                        <select
                          name="service"
                          id="service"
                          className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                        >
                          <option value="5">Dịch vụ cộng thêm</option>
                          <option value="4">Giao hàng thu tiền</option>
                          <option value="3">
                            Thu thập hồ sơ và báo phát hình ảnh
                          </option>
                          <option value="2">Thu hộ phí ship hàng</option>
                          <option value="1">Thu hộ phí hủy đơn hàng</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-0 px-[5px] pb-[6px] relative w-full float-left mt-[5px] clear-both min-h-[1px]">
                      <label class="relative inline-flex items-center cursor-pointer mb-[5px]">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#26b99a]"></div>
                        <span class="ml-3 font-bold text-[13px] leading-[1.48] text-[#31708f]">
                          Cho khách xem hàng
                        </span>
                      </label>
                    </div>

                    <div className="pt-0 px-[5px] pb-[6px] relative w-full float-left mt-[5px] mb-[10px] clear-both min-h-[1px]">
                      <label class="relative inline-flex items-center cursor-pointer mb-[5px]">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#26b99a]"></div>
                        <span class="ml-3 font-bold text-[13px] leading-[1.48] text-[#31708f]">
                          Hàng chất lỏng, pin sạc
                        </span>
                      </label>
                    </div>

                    <div className="mx-0 mb-[20px]">
                      <button
                        type="submit"
                        className="mr-[5px] inline-block transition-all text-center w-full cursor-pointer text-white bg-[#26B99A] mb-0 font-normal align-middle border-none px-3 py-[6px] leading-[1.43] text-[14px] whitespace-nowrap"
                      >
                        TẠO BƯU GỬI
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

export default CreatePostalItemPage;
