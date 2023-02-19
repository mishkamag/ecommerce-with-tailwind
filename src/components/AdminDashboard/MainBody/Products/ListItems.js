import React from "react";
import Item from "./Item";
import uniqid from "uniqid";

const ListItems = ({ list, currentPage }) => {
  return (
    <div className="row-span-10">
      <div className="h-full w-full grid grid-rows-10">
        {list?.slice((currentPage - 1) * 10, currentPage * 10).map((item) => (
          <Item product={item} key={uniqid()} />
        ))}
      </div>
    </div>
  );
};

export default ListItems;
