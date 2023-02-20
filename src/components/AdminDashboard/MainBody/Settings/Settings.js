import React from "react";
import AdminBoxHeader from "../../../UI components/AdminBoxHeader";
import ChangePassword from "./ChangePass/ChangePassword";

const Settings = () => {
  return (
    <div className="h-full w-full">
      <AdminBoxHeader>
        <span>Settings</span>
      </AdminBoxHeader>
      <div className="relative h-[90%] p-4 rounded-b-xl ">
        <ChangePassword />
      </div>
    </div>
  );
};

export default Settings;
