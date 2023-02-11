import React from "react";

const ListLayout = ({ title, children }) => {
  return (
    <div className="h-full w-full ">
      <ul className="overflow-y-scroll list-none flex justify-around flex-wrap h-[90%] rounded-b-xl">
        {children}
      </ul>
    </div>
  );
};

export default ListLayout;
