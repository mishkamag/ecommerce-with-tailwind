import { updatePassword } from "firebase/auth";
import { Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import * as Yup from "yup";
import AuthContext from "../../../../../store/AuthContext";
import IsLoading from "../../../../UI components/IsLoading";
import FieldComponent from "../../AddNewItem/FieldComponent";
import RequiresRecentLogin from "./RequiresRecentLogin";

const initialValues = {
  email: "",
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

const validationSchema = Yup.object().shape({
  /* email: Yup.string().required("Enter Email"),
  currentPassword: Yup.string().required("Enter Current Password"), */
  newPassword: Yup.string().required("Enter New Password"),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords does not match")
    .required("Confir New Password"),
});

const ChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [requiresRecentLogin, setRequiresRecentLogin] = useState(false);
  const { user } = useContext(AuthContext);
  return (
    <>
      <IsLoading
        message="Password changed Successfully"
        isLoading={isLoading}
        isAdded={isAdded}
        setIsAdded={setIsAdded}
        setIsLoading={setIsLoading}
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setIsLoading(true);
          setSubmitting(true);
          updatePassword(user, values.newPassword)
            .then(() => {
              console.log(values.newPassword, " - is Setted");
              setIsAdded(true);
              setSubmitting(false);
              resetForm();
            })
            .catch((error) => {
              setIsLoading(false);
              setRequiresRecentLogin(true);
              setSubmitting(false);
            });
        }}
        validateOnBlur={false}
      >
        {({ isSubmitting, values }) => (
          <Form className="max-w-fit">
            <h1 className="text-xl mb-4">Change Password</h1>
            {requiresRecentLogin ? (
              <RequiresRecentLogin
                user={user}
                values={values}
                setRequiresRecentLogin={setRequiresRecentLogin}
              />
            ) : null}
            {/* <FieldComponent
          label="Current Password"
          type="password"
          name="currentPassword"
          placeholder="Enter Current Password"
        /> */}
            <FieldComponent
              label="New Password"
              type="password"
              name="newPassword"
              placeholder="Enter Current Password"
            />
            <FieldComponent
              label="Confirm New Password"
              type="password"
              name="confirmNewPassword"
              placeholder="Enter Current Password"
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ChangePassword;
