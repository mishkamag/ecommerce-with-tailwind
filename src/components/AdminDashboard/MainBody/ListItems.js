import React, { useContext } from "react";
import Item from "./Item";
import { ProductContext } from "../../../store/ProductContext";

const ListItems = () => {
  const { products } = useContext(ProductContext);
  console.log(products.slice(0, 10));
  return (
    <div className="row-span-10">
      <div className="h-full w-full grid grid-rows-10">
        {products.slice(0, 10).map((item) => (
          <Item product={item} />
        ))}
      </div>
    </div>
  );
};

export default ListItems;
