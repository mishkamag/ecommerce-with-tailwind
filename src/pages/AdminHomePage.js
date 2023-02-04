import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";
import SideBar from "../components/AdminDashboard/SideBar/SideBar";
import Promotions from "../components/AdminDashboard/MainBody/Promotions";
import Settings from "../components/AdminDashboard/MainBody/Settings";
import Products from "../components/AdminDashboard/MainBody/Products";

const AdminHomePage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [mainBoxSrc, setmainBoxSrc] = useState("products");

  const body = () => {
    if (mainBoxSrc.toLowerCase() === "products") {
      return <Products />;
    } else if (mainBoxSrc.toLowerCase() === "promotions") {
      return <Promotions />;
    } else if (mainBoxSrc.toLowerCase() === "settings") {
      return <Settings />;
    }
  };

  const getAllProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "ecommerce"));
      const products = [];
      querySnapshot.forEach((doc) => {
        products.push(...doc.data().data);
      });
      setAllProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="flex h-screen w-screen bg-[#e2e5e9]">
      <SideBar setmainBoxSrc={setmainBoxSrc} />
      <div className="h-5/6 w-9/12 mx-auto my-auto bg-white rounded-xl">
        {body()}
      </div>
    </div>
  );
};

export default AdminHomePage;
