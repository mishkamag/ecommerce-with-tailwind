import React from "react";
import { Link } from "react-router-dom";

const MiniProduct = ({ product }) => {
  const { id, image, title } = product;

  return (
    <div>
      <Link to={`/product/${id}`}>
        <div className="w-full flex justify-between">
          <span>{title.slice(0.8)}</span>
          <img className="w-[30px] h-auto" src={image} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default MiniProduct;
