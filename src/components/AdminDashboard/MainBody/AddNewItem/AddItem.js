import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FieldComponent from "./FieldComponent";
import SelectField from "./SelectField";
import IsLoading from "../../../UI components/IsLoading";
import AdminBoxHeader from "../../../UI components/AdminBoxHeader";
import ImageSection from "./ImageSection";
import { AddNewItemToDb } from "../../../../Helpers/functions";

const initialValues = {
  title: "",
  price: "",
  category: "",
  description: "",
  image: ["", "", "", ""],
};
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Enter Title"),
  price: Yup.number().required("Enter Price"),
  category: Yup.string().required("Select Category"),
  description: Yup.string().required("Enter Description"),
});

const AddItem = ({ categorys }) => {
  const [imagesForDb, setImagesForDb] = useState([null, null, null, null]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [err, setErr] = useState(null);

  return (
    <div className="relative h-full w-full">
      <IsLoading
        message="Product Added Successfully"
        isLoading={isLoading}
        isAdded={isAdded}
        setIsAdded={setIsAdded}
        error={err}
        setError={setErr}
        setIsLoading={setIsLoading}
      />
      <AdminBoxHeader>
        <h1 className="text-lg">Add new Product</h1>
      </AdminBoxHeader>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          AddNewItemToDb(
            imagesForDb,
            values,
            setSubmitting,
            resetForm,
            setIsAdded,
            setErr
          );
        }}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ isSubmitting, handleChange, values }) => (
          <Form className="h-[90%] w-full flex flex-col justify-between items-center py-4 bg-gray-50">
            <div className="h-[90%] w-full flex justify-around ">
              <div className="w-2/5 h-full  grid grid-rows-4 gap-2">
                {/* {initialValues.image.map((item, index) => (
                  <ImageSection
                    key={uniqid()}
                    index={index}
                    values={values}
                    handleChange={handleChange}
                    setImagesForDb={setImagesForDb}
                  />
                ))} */}
                <ImageSection
                  index={0}
                  values={values}
                  handleChange={handleChange}
                  setImagesForDb={setImagesForDb}
                />
                <ImageSection
                  index={1}
                  values={values}
                  handleChange={handleChange}
                  setImagesForDb={setImagesForDb}
                />
                <ImageSection
                  index={2}
                  values={values}
                  handleChange={handleChange}
                  setImagesForDb={setImagesForDb}
                />
                <ImageSection
                  index={3}
                  values={values}
                  handleChange={handleChange}
                  setImagesForDb={setImagesForDb}
                />
              </div>
              <div className="w-1/3 h-full border-2 border-red-500">
                <FieldComponent
                  label="Title"
                  type="text"
                  name="title"
                  placeholder="Enter product title"
                />
                <FieldComponent
                  label="Price"
                  type="number"
                  name="price"
                  placeholder="Enter product price"
                />
                <SelectField
                  categorys={categorys}
                  label="Category"
                  name="category"
                  placeholder="Select Category"
                />
                <FieldComponent
                  label="Description"
                  asProps="textarea"
                  type="text"
                  name="description"
                  placeholder="Enter product description"
                />
              </div>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 rounded-lg max-w-min "
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddItem;
