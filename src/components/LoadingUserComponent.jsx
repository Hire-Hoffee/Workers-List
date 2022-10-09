import React from "react";

function LoadingUserComponent() {
  return (
    <div>
      <div className="h-[280px] bg-[#fafafc] flex items-end justify-center">
        <div className="mb-8 flex flex-col justify-between items-center h-[184px]">
          <div className="rounded-full w-[104px] h-[104px] bg-gradient-to-r from-[#F3F3F6] to-[#FAFAFA] animate-pulse"></div>

          <div className="flex items-center rounded-full w-48 bg-gradient-to-r from-[#F3F3F6] to-[#FAFAFA] animate-pulse"></div>
          <div className="flex items-center rounded-full w-36 h-6 bg-gradient-to-r from-[#F3F3F6] to-[#FAFAFA] animate-pulse"></div>
        </div>
      </div>

      <div className="mt-2">
        <div className="w-full h-[60px] mb-[6px] flex justify-between items-center px-4">
          <div className="font-medium">
            <div className="flex">
              <div className="rounded-full w-52 h-6 bg-gradient-to-r from-[#F3F3F6] to-[#FAFAFA] animate-pulse"></div>
            </div>
          </div>
          <div>
            <div className="rounded-full w-16 h-6 bg-gradient-to-r from-[#F3F3F6] to-[#FAFAFA] animate-pulse"></div>
          </div>
        </div>

        <div className="w-full h-[60px] mb-[6px] px-4 flex items-center">
          <div className="flex font-medium">
            <div className="rounded-full w-52 h-6 bg-gradient-to-r from-[#F3F3F6] to-[#FAFAFA] animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingUserComponent;
