import React, { useContext, useEffect, useState } from "react";
import SideBar from "../components/AdminDashboard/SideBar/SideBar";
import Settings from "../components/AdminDashboard/MainBody/Settings/Settings";
import Products from "../components/AdminDashboard/MainBody/Products/Products";
import AddItem from "../components/AdminDashboard/MainBody/AddNewItem/AddItem";
import { fetchData, getCategorysFromProducts } from "../Helpers/functions";
import Promotions from "../components/AdminDashboard/MainBody/Promotions/Promotions";
import ItemDetails from "../components/AdminDashboard/MainBody/ItemDetails.js/ItemDetails";
import AdminPageContext from "../store/AdminPageContext";

const AdminHomePage = () => {
  const [allProducts, setAllProducts] = useState([]);
  /* const [mainBoxSrc, setmainBoxSrc] = useState("products"); */
  const [isLoading, setIsLoading] = useState(false);

  const { mainBoxSrc } = useContext(AdminPageContext);

  const body = () => {
    if (mainBoxSrc.toLowerCase() === "products") {
      return <Products products={allProducts} isLoading={isLoading} />;
    } else if (mainBoxSrc.toLowerCase() === "promotions") {
      return <Promotions />;
    } else if (mainBoxSrc.toLowerCase() === "settings") {
      return <Settings />;
    } else if (mainBoxSrc.toLowerCase() === "newitem") {
      return <AddItem categorys={getCategorysFromProducts(allProducts)} />;
    } else if (mainBoxSrc.toLowerCase() === "details") {
      return <ItemDetails />;
    }
  };

  useEffect(() => {
    fetchData("ecommerce", setAllProducts, setIsLoading);
  }, []);
  return (
    <div className="flex h-screen w-screen bg-[#e2e5e9]">
      <SideBar /* setmainBoxSrc={setmainBoxSrc} */ />
      <div className="h-5/6 w-9/12 mx-auto my-auto bg-white rounded-xl">
        {body()}
      </div>
    </div>
  );
};

export default AdminHomePage;
