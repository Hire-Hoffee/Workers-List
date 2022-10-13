import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  changeUsersArray,
  sortUsersAlphabet,
} from "../store/slices/usersSlice";

import UserCard from "../components/UserCard";
import TopAppBarComponent from "../components/UI/TopAppBarComponent";
import LoadingComponent from "../components/LoadingComponent";
import NotFoundComponent from "../components/NotFoundComponent";
import NewYear from "../components/UI/NewYear";

import apiServices from "../api/apiServices";

function MainPage() {
  const usersArray = useSelector((state) => state.users.data);
  const isLoading = useSelector((state) => state.utils.data.isLoading);
  const isFilterBirth = useSelector((state) => state.utils.data.isFilterBirth);
  const isOnline = useSelector((state) => state.utils.data.isOnline);
  const { query } = useParams();
  const updateUsers = useDispatch();

  useEffect(() => {
    (async () => {
      // const result = (await apiServices.dynamicData()).data.items;
      const result = (await apiServices.getSpecificUsers(query)).data.items;
      updateUsers(changeUsersArray(result));
      updateUsers(sortUsersAlphabet());
    })();
  }, [query, isOnline === "online"]);

  return (
    <div className="relative">
      <TopAppBarComponent />

      {isLoading ? (
        <LoadingComponent />
      ) : usersArray.length == 0 ? (
        <NotFoundComponent />
      ) : (
        <div className="m-4">
          {usersArray.map((item, index, array) => (
            <div key={item.id}>
              <UserCard user={item} />
              {new Date(
                new Date().getFullYear(),
                array[index]?.birthday.split("-")[1] - 1,
                array[index]?.birthday.split("-")[2]
              ).valueOf() >
                new Date(
                  new Date().getFullYear(),
                  array[index + 1]?.birthday.split("-")[1] - 1,
                  array[index + 1]?.birthday.split("-")[2]
                ).valueOf() && isFilterBirth ? (
                <NewYear />
              ) : (
                false
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MainPage;
