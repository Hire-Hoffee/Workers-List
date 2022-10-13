import React from "react";

function OfflineComponent() {
  return (
    <div className="absolute w-full h-full bg-[#F44336] inset-0 z-10 text-white">
      <div className="mx-6 mt-4 sm:block hidden">
        <h1 className="font-bold text-2xl mb-5">Поиск</h1>
        <p>Не могу обновить данные. Проверь соединение с интернетом.</p>
      </div>
    </div>
  );
}

export default OfflineComponent;
