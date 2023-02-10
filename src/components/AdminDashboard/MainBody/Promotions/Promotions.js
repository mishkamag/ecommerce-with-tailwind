import React from "react";
import List from "./List";

const Promotions = () => {
  return (
    <div className="h-full w-full bg-gray-100 rounded-xl ">
      <div className="w-full h-[10%] flex justify-between items-center  rounded-t-xl px-4">
        <h1 className="text-2xl ">Active Promotions</h1>
      </div>
      <List />
    </div>
  );
};

export default Promotions;
