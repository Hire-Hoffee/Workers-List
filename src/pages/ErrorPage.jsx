import React from "react";

import TopAppBarComponent from "../components/UI/TopAppBarComponent";
import error_icon from "../assets/icons/error_icon.svg";

function ErrorPage() {
  return (
    <div>
      <TopAppBarComponent />

      <div className="absolute w-[343px] h-[150px] m-auto inset-0 flex flex-col items-center justify-between">
        <img src={error_icon} alt="error_icon" className="w-14 h-14" />
        <h2 className="text-[17px] font-semibold">
          Какой-то сверхразум все сломал
        </h2>
        <p className="text-[#97979B]">Постараемся быстро починить</p>
        <a href="/main" className="text-custom-purple font-semibold">
          Попробовать снова
        </a>
      </div>
    </div>
  );
}

export default ErrorPage;
