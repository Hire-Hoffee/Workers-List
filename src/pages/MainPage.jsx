import React from "react";

import UserCard from "../components/UserCard";
import TopAppBarComponent from "../components/UI/TopAppBarComponent";

function MainPage() {
  return (
    <div>
      <TopAppBarComponent />
      
      <div className="m-4">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}

export default MainPage;
