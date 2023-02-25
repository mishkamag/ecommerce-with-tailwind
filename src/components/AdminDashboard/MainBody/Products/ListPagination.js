import React, { useEffect, useState } from "react";

const ListPagination = ({ numberOfItems, currentPage, setCurrentPage }) => {
  const [prevBtnStyle, setPrevBtnStyle] = useState("");
  const [nextBtnStyle, setNextBtnStyle] = useState("");
  const totalPages = Math.ceil(numberOfItems / 10);

  const activeStyle =
    "cursor-pointer text-gray-900 duration-100 hover:scale-105";

  /* const renderButton = () => {
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
  }; */
  useEffect(() => {
    if (currentPage === 1 && totalPages > 1) {
      setNextBtnStyle(activeStyle);
      setPrevBtnStyle("");
    } else if (currentPage < totalPages) {
      setPrevBtnStyle(activeStyle);
      setNextBtnStyle(activeStyle);
    } else if (currentPage === totalPages && currentPage > 1) {
      setPrevBtnStyle(activeStyle);
      setNextBtnStyle("");
    }
  }, [currentPage]);

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
          <div className="w-1/2 flex justify-between">
            <button
              className={prevBtnStyle}
              onClick={prevHandler}
              disabled={prevBtnStyle ? false : true}
            >
              {"<"} Prev
            </button>
            <button
              className={nextBtnStyle}
              onClick={nextHandler}
              disabled={nextBtnStyle ? false : true}
            >
              Next {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPagination;
