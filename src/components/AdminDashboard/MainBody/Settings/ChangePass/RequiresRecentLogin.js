import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import React from "react";
import FieldComponent from "../../AddNewItem/FieldComponent";

const RequiresRecentLogin = ({ setRequiresRecentLogin, values, user }) => {
  const recentLoginHandler = () => {
    console.log(user);
    const credential = EmailAuthProvider.credential(
      values.email,
      values.currentPassword
    );
    reauthenticateWithCredential(user, credential)
      .then(() => {
        setRequiresRecentLogin(false);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(values);
  };

  const cancelHandler = () => {
    setRequiresRecentLogin(false);
  };

  return (
    <div className="absolute bg-black/60 top-0 left-0 w-full h-full z-10 flex justify-center items-center">
      <div className="bg-white w-1/2 p-4 rounded">
        <h1 className="text-xl mb-4">Enter Credintials</h1>
        <FieldComponent
          label="Email"
          type="email"
          name="email"
          placeholder="Enter Email"
        />
        <FieldComponent
          label="Current Password"
          type="password"
          name="currentPassword"
          placeholder="Enter Current Password"
        />
        <div>
          <button
            className="py-2 px-4 bg-blue-300 hover:bg-blue-500 rounded-lg duration-150 mr-4"
            type="button"
            onClick={recentLoginHandler}
            disabled={values.email === "" || values.currentPassword === ""}
          >
            Submit
          </button>
          <button
            className="py-2 px-4 bg-blue-300 hover:bg-blue-500 rounded-lg duration-150"
            type="button"
            onClick={cancelHandler}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequiresRecentLogin;
