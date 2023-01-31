import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

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
