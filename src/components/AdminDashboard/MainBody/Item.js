import React from "react";
import { deleteItem, modifyString } from "../../../Helpers/functions";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

const Item = ({ product }) => {
  const img_url = product.image;
  const backgroundIMG = {
    backgroundImage: `url("${product.image}")`,
    backgroundSize: "cover",
    backgroundPositioc: "center",
  };

  return (
    <div className="relative w-full h-full grid grid-cols-5 text-sm text-[#111827] border-2 cursor-pointer rounded-sm bg-slate-50 hover:bg-green-200 border-slate-200 mt-2 duration-150">
      <div className="flex items-center">
        <div style={backgroundIMG} className="w-7 h-7 mr-4" />
        <span>{modifyString(product.title)}</span>
      </div>
      <span className="my-auto">{modifyString(product.title)}</span>
      <span className="my-auto">{product.category}</span>
      <span className="my-auto">{product.price}</span>
      <span className="my-auto">{product.description.slice(0, 10)}</span>
      <div className="absolute right-4 top-[50%] -translate-y-1/2 flex">
        <button className="text-lg hover:text-xl hover:text-yellow-500 mr-2">
          <AiFillEdit />
        </button>
        <button
          type="button"
          className="text-lg hover:text-xl hover:text-red-700"
          onClick={() => deleteItem(product)}
        >
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
};

export default Item;
