import React from "react";
import { useSelector } from "react-redux";

import InputComponent from "./InputComponent";
import NavigationLinks from "./NavigationLinks";
import FilterComponent from "../FilterComponent";
import OfflineComponent from "../OfflineComponent";
import OnlineComponent from "../OnlineComponent";

function TopAppBarComponent() {
  const isOpenFilter = useSelector((state) => state.utils.data.isOpenFilter);
  const isOnline = useSelector((state) => state.utils.data.isOnline);
  const isLoading = useSelector((state) => state.utils.data.isLoading);

  return (
    <div className="w-full sm:h-[152px] h-[140px] flex flex-col justify-between">
      <div className="relative w-full h-full">
        <div className="mx-6 my-4 sm:block hidden">
          <h1 className="font-bold text-2xl">Поиск</h1>
        </div>

        {isOnline === "offline" ? (
          <OfflineComponent />
        ) : isOnline === "online" && isLoading ? (
          <OnlineComponent />
        ) : (
          false
        )}

        <InputComponent />
      </div>

      <FilterComponent isShown={isOpenFilter ? true : false} />

      <NavigationLinks />
    </div>
  );
}

export default TopAppBarComponent;
