import React from "react";
import ListHeader from "./ListHeader";
import ListItems from "./ListItems";
import ListPagination from "./ListPagination";

const ProductsList = () => {
  return (
    <div className="h-[90%] rounded-b-xl">
      <div className="h-full w-full px-4 ">
        <ListHeader />
        <div className="h-[93%] w-full rounded-b-xl grid grid-rows-12">
          <ListItems products={[]} />
          <ListPagination />
        </div>
      </div>
    </div>
  );
};

export default ProductsList;

/* 
{
category:"men's clothing"
description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
id:1
image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
price:109.95
title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
} */
