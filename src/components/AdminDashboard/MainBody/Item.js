import React from "react";

const Item = ({ product }) => {
  return (
    <div className="w-full h-full grid grid-cols-5">
      <h1>Image</h1>
      <h1>{product.title}</h1>
      <h1>{product.category}</h1>
      <h1>{product.price}</h1>
      <h1>{product.description.slice(0, 10)}</h1>
    </div>
  );
};

export default Item;
