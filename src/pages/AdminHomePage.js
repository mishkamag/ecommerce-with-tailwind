import React, { useContext } from "react";
import { ProductContext } from "../store/ProductContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import SideBar from "../components/AdminDashboard/SideBar/SideBar";
import MainBox from "../components/AdminDashboard/MainBody/MainBox";

const AdminHomePage = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  const handleFetchProducts = async () => {
    const docRef = doc(db, "products", "men");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    // Fetch products from Firestore and set the products state
  };
  return (
    <div className="flex h-screen w-screen bg-[#e2e5e9]">
      <SideBar />
      <MainBox products={products} />
    </div>
  );
};

export default AdminHomePage;
