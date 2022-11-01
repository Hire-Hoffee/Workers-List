import React from "react";
import { useDispatch } from "react-redux";

import { changeShowFilter, changeShowYear } from "../store/slices/utilsSlice";
import { sortUsersAlphabet, sortUsersBirth } from "../store/slices/usersSlice";

import exit_icon from "../assets/icons/exit_icon.svg";

function FilterComponent({ isShown }) {
  const updateReduxState = useDispatch();

  return (
    <div
      className={
        "absolute bg-[#050510] w-full h-full z-[9999] bg-opacity-[0.16] overflow-hidden " +
        (isShown ? "flex" : "hidden")
      }
    >
      <div className="absolute w-screen h-screen flex">
        <div className="bg-white sm:w-[373px] sm:h-[192px] sm:rounded-[20px] rounded-t-[20px] w-full h-[218px] m-auto bottom-0 flex flex-col justify-between items-center absolute sm:relative">
          <hr className="border-2 border-[#C3C3C6] rounded-full bg-[#C3C3C6] w-14 absolute top-3 sm:hidden" />
          <button
            className="absolute top-6 right-6 hidden sm:block"
            onClick={() => {
              updateReduxState(changeShowFilter(false));
            }}
          >
            <img src={exit_icon} alt="exit_icon" />
          </button>
          <div className="m-6 text-xl font-semibold">
            <h1>Сортировка</h1>
          </div>

          <div className="flex flex-col items-start justify-around px-4 pb-2 h-[120px] w-full">
            <div className="flex flex-row-reverse items-center">
              <label className="ml-[14px]" htmlFor="alphabet">
                По алфавиту
              </label>
              <input
                type="radio"
                className="h-5 w-5 accent-custom-purple text-red-700 "
                name="filter"
                id="alphabet"
                defaultChecked
                onChange={() => {
                  updateReduxState(changeShowYear(false));
                  updateReduxState(changeShowFilter(false));
                  updateReduxState(sortUsersAlphabet());
                }}
              />
            </div>
            <div className="flex flex-row-reverse">
              <label className="ml-[14px]" htmlFor="birth">
                По дню рождения
              </label>
              <input
                type="radio"
                className="h-5 w-5 accent-custom-purple"
                name="filter"
                id="birth"
                onChange={() => {
                  updateReduxState(changeShowYear(true));
                  updateReduxState(changeShowFilter(false));
                  updateReduxState(sortUsersBirth());
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterComponent;
