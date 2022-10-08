import React from "react";

import LoadingCard from "../components/LoadingCard";
import UserCard from "../components/UserCard";
import TopAppBarComponent from "../components/UI/TopAppBarComponent";

function MainPage() {
  return (
    <div>
      <TopAppBarComponent />
      
      <div className="m-4">
        <UserCard />
        <LoadingCard />
      </div>
    </div>
  );
}

export default MainPage;
