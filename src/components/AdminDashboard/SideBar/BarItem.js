import React from "react";

const BarItem = ({ icon, title, onSubmit }) => {
  const onClickHandler = (e) => {
    onSubmit(e.target.innerText);
  };

  return (
    <div className="flex w-full items-center justify-between py-1 text-gray-600 font-semibold pr-4">
      <div className="flex items-center justify-between">
        <div className="text-lg mr-4 ">{icon}</div>
        <div
          className="text-md hover:text-black duration-150 cursor-pointer"
          onClick={onClickHandler}
        >
          {title}
        </div>
      </div>
      <span>x</span>
    </div>
  );
};

export default BarItem;
