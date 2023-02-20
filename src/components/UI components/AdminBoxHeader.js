import React from "react";

const AdminBoxHeader = ({ children }) => {
  return (
    <div className="h-[10%] flex justify-between bg-slate-50 px-4 py-2 rounded-t-xl border-b-[1px] border-slate-200">
      {children}
    </div>
  );
};

export default AdminBoxHeader;
