import React, { useContext } from "react";
import { ProductContext } from "../store/ProductContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import SideBar from "../components/AdminDashboard/SideBar/SideBar";

const AdminHomePage = () => {
  const { products } = useContext(ProductContext);
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
    <div className="flex h-screen w-screen bg-[#F9FAFB]">
      <SideBar />
      <div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* <div className="container mx-auto">
        <span className="text-2xl text-white/80 hover:text-white font-bold mb-4 cursor-pointer duration-150">
          Admin Panel
        </span>
        <div className="flex justify-between mb-4">
          <input
            type="text"
            className="border p-2 rounded w-1/2"
            placeholder="Search products"
          />
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleFetchProducts}
          >
            Fetch Products
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default AdminHomePage;
