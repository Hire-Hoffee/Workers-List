import React from "react";

function OfflineComponent() {
  return (
    <div className="absolute sm:inset-0 right-4 left-4 sm:h-[110px] top-[85vh] bg-[#F44336] sm:rounded-none rounded-xl py-[14px] px-4 text-white z-50">
      <h1 className="font-bold text-2xl mb-5 sm:block hidden">Поиск</h1>
      <p>Не могу обновить данные. Проверь соединение с интернетом.</p>
    </div>
  );
}

export default OfflineComponent;
