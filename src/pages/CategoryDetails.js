import React, { useContext } from "react";
import Product from "../components/Product";
import { ProductContext } from "../store/ProductContext";
import { useParams } from "react-router-dom";

const CategoryDetails = () => {
  const { products } = useContext(ProductContext);
  const { category } = useParams();

  const product = products.find((item) => {
    return item.category === category;
  });

  // console.log(product);
  // console.log(products.category);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]  ">
      {products
        .filter((product) => product.category)
        .map((product) => {
          return <Product product={product} key={product.id} />;
        })}
    </div>
  );
};

export default CategoryDetails;
