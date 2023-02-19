import React, { useContext } from "react";
import AdminPageContext from "../../../../store/AdminPageContext";
import AdminBoxHeader from "../../../UI components/AdminBoxHeader";

const ItemDetails = () => {
  const { selectedItem } = useContext(AdminPageContext);
  return (
    <>
      <AdminBoxHeader>{selectedItem.title}</AdminBoxHeader>
    </>
  );
};

export default ItemDetails;
