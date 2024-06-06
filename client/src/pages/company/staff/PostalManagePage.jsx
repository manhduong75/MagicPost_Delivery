import React from "react";
import StaffHeader from "../../../components/Company/Layout/StaffHeader.jsx";
import { BiLinkExternal } from "react-icons/bi";
import { FaRegListAlt } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
const PostalManagePage = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <StaffHeader />
      <div className=" sm:mx-[50px] sm:px-[10px] sm:py-5 sm:min-h-[800px] min-h-[1000px] py-5 px-[10px]">
        {/* Title */}
        <div className="w-full h-[65px] px-[10px] mb-3">
          <div className="w-full float-left block text-[#26B99A]">
            <h3 className="mx-[9px] text-[24px] flex font-[500]">
              <FaRegListAlt size={24} className="mr-2 mt-[7px]" />
              Quản lý bưu gửi
            </h3>
            <h5 className="text-[14px] font-[500] leading-[18px] ml-11">
              <a href="/" className="flex text-[#31708f]">
                <ins>Tạo bưu gửi</ins>
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
                    placeholder="Nhập mã đơn hàng"
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
                      Mã đơn hàng
                    </td>
                    <td class="px-6 py-3 border solid border-[#fff]">
                      Tên sản phẩm
                    </td>
                    <td class="px-6 py-3 border solid border-[#fff]">
                      Trạng thái
                    </td>
                    <td class="px-6 py-3 border solid border-[#fff]">
                      Phí (VNĐ)
                    </td>
                    <td class="w-[5%] px-6 py-3 border solid border-[#fff]">
                      Xem
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
                      MA0001
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd]">
                      Gấu bông Magic Post
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd]">
                      Đang trên đường vận chuyển
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd]">
                      18000
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd]">
                      <a
                        href="/staff/cap-nhat-trang-thai-don-hang/md0002"
                        className="font-medium text-blue-600  hover:underline cursor-pointer"
                      >
                        <MdPreview size={20} />
                      </a>
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd] ">
                      <span className="font-medium text-red-600 hover:underline cursor-pointer">
                        <RiDeleteBin5Line size={20} onClick={() => {}} />
                      </span>
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
                      18000
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd]">
                      <span className="font-medium text-blue-600  hover:underline cursor-pointer">
                        <MdPreview size={20} onClick={() => {}} />
                      </span>
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

export default PostalManagePage;
