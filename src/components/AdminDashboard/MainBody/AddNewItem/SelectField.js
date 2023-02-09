import { ErrorMessage, Field } from "formik";
import React from "react";
import uniqid from "uniqid";

const SelectField = ({ label, name, placeholder }) => {
  const categorys = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const renderSelectOptions = (categorys) => {
    return categorys.map((category) => (
      <option key={uniqid()} value={category}>
        {category}
      </option>
    ));
  };
  return (
    <div className="relative mb-5">
      <label className="block font-bold mb-2 text-gray-700" htmlFor={name}>
        {label}
      </label>
      <Field
        className="w-full p-2 bg-gray-200 rounded-lg outline-none italic"
        as="select"
        id={name}
        name={name}
      >
        <option className="italic">{placeholder}</option>
        {renderSelectOptions(categorys)}
      </Field>
      <ErrorMessage
        component="div"
        className="absolute -bottom-6 left-0 text-red-700 text-sm font-mono lowercase italic"
        name={name}
      />
    </div>
  );
};

export default SelectField;
