import React, { useContext } from "react";
import AdminPageContext from "../../../store/AdminPageContext";

const AddNewItem = () => {
  const { changeBoxSrc } = useContext(AdminPageContext);
  const onClickHandler = () => {
    changeBoxSrc("newitem");
  };
  return (
    <button
      className="w-full mb-4 border-2 border-green-800 bg-green-200 py-2 rounded-lg"
      onClick={onClickHandler}
    >{`Add new Product`}</button>
  );
};

export default AddNewItem;
