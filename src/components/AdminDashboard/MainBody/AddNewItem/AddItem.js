import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FieldComponent from "./FieldComponent";
import { BsImages } from "react-icons/bs";
import { MdDoneAll } from "react-icons/md";
import ImageField from "./ImageField";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase.config";
import uniqid from "uniqid";
import { addItem } from "../../../../Helpers/functions";
import Spinner from "../../../UI components/Spinner";
import SelectField from "./SelectField";

const initialValues = {
  title: "",
  price: "",
  category: "",
  description: "",
  image: "",
};
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Enter Title"),
  price: Yup.number().required("Enter Price"),
  category: Yup.string().required("Select Category"),
  description: Yup.string().required("Enter Description"),
  image: Yup.mixed().required("Image is required"),
});
//მაქვს ატვირთვის პრობლემა, სურათი იტვირთება ცუდად//
const AddItem = ({ categorys }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div className="relative h-full w-full">
      {isLoading ? (
        <div className="absolute z-50 w-full h-full rounded xl bg-black/50 flex justify-center items-center">
          {isAdded ? (
            <div className="flex flex-col items-center justify-center bg-white/90 py-8 px-16">
              <div className="text-8xl text-green-400 mx-auto mb-2">
                <MdDoneAll />
              </div>
              <h1 className="text-2xl font-semibold italic font-mono mb-4">
                Product Added Successfully
              </h1>
              <button
                className="bg-blue-300 text-xl text-white py-2 px-6 rounded-xl hover:bg-blue-400"
                onClick={() => {
                  setIsAdded(false);
                  setIsLoading(false);
                  setSelectedImage(null);
                }}
              >
                Done
              </button>
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      ) : null}

      <div className="h-[10%] flex justify-center items-center w-full bg-gray-100 rounded-t-lg">
        <h1 className="text-lg">Add new Product</h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setIsLoading(true);
          console.log(values);
          const storageRef = ref(storage, `images/${values.image}`);
          uploadBytes(storageRef, selectedImage).then((snapshot) => {
            getDownloadURL(ref(storage, `images/${values.image}`))
              .then((url) => {
                const updatedItem = { ...values, image: url, id: uniqid() };
                addItem(updatedItem, setSubmitting, resetForm, setIsAdded);
              })
              .catch((error) => {
                console.log(error);
              });
          });
        }}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ isSubmitting, handleChange, values }) => (
          <Form className="h-[90%] w-full flex flex-col justify-between items-center py-4 bg-gray-50">
            <div className="h-[70%] w-full flex justify-around">
              <div className="w-1/3 h-full">
                <ImageField
                  label="Image"
                  type="file"
                  name="image"
                  placeholder="Upload an image"
                  values={values}
                  handleChange={handleChange}
                  setSelectedImage={setSelectedImage}
                />
                {selectedImage ? (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    className="object-fill w-full h-auto mt-8"
                    alt="noimage"
                  />
                ) : (
                  <div className="h-4/5 w-full mt-8 flex justify-center items-center border-2 border-dashed text-6xl text-blue-500">
                    <BsImages />
                  </div>
                )}
              </div>
              <div className="w-1/3 h-full">
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
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg max-w-min"
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
