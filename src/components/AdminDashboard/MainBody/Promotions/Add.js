import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { storage } from "../../../../firebase.config";
import uniqid from "uniqid";
import { BsImages } from "react-icons/bs";
import IsLoading from "../../../UI components/IsLoading";
import { AddNewPromotionToDb } from "../../../../Helpers/functions";

const initialValues = {
  title: "",
  image: "",
};
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Enter Title"),
  image: Yup.mixed().required("Image is required"),
});

const Add = ({ setAddItem }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [err, setErr] = useState(null);
  const cancelAddHandler = () => {
    setAddItem(false);
  };
  return (
    <div className="absolute h-full w-full bg-black/70 rounded-xl flex items-center justify-center">
      <IsLoading
        message="Promotion Added Successfully"
        isLoading={isLoading}
        isAdded={isAdded}
        setIsAdded={setIsAdded}
        error={err}
        setError={setErr}
        setIsLoading={setIsLoading}
        setSelectedImage={setSelectedImage}
      />
      <div className=" w-3/4 h-3/4 bg-white rounded-xl">
        <div className="relative flex justify-center items-center w-full h-[10%] text-xl bg-slate-50 rounded-t-xl">
          <span>New Promotion</span>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 hover:font-semibold cursor-pointer"
            onClick={cancelAddHandler}
            type="button"
          >
            x
          </button>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setIsLoading(true);
            console.log(values);
            const storageRef = ref(storage, `offers/${values.image}`);
            uploadBytes(storageRef, selectedImage).then((snapshot) => {
              getDownloadURL(ref(storage, `offers/${values.image}`))
                .then((url) => {
                  const updatedItem = {
                    ...values,
                    image: url,
                    status: "active",
                    id: uniqid(),
                  };
                  AddNewPromotionToDb(
                    updatedItem,
                    setSubmitting,
                    resetForm,
                    setIsAdded,
                    setErr
                  );
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
            <Form className="h-[90%] py-4 px-8 rounded-b-xl">
              <div className="h-[20%] flex justify-between items-center">
                <div className="flex flex-col ">
                  <label htmlFor="title">Add Promotion Title</label>
                  <Field
                    className="italic font-mono outline-none py-2"
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter Promotion Title"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="image">Add Promotion Image</label>
                  <Field
                    className="italic font-mono outline-none py-2"
                    type="file"
                    name="image"
                    id="image"
                    value={values.image}
                    onChange={(e) => {
                      setSelectedImage(e.currentTarget.files[0]);
                      handleChange(e);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-200 rounded-2xl hover:bg-green-300"
                  disabled={isSubmitting}
                >
                  + Add
                </button>
              </div>
              <div className="w-full h-[80%] border-2 border-dashed flex justify-center items-center ">
                {selectedImage ? (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    className="object-fill w-full h-full"
                    alt="noimage"
                  />
                ) : (
                  <span className="text-6xl text-blue-500">
                    <BsImages />
                  </span>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Add;
