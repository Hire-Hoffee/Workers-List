import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { changeUsersArray } from "../store/slices/usersSlice";

import UserCard from "../components/UserCard";
import TopAppBarComponent from "../components/UI/TopAppBarComponent";
import LoadingComponent from "../components/LoadingComponent";

import apiServices from "../api/apiServices";

function MainPage() {
  const usersArray = useSelector((state) => state.users.data);
  const isLoading = useSelector((state) => state.utils.data.isLoading);
  const { query } = useParams();
  const updateUsers = useDispatch();

  useEffect(() => {
    if (usersArray.length === 0) {
      (async () => {
        const result = (await apiServices.getSpecificUsers(query)).data.items;
        updateUsers(changeUsersArray(result));
      })();
    }
  }, [query]);

  return (
    <div className="relative">
      <TopAppBarComponent />
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className="m-4">
          {usersArray.map((item) => (
            <UserCard user={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MainPage;
