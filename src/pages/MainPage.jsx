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
import OfflineComponent from "../components/OfflineComponent";
import OnlineComponent from "../components/OnlineComponent";

import apiServices from "../api/apiServices";

function MainPage() {
  const usersArray = useSelector((state) => state.users.data);
  const { isLoading, isFilterBirth, isOnline } = useSelector(
    (state) => state.utils.data
  );
  const { query } = useParams();
  const updateUsers = useDispatch();

  useEffect(() => {
    (async () => {
      // const result = (await apiServices.dynamicData()).data.items; // Request for dynamic generated users data
      const result = (await apiServices.getSpecificUsers(query)).data.items;
      updateUsers(changeUsersArray(result));
      updateUsers(sortUsersAlphabet());
    })();
  }, [query, isOnline === "online"]);

  function isNewYearLine(index, array) {
    const year = new Date().getFullYear();
    const month = array[index]?.birthday.split("-")[1] - 1;
    const day = array[index]?.birthday.split("-")[2];
    const nextMonth = array[index + 1]?.birthday.split("-")[1] - 1;
    const nextDay = array[index + 1]?.birthday.split("-")[2];

    return (
      new Date(year, month, day).valueOf() >
        new Date(year, nextMonth, nextDay).valueOf() && isFilterBirth
    );
  }

  return (
    <div className="relative">
      {isOnline === "offline" ? (
        <OfflineComponent />
      ) : isOnline === "online" && isLoading ? (
        <OnlineComponent />
      ) : (
        false
      )}

      <TopAppBarComponent />

      {isLoading ? (
        <LoadingComponent />
      ) : usersArray.length === 0 ? (
        <NotFoundComponent />
      ) : (
        <div className="m-4">
          {usersArray.map((item, index, array) => (
            <div key={item.id}>
              <UserCard user={item} />
              {isNewYearLine(index, array) ? <NewYear /> : false}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MainPage;
