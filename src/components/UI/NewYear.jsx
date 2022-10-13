import React from "react";

function NewYear() {
  return (
    <div className="w-full h-[68px] text-[15px] text-[#C3C3C6] flex items-center justify-between">
      <hr className="w-full mr-10" />
      <h1>{new Date().getFullYear() + 1}</h1>
      <hr className="w-full ml-10" />
    </div>
  );
}

export default NewYear;
