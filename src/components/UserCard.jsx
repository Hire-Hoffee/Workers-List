import React from "react";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <Link to={`/user/${user.id}`}>
      <div className="w-full h-20 flex items-center">
        <div>
          <img
            src={user.avatarUrl}
            className="w-[72px] h-[72px] rounded-full mr-4"
            alt="user_avatar"
          />
        </div>
        <div>
          <div className="flex space-x-1">
            <h3 className="font-medium">{user.firstName} {user.lastName}</h3>
            <span className="text-[#97979B]">{user.userTag.toLowerCase()}</span>
          </div>
          <p className="text-[13px] text-[#55555C]">{user.position}</p>
        </div>
      </div>
    </Link>
  );
}

export default UserCard;
