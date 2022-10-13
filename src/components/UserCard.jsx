import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function UserCard({ user }) {
  const isFilterBirth = useSelector((state) => state.utils.data.isFilterBirth);

  return (
    <Link to={`/user/${user.id}`}>
      <div className="w-full h-20 flex items-center relative">
        <div className="absolute right-0 text-[15px] font-normal text-[#55555C]">
          {isFilterBirth ? new Date(user.birthday).toLocaleString("ru", {
            month: "short",
            day: "numeric",
          }) : false}
        </div>
        <div>
          <img
            src={user.avatarUrl}
            className="w-[72px] h-[72px] rounded-full mr-4"
            alt="user_avatar"
          />
        </div>
        <div>
          <div className="flex space-x-1">
            <h3 className="font-medium">
              {user.firstName} {user.lastName}
            </h3>
            <span className="text-[#97979B]">{user.userTag.toLowerCase()}</span>
          </div>
          <p className="text-[13px] text-[#55555C]">{user.position}</p>
        </div>
      </div>
    </Link>
  );
}

export default UserCard;
