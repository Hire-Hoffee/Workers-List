import React from "react";

function UserCard({ user }) {
  return (
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
  );
}

export default UserCard;
