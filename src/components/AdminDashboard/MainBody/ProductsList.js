import React, { useState } from "react";
import ListHeader from "./ListHeader";
import ListItems from "./ListItems";
import ListPagination from "./ListPagination";

const ProductsList = ({ list }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="h-[90%] rounded-b-xl">
      <div className="h-full w-full px-4 ">
        <ListHeader />
        <div className="h-[93%] w-full rounded-b-xl grid grid-rows-11">
          <ListItems list={list} currentPage={currentPage} />
          <ListPagination
            numberOfItems={list.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
