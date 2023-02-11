import React from "react";
import { deleteItem } from "../../../../Helpers/functions";

const ListItem = ({ promotion }) => {
  const backgroundIMG = {
    backgroundImage: `url("${promotion.image}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <li className="h-3/5 w-[45%] mr-4 mb-8  rounded bg-white hover:bg-slate-200 duration-150 cursor-pointer">
      <div className="h-[10%] flex justify-between items-center text-lg font-semibold italic py-4 px-2">
        <span>{promotion.title}</span>
        <button
          className="hover:text-red-500"
          onClick={() => deleteItem("offers", promotion)}
        >
          Delete
        </button>
      </div>
      <div style={backgroundIMG} className="w-full h-[90%] rounded" />
    </li>
  );
};

export default ListItem;
