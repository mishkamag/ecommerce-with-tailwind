import React from "react";
import { Link } from "react-router-dom";

const MiniProduct = ({ product, setSearchTerm }) => {
  const { id, image, title } = product;

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setSearchTerm("");
        }}
      >
        <Link to={`/product/${id}`}>
          <div className="w-full flex justify-between">
            <span>{title}</span>
            <img className="w-[30px] h-auto" src={image} alt="" />
          </div>
        </Link>
      </button>
    </div>
  );
};

export default MiniProduct;
