import React, { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase.config";
import SideBar from "../components/AdminDashboard/SideBar/SideBar";
import Settings from "../components/AdminDashboard/MainBody/Settings";
import Products from "../components/AdminDashboard/MainBody/Products";
import AddItem from "../components/AdminDashboard/MainBody/AddNewItem/AddItem";
import { getCategorysFromProducts } from "../Helpers/functions";
import Promotions from "../components/AdminDashboard/MainBody/Promotions/Promotions";

const AdminHomePage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [mainBoxSrc, setmainBoxSrc] = useState("products");
  const [isLoading, setIsLoading] = useState(false);

  const body = () => {
    if (mainBoxSrc.toLowerCase() === "products") {
      return <Products products={allProducts} isLoading={isLoading} />;
    } else if (mainBoxSrc.toLowerCase() === "promotions") {
      return <Promotions />;
    } else if (mainBoxSrc.toLowerCase() === "settings") {
      return <Settings />;
    } else if (mainBoxSrc.toLowerCase() === "newitem") {
      return <AddItem categorys={getCategorysFromProducts(allProducts)} />;
    }
  };

  const getAllProducts = async () => {
    setIsLoading(true);

    try {
      const q = query(collection(db, "ecommerce"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const products = [];
        querySnapshot.forEach((doc) => {
          products.push(...doc.data().data);
        });
        setAllProducts(products);
        setIsLoading(false);
      });
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
