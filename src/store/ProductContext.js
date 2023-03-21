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
