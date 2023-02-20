import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import { filterPdoructsBySearchValue } from "../../../../Helpers/functions";
import Spinner from "../../../UI components/Spinner";
import AdminBoxHeader from "../../../UI components/AdminBoxHeader";

const Products = ({ products, isLoading }) => {
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
      <AdminBoxHeader>
        <h1>
          Products &gt; <span></span> &gt; <span></span>
        </h1>
        <input
          className="w-72 px-4 border-[1px] rounded-md outline-none text-md text-gray-500"
          type="search"
          placeholder="Enter Product Name"
          value={searchInputValue}
          onChange={inputChangeHandler}
        />
      </AdminBoxHeader>
      {isLoading ? (
        <div className="h-[90%] w-full flex justify-center items-center text-4xl">
          <Spinner />
        </div>
      ) : (
        <ProductsList list={searchInputValue ? list : products} />
      )}
    </>
  );
};

export default Products;
