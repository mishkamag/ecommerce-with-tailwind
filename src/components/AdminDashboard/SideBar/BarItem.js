import React from "react";

const BarItem = ({ icon, title, onSubmit }) => {
  const onClickHandler = (e) => {
    console.log(e.target.innerText);
    onSubmit();
  };

  return (
    <div className="flex w-full items-center py-1 text-gray-600 font-semibold">
      <div className="text-lg mr-4 ">{icon}</div>
      <div
        className="text-md hover:text-black duration-150 cursor-pointer"
        onClick={onClickHandler}
      >
        {title}
      </div>
    </div>
  );
};

export default BarItem;
