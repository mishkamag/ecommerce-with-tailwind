import React, { useState } from "react";
import Add from "./Add";
import List from "./List";

const Promotions = () => {
  const [addItem, setAddItem] = useState(true);
  return (
    <div className="relative h-full w-full bg-gray-100 rounded-xl ">
      {addItem ? <Add /> : null}
      <div className="w-full h-[10%] flex justify-between items-center  rounded-t-xl px-4">
        <h1 className="text-2xl ">Active Promotions</h1>
        <button>Add Promotion</button>
        <button>Ended Promotions</button>
      </div>
      <List />
    </div>
  );
};

export default Promotions;
