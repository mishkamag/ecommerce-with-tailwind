import React, { useContext, useEffect } from "react";
import Product from "../components/Product";
import { ProductContext } from "../store/ProductContext";
import { useParams } from "react-router-dom";

const CategoryDetails = () => {
  const { products } = useContext(ProductContext);
  const { category } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("here");
  }, []);

  return (
    <div className="container mx-auto my-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]  ">
        {products
          .filter((product) => product.category === category)
          .map((product) => {
            return <Product product={product} key={product.id} />;
          })}
      </div>
    </div>
  );
};

export default CategoryDetails;
