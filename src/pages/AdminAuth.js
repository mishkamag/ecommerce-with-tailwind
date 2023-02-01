import React from "react";
import { useContext, useState } from "react";
import { Field, Form, Formik } from "formik";
import AuthContext from "../store/AuthContext";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const AdminAuth = () => {
  const [error, setError] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const userLoginHandler = (values) => {
    login(values.email, values.password, navigate, setError);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center py-28 bg-slate-600">
      <div className="bg-neutral-100 py-4 px-8 w-96 relative">
        <h1 className="text-center text-2xl uppercase font-semibold mb-6">
          Sign In
        </h1>
        {error ? (
          <div className="absolute w-full left-8 top-12 text-red-500">
            Email/Password is incorrect
          </div>
        ) : null}
        <Formik initialValues={initialValues} onSubmit={userLoginHandler}>
          <Form className="py-2 grid grid-rows-3 gap-4">
            <Field
              className="py-2 px-4 border-2 outline-none"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />

            <Field
              className="py-2 px-4 border-2 outline-none"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <button
              type="submit"
              className="bg-neutral-200 font-bold text-gray-600 hover:bg-[#008ECC] duration-100"
            >
              Log In
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AdminAuth;
