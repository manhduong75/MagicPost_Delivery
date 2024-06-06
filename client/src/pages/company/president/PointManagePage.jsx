import React from "react";
import PresidentHeader from "../../../components/Company/Layout/PresidentHeader";
import { BiLinkExternal } from "react-icons/bi";
import { FaRegListAlt } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
const PointManagePage = () => {
  return (
    <div>
      <PresidentHeader />
      <div className=" sm:mx-[50px] sm:px-[10px] sm:py-5 sm:min-h-[800px] min-h-[1000px] py-5 px-[10px]">
        {/* Title */}
        <div className="w-full h-[65px] px-[10px] mb-3">
          <div className="w-full float-left block text-[#26B99A]">
            <h3 className="mx-[9px] text-[24px] flex font-[500]">
              <FaRegListAlt size={24} className="mr-2 mt-[7px]" />
              Hệ thống điểm
            </h3>
            <h5 className="text-[14px] font-[500] leading-[18px] ml-11">
              <a
                href="/president/thong-ke-hang"
                className="flex text-[#31708f]"
              >
                <ins>Thống kê hàng</ins>
                <BiLinkExternal size={14} className="ml-1 mt-[2px]" />
              </a>
            </h5>
          </div>
        </div>

        <div>
          <div className="block w-full overflow-x-auto">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div class="items-center justify-between pb-4">
                <label for="table-search" class="sr-only">
                  Search
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      class="w-5 h-5 text-gray-500 "
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="table-search"
                    class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 "
                    placeholder="Nhập mã điểm"
                  />
                </div>
              </div>

              <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs font-[500] text-white uppercase bg-[#0072bc] ">
                  <tr>
                    <td class="w-[5%] px-6 py-3 border solid border-[#fff]">
                      STT
                    </td>
                    <td class="px-6 py-3 border solid border-[#fff]">
                      Mã điểm
                    </td>
                    <td class="px-6 py-3 border solid border-[#fff]">
                      Loại điểm
                    </td>
                    <td class="px-6 py-3 border solid border-[#fff]">
                      Địa chỉ
                    </td>
                    <td class="w-[5%] px-6 py-3 border solid border-[#fff]">
                      Xóa
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white hover:bg-gray-50 ">
                    <td class="px-6 py-4 border border-dashed border-[#ddd] font-medium text-gray-900 whitespace-nowrap ">
                      1
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd] font-medium text-gray-900 whitespace-nowrap ">
                      P0001
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd]">
                      Điểm giao dịch
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd]">
                      144 Xuân Thủy, Cầu Giấy, Hà Nội
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd] ">
                      <span className="font-medium text-red-600 hover:underline cursor-pointer">
                        <RiDeleteBin5Line size={20} onClick={() => {}} />
                      </span>
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

export default PointManagePage;
