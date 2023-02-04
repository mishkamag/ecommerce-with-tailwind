import {
  doc,
  getDoc,
  setDoc,
  collection,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDocs,
} from "firebase/firestore";
import React, { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { MdContentPaste } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { db } from "../../../firebase.config";
import { ProductContext } from "../../../store/ProductContext";
import BarItem from "./BarItem";
import { getAllProducts } from "../../../Helpers/functions";

const SideBar = ({ setmainBoxSrc }) => {
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
      <div className="w-[80%] mx-auto flex flex-col justify-center py-8">
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
      </div>
    </div>
  );
};

export default SideBar;
