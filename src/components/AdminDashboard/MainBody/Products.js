import React from "react";
import ProductsList from "./ProductsList";

const Products = ({ products }) => {
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
        />
      </div>
      <ProductsList />
    </>
  );
};

export default Products;
