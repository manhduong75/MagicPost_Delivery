import React from "react";
import PointLeaderHeader from "../../../components/Company/Layout/PointLeaderHeader";
import { BiLinkExternal } from "react-icons/bi";
import { FaRegListAlt } from "react-icons/fa";
const OrderStatsPage = () => {
  return (
    <div>
      <PointLeaderHeader />
      <div className=" sm:mx-[50px] sm:px-[10px] sm:py-5 sm:min-h-[800px] min-h-[1000px] py-5 px-[10px]">
        {/* Title */}
        <div className="w-full h-[65px] px-[10px] mb-3">
          <div className="w-full float-left block text-[#26B99A]">
            <h3 className="mx-[9px] text-[24px] flex font-[500]">
              <FaRegListAlt size={24} className="mr-2 mt-[7px]" />
              Thông kê hàng
            </h3>
            <h5 className="text-[14px] font-[500] leading-[18px] ml-11">
              <a href="/" className="flex text-[#31708f]">
                <ins>Quản lý nhân viên</ins>
                <BiLinkExternal size={14} className="ml-1 mt-[2px]" />
              </a>
            </h5>
          </div>
        </div>

        <div>
          <div className="block w-full overflow-x-auto">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div class="items-center justify-between pb-4">
                <div className="pt-0 px-[5px] pb-[6px] relative w-full float-left mt-[5px] clear-both min-h-[1px]">
                  <div className="mx-0 mb-[10px] text-[#31708f] w-[30%]">
                    <select
                      name="service"
                      id="service"
                      className="transition-all leading-[30px] w-full h-[34px] pt-[6px] pb-[7px] px-[12px] block text-[14px] bg-white border border-solid border-[#dde2e8] shadow-sm"
                    >
                      <option value="5">Thống kê theo</option>
                      <option value="4">Hàng gửi tại điểm giao dịch</option>
                      <option value="3">Hàng nhận tại điểm giao dịch</option>
                      <option value="2">Hàng đi tại điểm tập kết</option>
                      <option value="1">Hàng đến tại điểm tập kết</option>
                    </select>
                  </div>
                </div>
              </div>

              <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs font-[500] text-white uppercase bg-[#0072bc] ">
                  <tr>
                    <td class="w-[5%] px-6 py-3 border solid border-[#fff]">
                      STT
                    </td>
                    <td class="px-6 py-3 border solid border-[#fff]">
                      Mã đơn hàng
                    </td>
                    <td class="px-6 py-3 border solid border-[#fff]">
                      Tên sản phẩm
                    </td>
                    <td class="px-6 py-3 border solid border-[#fff]">
                      Trạng thái
                    </td>
                    <td class="px-6 py-3 border solid border-[#fff]">
                      Người gửi
                    </td>
                    <td class="px-6 py-3 border solid border-[#fff]">
                      Người nhận
                    </td>
                    <td class="px-6 py-3 border solid border-[#fff]">
                      Giá (VNĐ)
                    </td>
                    <td class="px-6 py-3 border solid border-[#fff]">
                      Phí (VNĐ)
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white hover:bg-gray-50 ">
                    <td class="px-6 py-4 border border-dashed border-[#ddd] font-medium text-gray-900 whitespace-nowrap ">
                      1
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd] font-medium text-gray-900 whitespace-nowrap ">
                      MA0001
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd]">
                      Gấu bông Magic Post
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd]">
                      Đang trên đường vận chuyển
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd]">
                      Nguyễn Văn A
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd]">
                      Trần Văn B
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd]">
                      150000
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd]">
                      18000
                    </td>
                  </tr>

                  <tr class="bg-white hover:bg-gray-50 ">
                    <td class="px-6 py-4 border border-dashed border-[#ddd] font-medium text-gray-900 whitespace-nowrap ">
                      2
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd] font-medium text-gray-900 whitespace-nowrap ">
                      MA0002
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd]">
                      Gấu bông Magic Post
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd]">
                      Đang trên đường vận chuyển
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd]">
                      Nguyễn Văn A
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd]">
                      Trần Văn B
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd]">
                      150000
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd]">
                      18000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatsPage;
