import React from "react";

import star_icon from "../assets/icons/star_icon.svg";
import phone_icon from "../assets/icons/phone_icon.svg";

function UserDetailsPage() {
  return (
    <div>
      <div className="h-[280px] bg-[#F7F7F8] flex items-end justify-center">
        <div className="mb-8 flex flex-col justify-between items-center h-[184px]">
          <img
            src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/645.jpg"
            alt="user_avatar"
            className="rounded-full w-[104px] h-[104px]"
          />
          <div className="flex items-center">
            <h1 className="font-bold text-2xl">Алиса Иванова</h1>
            <span className="text-[17px] ml-1 text-[#97979B]">al</span>
          </div>
          <p className="text-[13px] text-[#55555C]">Designer</p>
        </div>
      </div>

      <div className="mt-2">
        <div className="w-full h-[60px] mb-[6px] flex justify-between items-center px-4">
          <div className="font-medium">
            <div className="flex">
              <img src={star_icon} alt="star_icon" className="mr-[14px]" />
              <p>5 июня 1996</p>
            </div>
          </div>
          <div>
            <p className="text-[#97979B]">24 года</p>
          </div>
        </div>

        <div className="w-full h-[60px] mb-[6px] px-4 flex items-center">
          <div className="flex font-medium">
            <img src={phone_icon} alt="phone_icon" className="mr-[14px]" />
            <p>+7 (999) 900 90 90</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsPage;
