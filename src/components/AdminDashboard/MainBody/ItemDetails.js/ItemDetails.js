import React, { useContext } from "react";
import AdminPageContext from "../../../../store/AdminPageContext";
import AdminBoxHeader from "../../../UI components/AdminBoxHeader";
import Detal from "./Detal";

const ItemDetails = () => {
  const { selectedItem } = useContext(AdminPageContext);
  return (
    <>
      <AdminBoxHeader>{selectedItem.title}</AdminBoxHeader>
      <div className="h-[90%] w-full flex flex-col justify-center items-around bg-gray-50 rounded-b-xl ">
        <div className="h-[90%] w-full flex justify-around ">
          <div className="w-1/3 h-[100%] flex flex-col justify-between">
            <div className="w-full h-[78%] pb-2 border-2 border-gray-300 border-dashed">
              <img
                src={selectedItem.image}
                className="w-full h-auto max-h-fit "
                alt={selectedItem.title}
              />
            </div>
            <div className="h-1/5 w-full flex grig grid-cols-3 gap-4 overflow-x-scroll ">
              <img
                src={selectedItem.image}
                className="object-fill w-auto h-full"
                alt={selectedItem.title}
              />
              <img
                src={selectedItem.image}
                className="object-fill w-auto h-full"
                alt={selectedItem.title}
              />
              <img
                src={selectedItem.image}
                className="object-fill w-auto h-full"
                alt={selectedItem.title}
              />
            </div>
          </div>
          <div className="w-1/3 h-full  ">
            <div className="relative mb-5">
              <h1 className="block font-bold mb-2 text-gray-700">Title</h1>
              <p className="w-full p-2 bg-gray-200 rounded-lg">
                {selectedItem.title}
              </p>
            </div>
            <Detal header="Price" value={`${selectedItem.price} Gel`} />
            <Detal header="Category" value={selectedItem.category} />
            <Detal header="Description" value={selectedItem.description} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
