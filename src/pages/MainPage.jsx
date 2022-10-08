import React from "react";

import LoadingCard from "../components/LoadingCard";
import UserCard from "../components/UserCard";
import TopAppBarComponent from "../components/UI/TopAppBarComponent";

function MainPage() {
  return (
    <div className="relative">
      <TopAppBarComponent />

      <div className="m-4">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <LoadingCard />
      </div>
    </div>
  );
}

export default MainPage;
