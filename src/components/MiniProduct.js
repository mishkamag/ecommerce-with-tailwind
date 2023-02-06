import React from "react";
import { Link } from "react-router-dom";

const MiniProduct = ({ product, setSearchTerm }) => {
  const { id, image, title } = product;

  return (
    <div>
      <button
        className="w-full  border-b"
        type="button"
        onClick={() => {
          setSearchTerm("");
        }}
      >
        <Link to={`/product/${id}`}>
          <div className="flex justify-between items-center py-2 hover:underline">
            <div className="w-[80%]">{title}</div>
            <div>
              <img className="w-[50px] h-auto" src={image} alt="" />
            </div>
          </div>
        </Link>
      </button>
    </div>
  );
};

export default MiniProduct;
