import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import UserCard from "../components/UserCard";
import TopAppBarComponent from "../components/UI/TopAppBarComponent";
import LoadingComponent from "../components/LoadingComponent";

import apiServices from "../api/apiServices";

function MainPage() {
  const [users, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { query } = useParams();

  useEffect(() => {
    (async () => {
      setLoading(true);
      setData((await apiServices.getSpecificUsers(query)).data.items);
      setLoading(false);
    })();
  }, [query]);

  return (
    <div className="relative">
      <TopAppBarComponent />

      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className="m-4">
          {users.map((item) => (
            <UserCard user={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MainPage;
