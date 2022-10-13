import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeShowFilter } from "../../store/slices/utilsSlice";
import { usersSearching } from "../../store/slices/usersSlice";

import search_icon from "../../assets/icons/search_icon.svg";
import search_icon_active from "../../assets/icons/search_icon_active.svg";
import filter_icon from "../../assets/icons/filter_icon.svg";
import filter_icon_active from "../../assets/icons/filter_icon_active.svg";

function InputComponent() {
  const isFilterBirth = useSelector((state) => state.utils.data.isFilterBirth);
  const [activeSearch, setActiveSearch] = useState("");
  const [input, setInput] = useState("");
  const updateShowFilter = useDispatch();
  const updateUsers = useDispatch();

  return (
    <div className="mx-4 relative mt-[50px] sm:mt-0">
      <div className="flex absolute inset-y-0 items-center pl-3">
        <img src={search_icon} alt="search_icon" />
      </div>
      <div
        className={
          "flex absolute inset-y-0 items-center pl-3 " +
          (activeSearch === "" ? "hidden" : "")
        }
      >
        <img src={search_icon_active} alt="search_icon" />
      </div>
      <div
        className="flex absolute inset-y-0 right-0 items-center pr-3 cursor-pointer"
        onClick={() => {
          updateShowFilter(changeShowFilter(true));
        }}
      >
        {isFilterBirth ? (
          <img src={filter_icon_active} alt="filter_icon_active" />
        ) : (
          <img src={filter_icon} alt="filter_icon" />
        )}
      </div>
      <input
        value={input}
        onInput={(e) => {
          setInput(e.target.value);
          updateUsers(usersSearching(input));
        }}
        type="text"
        className={
          "rounded-2xl h-10 bg-[#F7F7F8] w-full pl-11 font-medium text-[15px] focus:outline-none caret-custom-purple " +
          activeSearch
        }
        placeholder="Введи имя, тег, почту..."
        onFocus={() => setActiveSearch("active")}
        onBlur={() => setActiveSearch("")}
      />
    </div>
  );
}

export default InputComponent;
