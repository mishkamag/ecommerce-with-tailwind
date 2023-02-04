import React from "react";

const ListPagination = ({ numberOfItems }) => {
  return (
    <div className="h-12 flex items-center rounded-b-xl text-xs border-2 border-red-600">
      <div className="h-full w-full flex justify-between items-center px-2">
        <div className="w-1/5">
          <p className="my-auto">{`1 -- 13 of 200 results`}</p>
        </div>
        <div className="w-1/5 flex justify-between">
          <div className="w-1/2">
            <p>{`1 of 16 pages`}</p>
          </div>
          <div className="w-1/2 flex justify-around">
            <button>Prev</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPagination;
