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

import apiServices from "../api/apiServices";

function MainPage() {
  const usersArray = useSelector((state) => state.users.data);
  const isLoading = useSelector((state) => state.utils.data.isLoading);
  const { query } = useParams();
  const updateUsers = useDispatch();

  useEffect(() => {
    (async () => {
      const result = (await apiServices.getSpecificUsers(query)).data.items;
      updateUsers(changeUsersArray(result));
      updateUsers(sortUsersAlphabet());
    })();
  }, [query]);

  return (
    <div className="relative">
      <TopAppBarComponent />

      {isLoading ? (
        <LoadingComponent />
      ) : usersArray.length == 0 ? (
        <NotFoundComponent />
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
