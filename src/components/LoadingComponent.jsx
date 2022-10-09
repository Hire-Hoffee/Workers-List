import React from "react";
import LoadingCard from "./LoadingCard";

function LoadingComponent() {
  return (
    <div>
      <div className="m-4">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    </div>
  );
}

export default LoadingComponent;
