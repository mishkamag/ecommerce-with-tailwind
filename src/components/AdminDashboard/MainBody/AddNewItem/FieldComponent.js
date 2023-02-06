import { ErrorMessage, Field } from "formik";
import React from "react";

const FieldComponent = ({ label, type, asProps, name, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block font-bold mb-2 text-gray-700" htmlFor={name}>
        {label}
      </label>
      <Field
        className="w-full p-2 bg-gray-200 rounded-lg"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        as={asProps ? asProps : null}
        rows={asProps ? "5" : null}
      />
      <ErrorMessage className="text-red-700" name={name} />
    </div>
  );
};

export default FieldComponent;
