import React from "react";
import { useSelector } from "react-redux";

import InputComponent from "./InputComponent";
import NavigationLinks from "./NavigationLinks";
import FilterComponent from "../FilterComponent";

function TopAppBarComponent() {
  const isOpenFilter = useSelector((state) => state.utils.data.isOpenFilter);

  return (
    <div className="w-full sm:h-[152px] h-[140px] flex flex-col justify-between">
      <div className="relative w-full h-full">
        <div className="mx-6 my-4 sm:block hidden">
          <h1 className="font-bold text-2xl">Поиск</h1>
        </div>

        <InputComponent />
      </div>

      {isOpenFilter && <FilterComponent />}

      <NavigationLinks />
    </div>
  );
}

export default TopAppBarComponent;
