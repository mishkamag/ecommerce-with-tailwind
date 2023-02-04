import React, { useContext } from "react";
import Item from "./Item";
import { ProductContext } from "../../../store/ProductContext";
import uniqid from "uniqid";

const ListItems = ({ list }) => {
  return (
    <div className="row-span-10">
      <div className="h-full w-full grid grid-rows-10">
        {list?.slice(0, 10).map((item) => (
          <Item product={item} key={uniqid()} />
        ))}
      </div>
    </div>
  );
};

export default ListItems;
