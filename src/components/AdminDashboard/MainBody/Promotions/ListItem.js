import React from "react";

const ListItem = ({ imgUrl }) => {
  const backgroundIMG = {
    backgroundImage: `url("${imgUrl}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <li className="h-3/5 w-[45%] mr-4 mb-8  rounded bg-white hover:bg-slate-200 duration-150 cursor-pointer">
      <div className="h-[10%] flex justify-between items-center text-lg font-semibold italic py-4 px-2">
        <span>Some promotiion header here</span>
        <button>Delete</button>
      </div>
      <div style={backgroundIMG} className="w-full h-[90%] rounded" />
    </li>
  );
};

export default ListItem;
