import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../store/CartContext";
import { ProductContext } from "../store/ProductContext";
import miniImg1 from "../assets/categoryImg/electronics.png";
import miniImg2 from "../assets/categoryImg/furniture.png";
import miniImg3 from "../assets/categoryImg/watches.png";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products?.find((item) => {
    return item.id === parseInt(id);
  });

  const { title, price, description, image } = product || {};

  let defaultImg = image;

  const [currentBigImage, setCurrentBigImage] = useState(
    product?.image || image
  );

  const changeImgHandler = (imgSrc) => {
    setCurrentBigImage(imgSrc);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={currentBigImage}
              alt={title}
              onError={() => setCurrentBigImage(defaultImg)}
            />
          </div>

          <div className="flex justify-between lg:flex lg:flex-col">
            <div
              onClick={() => changeImgHandler(miniImg1)}
              className="flex flex-1 justify-center items-center border mr-4 cursor-pointer "
            >
              <img
                className="w-[80px] lg:max-w-sm"
                src={miniImg1}
                alt={title}
              />
            </div>
            <div
              onClick={() => changeImgHandler(miniImg2)}
              className="flex flex-1 justify-center items-center border mr-4 cursor-pointer "
            >
              <img
                className="w-[80px] lg:max-w-sm"
                src={miniImg2}
                alt={title}
              />
            </div>
            <div
              onClick={() => changeImgHandler(miniImg3)}
              className="flex flex-1 justify-center items-center border mr-4 cursor-pointer"
            >
              <img
                className="w-[80px] lg:max-w-sm"
                src={miniImg3}
                alt={title}
              />
            </div>
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

// import React, { useState, useContext } from "react";
// import { useParams } from "react-router-dom";
// import { ProductContext } from "../store/ProductContext";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const { products } = useContext(ProductContext);
//   const product = products.find((item) => item.id === parseInt(id));

//   const [currentImage, setCurrentImage] = useState(product.image);

//   const handleImageChange = (newImage) => {
//     setCurrentImage(newImage);
//   };

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <img src={currentImage} alt={product.title} />

//       <div>
//         {product.images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={product.title}
//             onClick={() => handleImageChange(image)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
