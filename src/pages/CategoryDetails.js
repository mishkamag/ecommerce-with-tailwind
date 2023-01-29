import React, { useContext } from "react";
import Product from "../components/Product";
import { ProductContext } from "../store/ProductContext";

const CategoryDetails = () => {
  const { products } = useContext(ProductContext);

  const electronicsProducts = products.filter(
    (item) => item.category === "electronics"
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]  ">
      {electronicsProducts.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
};

export default CategoryDetails;
