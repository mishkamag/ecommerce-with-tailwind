import React, { useContext } from "react";
import { CiSettings } from "react-icons/ci";
import { MdContentPaste } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import BarItem from "./BarItem";
import AddNewItem from "./AddNewItem";
import AuthContext from "../../../store/AuthContext";

const SideBar = ({ setmainBoxSrc }) => {
  const { logout } = useContext(AuthContext);
  const submitHandler = (value) => {
    setmainBoxSrc(value);
  };
  return (
    <div className="flex flex-col items-start py-4 w-[15%] bg-slate-50 min-w-[256px] border-r-2 border-gray-200">
      <div className="w-[80%] mx-auto font-mono text-gray-600 py-8 border-b-[1px] border-gray-300 border-dashed">
        <h1 className="mb-2">
          Store: <span className="font-bold">Ecommerce Web</span>
        </h1>
        <h3>
          User status:{" "}
          <span className="text-black font-semibold italic">Admin</span>
        </h3>
      </div>
      <div className="w-[80%] mx-auto flex flex-col justify-center items-start py-8">
        <AddNewItem setmainBoxSrc={setmainBoxSrc} />
        <BarItem
          icon={<MdContentPaste />}
          title="Products"
          onSubmit={submitHandler}
        />
        <BarItem
          icon={<MdOutlineLocalOffer />}
          title="Promotions"
          onSubmit={submitHandler}
        />
        <BarItem
          icon={<CiSettings />}
          title="Settings"
          onSubmit={submitHandler}
        />
        <button
          className="w-1/2 mt-4 border-2 border-cyan-700-800 bg-cyan-300 hover:bg-cyan-400 duration-150 py-1 rounded-lg"
          onClick={logout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
