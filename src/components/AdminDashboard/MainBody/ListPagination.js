import React, { useEffect } from "react";

const ListPagination = ({ numberOfItems, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(numberOfItems / 10);
  /* useEffect(() => {
    const renderButton = () => {
      if (currentPage === 1 && totalPages > 1) {
        return <button>Next</button>;
      } else if (currentPage < totalPages) {
        return (
          <div>
            <button>Prev</button>
            <button>Next</button>
          </div>
        );
      } else if (currentPage === totalPages && currentPage > 1) {
        return <button>Next</button>;
      }
    };
  }, [currentPage]); */
  const renderButton = () => {
    if (currentPage === 1 && totalPages > 1) {
      return (
        <div className="w-1/2 flex justify-start">
          <button>Next {">"}</button>
        </div>
      );
    } else if (currentPage < totalPages) {
      return (
        <div className="w-1/2 flex justify-between">
          <button>{"<"} Prev</button>
          <button>Next {">"}</button>
        </div>
      );
    } else if (currentPage === totalPages && currentPage > 1) {
      return (
        <div className="w-1/2 flex justify-end">
          <button>{"<"} Prev</button>
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
    <div className="h-12 flex items-center rounded-b-xl text-xs border-2 border-red-600">
      <div className="h-full w-full flex justify-between items-center px-2">
        <div className="w-1/5">
          <p className="my-auto">{`< ${
            currentPage === 1 ? currentPage : (currentPage - 1) * 10
          } -- 13 > of ${numberOfItems} results`}</p>
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
