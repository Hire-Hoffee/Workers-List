import React from "react";

import not_found_icon from "../assets/icons/not_found_icon.svg";

function notFoundComponent() {
  return (
    <div className="w-[343px] h-[150px] m-auto mt-40 flex flex-col items-center justify-evenly">
      <img src={not_found_icon} alt="error_icon" className="w-14 h-14" />
      <h2 className="text-[17px] font-semibold">Мы никого не нашли</h2>
      <p className="text-[#97979B]">Попробуй скорректировать запрос</p>
    </div>
  );
}

export default notFoundComponent;
