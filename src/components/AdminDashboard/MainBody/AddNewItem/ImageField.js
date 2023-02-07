import { ErrorMessage, Field } from "formik";
import React from "react";

const ImageField = ({
  label,
  type,
  name,
  placeholder,
  handleChange,
  values,
  setSelectedImage,
}) => {
  return (
    <div className="relative mb-5">
      <label className="block font-bold mb-2 text-gray-700" htmlFor={name}>
        {label}
      </label>
      <Field
        className="w-full p-2 bg-gray-200 rounded-lg outline-none"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={values.image}
        onChange={(e) => {
          /* setSelectedImage(URL.createObjectURL(e.currentTarget.files[0])); */
          setSelectedImage(e.currentTarget.files[0]);
          handleChange(e);
        }}
      />
      <ErrorMessage
        component="div"
        className="absolute -bottom-6 left-0 text-red-700 text-sm font-mono lowercase italic"
        name={name}
      />
    </div>
  );
};

export default ImageField;
