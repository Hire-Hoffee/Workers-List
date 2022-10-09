import React from "react";
import { NavLink } from "react-router-dom";

function NavigationLinks() {
  return (
    <div>
      <ul className="flex justify-start ml-4 h-9 items-center font-medium text-[15px] text-[#97979B] overflow-x-auto">
        <li className="px-3 h-full flex items-center">
          <NavLink to={"/main/all"}>Все</NavLink>
        </li>
        <li className="px-3 h-full flex items-center">
          <NavLink to={"/main/design"}>Дизайн</NavLink>
        </li>
        <li className="px-3 h-full flex items-center">
          <NavLink to={"/main/analytics"}>Аналитика</NavLink>
        </li>
        <li className="px-3 h-full flex items-center">
          <NavLink to={"/main/management"}>Managers</NavLink>
        </li>
        <li className="px-3 h-full flex items-center">
          <NavLink to={"/main/ios"}>iOS</NavLink>
        </li>
        <li className="px-3 h-full flex items-center">
          <NavLink to={"/main/android"}>Android</NavLink>
        </li>
        <li className="px-3 h-full flex items-center">
          <NavLink to={"/main/frontend"}>Frontend</NavLink>
        </li>
        <li className="px-3 h-full flex items-center">
          <NavLink to={"/main/qa"}>QA</NavLink>
        </li>
        <li className="px-3 h-full flex items-center">
          <NavLink to={"/main/back_office"}>Бэк-офис</NavLink>
        </li>
        <li className="px-3 h-full flex items-center">
          <NavLink to={"/main/hr"}>HR</NavLink>
        </li>
        <li className="px-3 h-full flex items-center">
          <NavLink to={"/main/pr"}>PR</NavLink>
        </li>
        <li className="px-3 h-full flex items-center">
          <NavLink to={"/main/backend"}>Backend</NavLink>
        </li>
        <li className="px-3 h-full flex items-center">
          <NavLink to={"/main/support"}>Техподдержка</NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default NavigationLinks;
