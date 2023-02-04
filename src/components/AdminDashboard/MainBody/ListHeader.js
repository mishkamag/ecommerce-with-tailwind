import React from "react";

const ListHeader = () => {
  return (
    <div className="h-[7%] grid grid-cols-5 py-2 border-b-[1px] border-slate-200 text-sm text-zinc-600 font-mono font-bold text-lg">
      <span>Image</span>
      <span>Title</span>
      <span>Category</span>
      <span>Price</span>
      <span>Description</span>
    </div>
  );
};

export default ListHeader;
