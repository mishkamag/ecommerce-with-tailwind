import React, { useEffect } from "react";

const ListPagination = ({ numberOfItems, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(numberOfItems / 10);

  const renderButton = () => {
    if (currentPage === 1 && totalPages > 1) {
      return (
        <div className="w-1/2 flex justify-start">
          <button onClick={nextHandler}>Next {">"}</button>
        </div>
      );
    } else if (currentPage < totalPages) {
      return (
        <div className="w-1/2 flex justify-between">
          <button onClick={prevHandler}>{"<"} Prev</button>
          <button onClick={nextHandler}>Next {">"}</button>
        </div>
      );
    } else if (currentPage === totalPages && currentPage > 1) {
      return (
        <div className="w-1/2 flex justify-end">
          <button onClick={prevHandler}>{"<"} Prev</button>
        </div>
      );
    }
  };

  const nextHandler = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevHandler = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="h-12 flex items-center rounded-b-xl text-xs">
      <div className="h-full w-full flex justify-between items-center px-2">
        <div className="w-1/5">
          <p className="my-auto">{`< ${
            currentPage === 1 ? currentPage : (currentPage - 1) * 10 + 1
          } -- ${
            currentPage * 10 > numberOfItems ? numberOfItems : currentPage * 10
          } > of ${numberOfItems} results`}</p>
        </div>
        <div className="w-1/5 flex justify-between">
          <div className="w-1/2">
            <p>{`${currentPage} of ${totalPages} pages`}</p>
          </div>
          {renderButton()}
        </div>
      </div>
    </div>
  );
};

export default ListPagination;
