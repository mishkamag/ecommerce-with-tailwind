import React, { createContext, useEffect, useState } from "react";
import { fetchData } from "../Helpers/functions";

export const ProductContext = createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData("ecommerce", setProducts);
  }, []);

  console.log(products);

  const categoryFilter = (category) => {
    return products.filter((item) => item.category === category);
  };

  return (
    <ProductContext.Provider value={{ products, categoryFilter }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

/*
  export const fetchData = async (database, setIsLoading, setAllProducts) => {
  setIsLoading(true);
  try {
    const q = query(collection(db, database));
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
 */

/* async function fetchData() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData(); */
