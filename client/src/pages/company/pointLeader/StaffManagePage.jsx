import React from "react";
import PointLeaderHeader from "../../../components/Company/Layout/PointLeaderHeader";
import { BiLinkExternal } from "react-icons/bi";
import { FaRegListAlt } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const StaffManagePage = () => {
  return (
    <div>
      <PointLeaderHeader />
      <div className=" sm:mx-[50px] sm:px-[10px] sm:py-5 sm:min-h-[800px] min-h-[1000px] py-5 px-[10px]">
        {/* Title */}
        <div className="w-full h-[65px] px-[10px] mb-3">
          <div className="w-full float-left block text-[#26B99A]">
            <h3 className="mx-[9px] text-[24px] flex font-[500]">
              <FaRegListAlt size={24} className="mr-2 mt-[7px]" />
              Quản lý tài khoản nhân viên
            </h3>
            <h5 className="text-[14px] font-[500] leading-[18px] ml-11">
              <a
                href="/pointleader/thong-ke-hang"
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
              <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs font-[500] text-white uppercase bg-[#0072bc] ">
                  <tr>
                    <td class="w-[5%] px-6 py-3 border solid border-[#fff]">
                      STT
                    </td>
                    <td class="px-6 py-3 border solid border-[#fff]">Họ tên</td>
                    <td class="px-6 py-3 border solid border-[#fff]">Email</td>
                    <td class="px-6 py-3 border solid border-[#fff]">
                      Số điện thoại
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
                      Vũ Văn Đức
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd]">
                      vuvanduc@gmail.com
                    </td>
                    <td class="px-6 py-4 border border-dashed border-[#ddd]">
                      0355566777
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

export default StaffManagePage;
