import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import { filterPdoructsBySearchValue } from "../../../Helpers/functions";

const Products = ({ products }) => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [list, setList] = useState([]);

  const inputChangeHandler = (e) => {
    setSearchInputValue(e.target.value);
  };
  useEffect(() => {
    setList(filterPdoructsBySearchValue(searchInputValue, products));
  }, [searchInputValue]);

  return (
    <>
      <div className="h-[10%] flex justify-between bg-slate-50 px-4 py-2 rounded-t-xl border-b-[1px] border-slate-200">
        <h1>
          Products &gt; <span>Men's clothing</span> &gt; <span>tshirt</span>
        </h1>
        <input
          className="w-72 px-4 border-[1px] rounded-md outline-none text-md text-gray-500"
          type="search"
          placeholder="Enter Product Name"
          value={searchInputValue}
          onChange={inputChangeHandler}
        />
      </div>
      <ProductsList list={list ? list : products} />
    </>
  );
};

export default Products;
