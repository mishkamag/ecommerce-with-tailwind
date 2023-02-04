import React, { useState } from "react";

const useHttp = () => {
  const [data, setData] = useState([]);

  const getAllProducts = async () => {
    const allProducts = [];
    const querySnapshot = await getDocs(collection(db, "ecommerce"));
    querySnapshot.forEach((doc) => {
      allProducts.push(...doc.data().data);
    });
    return allProducts;
  };

  return <div>useHttp</div>;
};

export default useHttp;
