import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../store/CartContext";
import { ProductContext } from "../store/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    <section className="h-creen flex justify-center items-center">
      Loading...
    </section>;
  }

  const { title, price, description, image } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={image}
              alt={title}
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-[#008ECC] font-bold mb-6">
              $ {price}
            </div>
            <p className="mb-8 ">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-[#008ECC] px-8 py-3 text-white hover:scale-110 duration-300"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
