import React, { useContext } from "react";
import { ProductContext } from "../store/ProductContext";
import MiniProduct from "./MiniProduct";

const FilteredProducts = ({ searchTerm, setSearchTerm }) => {
  const { products } = useContext(ProductContext);

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
          return (
            <MiniProduct
              product={product}
              key={product.id}
              setSearchTerm={setSearchTerm}
            />
          );
        })}
    </div>
  );
};

export default FilteredProducts;
