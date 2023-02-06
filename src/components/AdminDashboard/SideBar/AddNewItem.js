import React from "react";

const AddNewItem = ({ setmainBoxSrc }) => {
  const onClickHandler = () => {
    setmainBoxSrc("newitem");
  };
  return (
    <button
      className="w-full mb-4 border-2 border-green-800 bg-green-200 py-2 rounded-lg"
      onClick={onClickHandler}
    >{`Add new Product`}</button>
  );
};

export default AddNewItem;
