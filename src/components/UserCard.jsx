import React from "react";

function UserCard() {
  return (
    <div className="w-full h-20 flex items-center">
      <div>
        <img
          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/871.jpg"
          className="w-[72px] h-[72px] rounded-full mr-4"
          alt="user_avatar"
        />
      </div>
      <div>
        <div className="flex space-x-1">
          <h3 className="font-medium">Алексей Миногаров</h3>
          <span className="text-[#97979B]">mi</span>
        </div>
        <p className="text-[13px] text-[#55555C]">Analyst</p>
      </div>
    </div>
  );
}

export default UserCard;
