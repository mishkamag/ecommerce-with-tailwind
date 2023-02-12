import React from "react";
import ChangePassword from "./ChangePass/ChangePassword";

const Settings = () => {
  return (
    <div className="h-full w-full">
      <div className="h-[10%] rounded-t-xl bg-slate-200 px-4 flex items-center text-2xl">
        <span>Settings</span>
      </div>
      <div className="relative h-[90%] p-4 rounded-b-xl bg-red-50">
        <ChangePassword />
      </div>
    </div>
  );
};

export default Settings;
