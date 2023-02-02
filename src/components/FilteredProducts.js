import React, { useContext } from "react";
import { ProductContext } from "../store/ProductContext";
import Product from "./Product";

const FilteredProducts = (props) => {
  const { products } = useContext(ProductContext);
  const { searchTerm } = props;

  return (
    <div>
      {products
        .filter((product) => {
          if (searchTerm === "") {
            return product;
          } else if (
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return product;
          }
        })
        .map((product) => {
          return <Product product={product} key={product.id} />;
        })}
    </div>
  );
};

export default FilteredProducts;
