import React, { useContext } from "react";
import AdminPageContext from "../../../store/AdminPageContext";

const BarItem = ({ icon, title }) => {
  const { changeBoxSrc } = useContext(AdminPageContext);
  const onClickHandler = (e) => {
    changeBoxSrc(e.target.innerText);
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
