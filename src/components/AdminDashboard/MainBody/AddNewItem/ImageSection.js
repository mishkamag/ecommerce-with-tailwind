import React, { useContext, useState } from "react";
import { BsImages } from "react-icons/bs";
import ImageField from "./ImageField";
import uniqid from "uniqid";
import AdminPageContext from "../../../../store/AdminPageContext";

const ImageSection = ({ index, values, handleChange }) => {
  const { imagesForDb } = useContext(AdminPageContext);

  return (
    <div className=" flex">
      <div className="w-1/2 px-4 h-full">
        <ImageField index={index} values={values} handleChange={handleChange} />
      </div>
      <div className="w-1/2 px-4 h-full">
        {imagesForDb[index] ? (
          <img
            src={URL.createObjectURL(imagesForDb[index])}
            className="object-fill w-auto h-full py-4"
            alt="noimage"
          />
        ) : (
          <div className="h-full w-full flex justify-center items-center border-2 border-dashed text-6xl text-blue-500">
            <BsImages />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSection;
