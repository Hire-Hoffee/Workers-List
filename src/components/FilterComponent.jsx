import React from "react";

import exit_icon from "../assets/icons/exit_icon.svg";

function FilterComponent() {
  return (
    <div className="absolute bg-[#050510] w-screen h-screen z-[9999] bg-opacity-[0.16] flex">
      <div className="w-[373px] h-[192px] bg-white rounded-[20px] m-auto flex flex-col justify-between items-center relative">
        <button className="absolute top-6 right-6">
          <img src={exit_icon} alt="exit_icon" />
        </button>
        <div className="m-6 text-xl font-semibold">
          <h1>Сортировка</h1>
        </div>

        <div className="flex flex-col items-start justify-around px-4 pb-2 h-[120px] w-full">
          <div className="flex flex-row-reverse items-center">
            <label className="ml-[14px]" for="alphabet">
              По алфавиту
            </label>
            <input
              type="radio"
              className="h-5 w-5 accent-custom-purple text-red-700 "
              name="filter"
              id="alphabet"
            />
          </div>
          <div className="flex flex-row-reverse">
            <label className="ml-[14px]" for="birth">
              По дню рождения
            </label>
            <input
              type="radio"
              className="h-5 w-5 accent-custom-purple"
              name="filter"
              id="birth"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterComponent;
