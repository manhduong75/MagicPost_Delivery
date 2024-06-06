import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const PostalLookupPage = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="block top-16">
          <img
            src="https://i.imgur.com/xLuYgb1.jpg"
            className="object-cover h-[340px] w-full"
            alt=""
          />
        </div>
        <div>
          <div className="max-w-screen-xl px-4 pt-8 mx-auto lg:space-y-20 lg:px-6">
            <span className="text-[#f7941e] text-4xl items-center lg:font-[500] lg:text-[45px] lg:leading-[55px]">
              TRA CỨU BƯU GỬI
            </span>
          </div>
          <section class="bg-white">
            <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:pb-24 lg:pt-8 lg:px-6">
              <div class="shadow-[2px_10px_25px_5px_rgba(0,0,0,0.1)] p-[40px] rounded-lg">
                <div className="mb-[18px] text-[16px] flex leading-6">
                  <img
                    className="w-[32px] h-[32px] mr-[10px]"
                    src="https://ems.com.vn/img/icon/order-search.png"
                    alt=""
                  />
                  <div>Mã bưu gửi (VD: EB125966888VN)</div>
                </div>
                <div>
                  <form action="">
                    <div className="flex flex-wrap mr-[-15px] ml-[-15px]">
                      <div className="grow-0 shrink-0 basis-3/4 max-w-[75%] w-full px-[15px]">
                        <input
                          type="text"
                          placeholder="Nhập mã bưu gửi"
                          className="w-full border solid border-[#edecec] rounded py-[13px] px-[20px]"
                        />
                      </div>
                      <div className="grow-0 shrink-0 basis-1/4 max-w-[25%]  w-full px-[15px]">
                        <button className="flex items-center justify-center text-white bg-[#f7941e] hover:bg-[#0072bc] hover:-translate-y-1 transition-all duration-500 leading-6 font-[500] text-[18px] w-full h-full rounded-md">
                          Tra cứu
                        </button>
                      </div>
                      <div className="mt-[20px] text-[14px] pl-[15px]">
                        <i>
                          Ghi chú: Nhập đúng mã bưu gửi để tra cứu thành công
                        </i>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white">
            <div class="max-w-screen-lg px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:pb-24 lg:pt-8 lg:px-6">
              <div className="mb-[70px]">
                <div className="mb-[35px]">
                  <h3 className="font-[700] text-[20px] leading-6 text-[#0072bc]">
                    THÔNG TIN BƯU GỬI
                  </h3>
                </div>
                <div className="px-[23px] py-[24px] bg-[#fafafa] border-b-[1px] border-dashed border-b-[#afafaf] flex flex-wrap">
                  <div className="text-[16px] leading-[21px] text-[#313131] px-[15px] basis-[100%] shrink-0 md:basis-1/3 grow-0 md:max-w-[33.333%]">
                    <div>
                      Nước gửi:{" "}
                      <span className="font-[700] text-[16x] leading-[27px] text-[#313131] ml-5">
                        VN-VIETNAM
                      </span>
                    </div>
                  </div>

                  <div className="text-[16px] leading-[21px] text-[#313131] px-[15px] basis-[100%] shrink-0 md:basis-2/3 grow-0 md:max-w-[66.66667%]">
                    <div>
                      Địa chỉ gửi:{" "}
                      <span className="font-[700] text-[16px] leading-[27px] text-[#313131] ml-5">
                        Nam Hưng - Tiền Hải - Thái Bình
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-[23px] py-[24px] bg-[#fafafa] border-b-[1px] border-dashed border-b-[#afafaf] flex flex-wrap">
                  <div className="text-[16px] leading-[21px] text-[#313131] px-[15px] basis-[100%] shrink-0 md:basis-1/3 grow-0 md:max-w-[33.333%]">
                    <div>
                      Nước nhận:{" "}
                      <span className="font-[700] text-[16x] leading-[27px] text-[#313131] ml-5">
                        VN-VIETNAM
                      </span>
                    </div>
                  </div>

                  <div className="text-[16px] leading-[21px] text-[#313131] px-[15px] basis-[100%] shrink-0 md:basis-2/3 grow-0 md:max-w-[66.66667%]">
                    <div>
                      Địa chỉ nhận:{" "}
                      <span className="font-[700] text-[16px] leading-[27px] text-[#313131] ml-5">
                        Hồng Hà - Hạ Long - Quảng Ninh
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-[23px] py-[24px] bg-[#fafafa]">
                  <div className="text-[16px] leading-[21px] text-[#313131] px-[15px]">
                    <div>
                      Trạng thái:{" "}
                      <span className="font-[700] text-[16x] leading-[27px] text-[#313131] ml-5">
                        Phát thành công
                      </span>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  <table class="table w-full border-collapse rounded-md text-center mr-[3px] mb-4">
                    <thead className="bg-[#0072bc]">
                      <tr>
                        <th class="p-[20px] border solid border-[#fff] leading-[30px] text-[18px] font-[700] text-[#fff] text-center ">
                          Số hiệu bưu gửi
                        </th>
                        <th class="p-[20px] border solid border-[#fff] leading-[30px] text-[18px] font-[700] text-[#fff] text-center ">
                          Khối lượng (gram)
                        </th>
                        <th class="p-[20px] border solid border-[#fff] leading-[30px] text-[18px] font-[700] text-[#fff] text-center ">
                          Nơi gửi
                        </th>
                        <th class="p-[20px] border solid border-[#fff] leading-[30px] text-[18px] font-[700] text-[#fff] text-center ">
                          Nơi nhận
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          EU103280832VN
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          30
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          12910 - Thăng Long
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          20 - Quảng Ninh
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* <div className="bg-[#0072bc] rounded-t-lg px-[26px] py-[30px] flex flex-wrap ">
                  <div className="border-r-[1px] solid border-r-[#fff] px-[2px] md:px-[5px] lg:px-[15px]">
                    <div className="text-[#fff] text-[14px] leading-[21px]">
                      Số hiệu bưu gửi
                    </div>
                    <p className="font-[700] text-[18px] leading-[27px] text-[#fff] mb-0 text-ellipsis">
                      EU103280832VN
                    </p>
                  </div>

                  <div className="border-r-[1px] solid border-r-[#fff] px-[33px]">
                    <div className="text-[#fff] text-[14px] leading-[21px]">
                      Khối lượng (gram)
                    </div>
                    <p className="font-[700] text-[18px] leading-[27px] text-[#fff] mb-0 text-ellipsis">
                      30
                    </p>
                  </div>

                  <div className="border-r-[1px] solid border-r-[#fff] px-[58px]">
                    <div className="text-[#fff] text-[14px] leading-[21px]">
                      Nơi gửi
                    </div>
                    <p className="font-[700] text-[18px] leading-[27px] text-[#fff] mb-0 text-ellipsis">
                      12910 - Thăng Long
                    </p>
                  </div>

                  <div className=" pl-[58px] pr-[15px]">
                    <div className="text-[#fff] text-[14px] leading-[21px]">
                      Nơi nhận
                    </div>
                    <p className="font-[700] text-[18px] leading-[27px] text-[#fff] mb-0 text-ellipsis">
                      20 - Quảng Ninh
                    </p>
                  </div>
                </div> */}
              </div>

              <div>
                <div className="mb-[35px]">
                  <h3 className="font-[700] text-[20px] leading-6 text-[#0072bc]">
                    THÔNG TIN TRẠNG THÁI
                  </h3>
                </div>
                <div className="block w-full overflow-x-auto">
                  <table class="table w-full border-collapse rounded-md text-center mr-[3px] mb-4">
                    <thead className="bg-[#0072bc]">
                      <tr>
                        <th class="p-[20px] border solid border-[#fff] leading-[30px] text-[18px] font-[700] text-[#fff] text-center ">
                          STT
                        </th>
                        <th class="p-[20px] border solid border-[#fff] leading-[30px] text-[18px] font-[700] text-[#fff] text-center ">
                          Ngày
                        </th>
                        <th class="p-[20px] border solid border-[#fff] leading-[30px] text-[18px] font-[700] text-[#fff] text-center ">
                          Giờ
                        </th>
                        <th class="p-[20px] border solid border-[#fff] leading-[30px] text-[18px] font-[700] text-[#fff] text-center ">
                          Trạng thái
                        </th>
                        <th class="p-[20px] border solid border-[#fff] leading-[30px] text-[18px] font-[700] text-[#fff] text-center">
                          Vị trí
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          1
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          18/10/2023
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          07:53:32
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          Chấp nhận gửi (Posting / Collection ) (129100: Thăng
                          Long - Hà Nội ) (Đầu mối CSKH: 024.39.388.888 )
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          Sô´5, Đường Phạm Hùng, Phường Mỹ Đình 2, Nam Từ Liêm,
                          Hà Nội
                        </td>
                      </tr>
                      <tr>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          2
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          18/10/2023
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          09:34:26
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          Đi khỏi bưu cục (Departure from PO) (129100: Thăng
                          Long - Hà Nội )
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          Sô´5, Đường Phạm Hùng, Phường Mỹ Đình 2, Nam Từ Liêm,
                          Hà Nội
                        </td>
                      </tr>
                      <tr>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          3
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          19/10/2023
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          07:57:27
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          Đã vận chuyển đến bưu cục (Transport arrival at PO)
                          (201130: Cột 5 - Quảng Ninh )
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          Tổ 60c, Khu 5a, Phường Hồng Hà, Hạ Long, Quảng Ninh
                        </td>
                      </tr>
                      <tr>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          4
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          19/10/2023
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          08:51:00
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          Đã giao bưu tá phát (Item out for physical delivery)
                          (201130: Cột 5 - Quảng Ninh )
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          Tổ 60c, Khu 5a, Phường Hồng Hà, Hạ Long, Quảng Ninh
                        </td>
                      </tr>
                      <tr>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          5
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          19/10/2023
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          10:21:27
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          Phát thành công (Delivered) (201130: Cột 5 - Quảng
                          Ninh )
                        </td>
                        <td class="p-[20px] border-[2px] border-dashed border-[#ddd]">
                          Tổ 60c, Khu 5a, Phường Hồng Hà, Hạ Long, Quảng Ninh
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

//ET051174907VN
//EU103280832VN
export default PostalLookupPage;
