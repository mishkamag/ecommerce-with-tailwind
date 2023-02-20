import React, { useEffect, useState } from "react";
import { fetchData } from "../../../../Helpers/functions";
import AdminBoxHeader from "../../../UI components/AdminBoxHeader";
import Spinner from "../../../UI components/Spinner";
import Add from "./Add";
import List from "./List";

const Promotions = () => {
  const [allPromotions, setAllPromotions] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [addItem, setAddItem] = useState(false);

  useEffect(() => {
    fetchData("offers", setIsLoading, setAllPromotions);
  }, [addItem]);

  const addHandler = () => {
    setAddItem(true);
  };
  return (
    <div className="relative h-full w-full bg-gray-100 rounded-xl ">
      {addItem ? <Add setAddItem={setAddItem} /> : null}
      <AdminBoxHeader>
        <h1 className="text-2xl ">Active Promotions</h1>
        <button onClick={addHandler}>Add Promotion</button>
      </AdminBoxHeader>
      {isLoading ? (
        <div className="w-full h-[90%] flex justify-between items-center">
          <Spinner />
        </div>
      ) : (
        <List allPromotions={allPromotions} />
      )}
    </div>
  );
};

export default Promotions;
