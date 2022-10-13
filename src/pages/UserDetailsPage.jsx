import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import parseNumber from "libphonenumber-js";

import LoadingUserComponent from "../components/LoadingUserComponent";

import star_icon from "../assets/icons/star_icon.svg";
import phone_icon from "../assets/icons/phone_icon.svg";
import arrow_back_icon from "../assets/icons/arrow_back_icon.svg";

import apiServices from "../api/apiServices";

function UserDetailsPage() {
  const [user, setUser] = useState({});
  const usersArray = useSelector((state) => state.users.data);
  const isLoading = useSelector((state) => state.utils.data.isLoading);
  const { user_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (usersArray.length === 0) {
        const result = (await apiServices.getAllUsers()).data.items;
        const userArray = result.filter((item) => item.id === user_id);
        setUser(userArray[0]);
        return;
      }
      setUser(usersArray.filter((item) => item.id === user_id)[0]);
      return;
    })();
  }, [user_id]);

  return (
    <>
      {isLoading ? (
        <LoadingUserComponent />
      ) : (
        <div>
          <div className="h-[280px] bg-[#F7F7F8] flex items-end justify-center">
            <button className="absolute top-7 left-8">
              <img
                src={arrow_back_icon}
                alt="arrow_back_icon"
                onClick={() => navigate(-1)}
              />
            </button>

            <div className="mb-8 flex flex-col justify-between items-center h-[184px]">
              <img
                src={user.avatarUrl}
                alt="user_avatar"
                className="rounded-full w-[104px] h-[104px]"
              />
              <div className="flex items-center">
                <h1 className="font-bold text-2xl">
                  {user.firstName} {user.lastName}
                </h1>
                <span className="text-[17px] ml-1 text-[#97979B]">
                  {user.userTag?.toLowerCase()}
                </span>
              </div>
              <p className="text-[13px] text-[#55555C]">{user.position}</p>
            </div>
          </div>

          <div className="mt-2">
            <div className="w-full h-[60px] mb-[6px] flex justify-between items-center px-4">
              <div className="font-medium">
                <div className="flex">
                  <img src={star_icon} alt="star_icon" className="mr-[14px]" />
                  <p>
                    {new Date(user.birthday).toLocaleString("ru", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[#97979B]">
                  {new Date().getFullYear() -
                    new Date(user.birthday).getFullYear()}{" "}
                  лет
                </p>
              </div>
            </div>

            <div className="w-full h-[60px] mb-[6px] px-4 flex items-center">
              <div className="flex font-medium">
                <img src={phone_icon} alt="phone_icon" className="mr-[14px]" />
                <p>
                  <a
                    href={
                      "tel:" + (user.phone
                        ? parseNumber(user.phone).formatInternational()
                        : "")
                    }
                  >
                    {user.phone
                      ? parseNumber(user.phone).formatInternational()
                      : ""}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserDetailsPage;
