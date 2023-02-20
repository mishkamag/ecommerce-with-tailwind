import React, { useContext } from "react";
import AdminPageContext from "../../../../store/AdminPageContext";
import AdminBoxHeader from "../../../UI components/AdminBoxHeader";
import Detal from "./Detal";

const ItemDetails = () => {
  const { selectedItem } = useContext(AdminPageContext);
  return (
    <>
      <AdminBoxHeader>{selectedItem.title}</AdminBoxHeader>
      <div className="h-[90%] w-full flex flex-col justify-between items-center py-2 bg-gray-50">
        <div className="h-[90%] w-full flex justify-around">
          <div className="w-1/3 h-full">
            <img
              src={selectedItem.image}
              className="object-fill w-full h-auto max-h-full mt-8"
              alt={selectedItem.title}
            />
          </div>
          <div className="w-1/3 h-full">
            <div className="relative mb-5">
              <h1 className="block font-bold mb-2 text-gray-700">Title</h1>
              <p className="w-full p-2 bg-gray-200 rounded-lg">
                {selectedItem.title}
              </p>
            </div>
            <Detal header="Category" value={selectedItem.category} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
