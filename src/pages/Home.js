import React, { useContext } from "react";
import { IoMdArrowForward } from "react-icons/io";

import { ProductContext } from "../store/ProductContext";
import Product from "../components/Product";
import Categories from "../components/Categories";

const Home = () => {
  const { products } = useContext(ProductContext);

  const menProducts = products.filter(
    (item) => item.category === "men's clothing"
  );

  const womenProducts = products.filter(
    (item) => item.category === "women's clothing"
  );

  const jeweleryProducts = products.filter(
    (item) => item.category === "jewelery"
  );

  const electronicsProducts = products.filter(
    (item) => item.category === "electronics"
  );

  return (
    <div>
      <Categories />
      <section id="men" className="py-16">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-[#008ECC] mb-4 pb-2  uppercase text-2xl font-bold border-b border-black">
              Men category
            </h1>
            <IoMdArrowForward className="text-2xl text-[#008ECC]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]  ">
            {menProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>

      <section id="women" className="py-16">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-[#008ECC] mb-4 pb-2  uppercase text-2xl font-bold border-b border-black  ">
              Women category
            </h1>
            <IoMdArrowForward className="text-2xl text-[#008ECC]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]  ">
            {womenProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>

      <section id="jewelery" className="py-16">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-[#008ECC] mb-4 pb-2  uppercase text-2xl font-bold border-b border-black  ">
              Jewelery category
            </h1>
            <IoMdArrowForward className="text-2xl text-[#008ECC]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]  ">
            {jeweleryProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>

      <section id="electronics" className="py-16">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-[#008ECC] mb-4 pb-2  uppercase text-2xl font-bold border-b border-black  ">
              Electronics category
            </h1>
            <IoMdArrowForward className="text-2xl text-[#008ECC]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]  ">
            {electronicsProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
