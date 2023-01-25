import React, { useContext } from "react";
import { BsEyeFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../store/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const { id, image, category, title, price } = product;

  return (
    <div>
      <div className="border border-gray h-[300px] mb-4 relative overflow-hidden group transition ">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt="title"
            />
          </div>
        </div>
        <div className="absolute top-2 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => {
              addToCart(product, id);
            }}
          >
            <div className="flex justify-center items-center text-white w-8 h-8 bg-[#008ECC] hover:scale-110">
              <AiOutlineShoppingCart className="text-xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-8 h-8 bg-white flex justify-center items-center text-primary drop-shadow-xl hover:scale-110"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>

      <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
      <Link to={`product/${id}`}>
        <h2 className="font-semibold mb-1  ">{title}</h2>
      </Link>
      <div className="font-semibold">$ {price}</div>
    </div>
  );
};

export default Product;
