import React, { useState } from "react";
import { BsImages } from "react-icons/bs";
import ImageField from "./ImageField";
import uniqid from "uniqid";

const ImageSection = ({ index, values, handleChange, setImagesForDb }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className=" flex">
      <div className="w-1/2 px-4 h-full">
        <ImageField
          key={uniqid()}
          index={index}
          values={values}
          handleChange={handleChange}
          setSelectedImage={setSelectedImage}
          setImagesForDb={setImagesForDb}
        />
      </div>
      <div className="w-1/2 px-4 h-full">
        {selectedImage ? (
          <img
            src={URL.createObjectURL(selectedImage)}
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
