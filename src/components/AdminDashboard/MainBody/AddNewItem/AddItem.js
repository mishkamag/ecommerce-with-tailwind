import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FieldComponent from "./FieldComponent";
import { BsImages } from "react-icons/bs";
import ImageField from "./ImageField";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase.config";

const initialValues = {
  title: "",
  price: "",
  category: "",
  description: "",
  image: "",
};
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  price: Yup.number().required("Price is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description is required"),
  image: Yup.mixed().required("Image is required"),
});
//მაქვს ატვირთვის პრობლემა, სურათი იტვირთება ცუდად//
const AddItem = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="h-full w-full">
      <div className="h-[10%] flex justify-center items-center w-full bg-green-200 rounded-t-lg">
        <h1 className="text-lg">Add new Product</h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(selectedImage);
          const storageRef = ref(storage, `images/${values.image}`);
          uploadBytes(storageRef, selectedImage).then((snapshot) => {
            getDownloadURL(ref(storage, `images/${values.image}`))
              .then((url) => {
                console.log("src", url);
              })
              .catch((error) => {
                console.log(error);
              });
            console.log("Uploaded a blob or file!", snapshot);
          });
          setSubmitting(false);
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
                <FieldComponent
                  label="Category"
                  type="text"
                  name="category"
                  placeholder="Enter product category"
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
