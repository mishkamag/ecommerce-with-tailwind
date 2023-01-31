import React, { useContext } from "react";
import { ProductContext } from "../store/ProductContext";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import HomeSections from "../components/HomeSections";

const Home = () => {
  const { categoryFilter } = useContext(ProductContext);

  const menProducts = categoryFilter("men's clothing");
  const womenProducts = categoryFilter("women's clothing");
  const jeweleryProducts = categoryFilter("jewelery");
  const electronicsProducts = categoryFilter("electronics");

  return (
    <div>
      <Categories />

      <Hero />

      <HomeSections
        title={"Men category"}
        categoryProducts={menProducts}
        id={"men"}
      />
      <HomeSections
        title={"Women category"}
        categoryProducts={womenProducts}
        id={"women"}
      />
      <HomeSections
        title={"Jewelery category"}
        categoryProducts={jeweleryProducts}
        id={"jewelery"}
      />
      <HomeSections
        title={"Electronics category"}
        categoryProducts={electronicsProducts}
        id={"electronics"}
      />
    </div>
  );
};

export default Home;
