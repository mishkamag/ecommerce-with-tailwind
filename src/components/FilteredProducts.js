import React, { useContext } from "react";
import { ProductContext } from "../store/ProductContext";
import MiniProduct from "./MiniProduct";

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
          return <MiniProduct product={product} key={product.id} />;
        })}
    </div>
  );
};

export default FilteredProducts;
