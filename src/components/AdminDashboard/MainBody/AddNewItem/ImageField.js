import { ErrorMessage, Field } from "formik";
import React from "react";

const ImageField = ({
  label,
  type,
  name,
  placeholder,
  onChange,
  setFieldValue,
}) => {
  const changeHandler = (e) => {
    onChange(e);
    /* console.log(name, e.currentTarget.files[0].name); */
    /* setFieldValue(name, e.currentTarget.files[0]); */
  };

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
        onChange={changeHandler}
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
