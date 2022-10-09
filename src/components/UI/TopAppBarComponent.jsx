import React from "react";

import InputComponent from "./InputComponent";
import NavigationLinks from "./NavigationLinks";

function TopAppBarComponent() {
  return (
    <div className="w-full sm:h-[152px] h-[140px] flex flex-col justify-between">
      <div className="mx-6 mt-4 sm:block hidden">
        <h1 className="font-bold text-2xl">Поиск</h1>
      </div>

      <InputComponent />

      <NavigationLinks />
    </div>
  );
}

export default TopAppBarComponent;
