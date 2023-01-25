import React, { useContext } from "react";
import { IoMdArrowForward } from "react-icons/io";

import { ProductContext } from "../store/ProductContext";
import Product from "../components/Product";

const Home = () => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  const menProducts = filteredProducts.filter(
    (item) => item.category === "men's clothing"
  );

  const womenProducts = filteredProducts.filter(
    (item) => item.category === "women's clothing"
  );

  return (
    <div className="py-16">
      <section>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="pb-4 uppercase text-2xl font-bold uderline-t">
              Men category
            </h1>
            <IoMdArrowForward className="text-2xl" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]  ">
            {menProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="pb-4 uppercase text-2xl font-bold uderline-t">
              Women category
            </h1>
            <IoMdArrowForward className="text-2xl" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]  ">
            {womenProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
