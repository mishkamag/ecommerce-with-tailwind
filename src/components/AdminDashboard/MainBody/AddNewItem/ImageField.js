import { ErrorMessage, Field } from "formik";
import React, { useContext } from "react";
import AdminPageContext from "../../../../store/AdminPageContext";

const ImageField = ({ index, handleChange, values }) => {
  const { hanldeImageInputChange } = useContext(AdminPageContext);
  return (
    <div className="relative mb-5">
      <label
        className="block font-bold mb-2 text-gray-700"
        htmlFor={`image${index}`}
      >
        {`image ${index}`}
      </label>
      <Field
        name={`image[${index}]`}
        render={({ field }) => (
          <input
            {...field}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-100 focus:outline-none"
            type="file"
            id={`image${index}`}
            placeholder="Upload an image"
            value={values.image[index]}
            onChange={(e) => {
              console.log("Field Onchange");
              /* setImagesForDb((prev) => {
                const updatedArray = [...prev];
                updatedArray[index] = e.currentTarget.files[0];
                return updatedArray;
              }); */
              hanldeImageInputChange(e.currentTarget.files[0], index);
              handleChange(e);
            }}
          />
        )}
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
