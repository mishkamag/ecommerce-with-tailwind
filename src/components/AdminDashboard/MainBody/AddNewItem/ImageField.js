import { ErrorMessage, Field } from "formik";
import React from "react";

const ImageField = ({
  index,
  handleChange,
  values,
  setSelectedImage,
  setImagesForDb,
}) => {
  return (
    <div className="relative mb-5">
      <label
        className="block font-bold mb-2 text-gray-700"
        htmlFor={`image[${index}]`}
      >
        {`Image ${index + 1}`}
      </label>
      <Field
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-100 focus:outline-none"
        type="file"
        id={`image[${index}]`}
        name={`image[${index}]`}
        placeholder="Upload an image"
        value={values.image[index]}
        onChange={(e) => {
          console.log(e.currentTarget.files[0]);
          /* setSelectedImage(e.currentTarget.files[0]);
          handleChange(e); */
        }}
      />
      {/* <ErrorMessage
        component="div"
        className="absolute -bottom-6 left-0 text-red-700 text-sm font-mono lowercase italic"
        name={name}
      /> */}
    </div>
  );
};

export default ImageField;

/* setImagesForDb((prev) => {
            const updatedArray = [...prev];
            updatedArray[index] = e.currentTarget.files[0];
            return updatedArray;
          }); */
