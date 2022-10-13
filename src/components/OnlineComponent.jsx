import React from "react";

function OnlineComponent() {
  return (
    <div className="absolute w-full h-full bg-[#6534FF] inset-0 z-10 text-white">
      <div className="mx-6 mt-4 sm:block hidden">
        <h1 className="font-bold text-2xl mb-5">Поиск</h1>
        <p>Секундочку, гружусь...</p>
      </div>
    </div>
  );
}

export default OnlineComponent;
