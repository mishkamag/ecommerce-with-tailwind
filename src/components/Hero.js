import React, { useEffect, useRef, useState } from "react";
import img1 from "../assets/sliderImg/img1.png";
import img2 from "../assets/sliderImg/img2.png";
import img3 from "../assets/sliderImg/img3.png";
import img4 from "../assets/sliderImg/img4.png";
import img5 from "../assets/sliderImg/img5.png";

const sliderImages = [img1, img2, img3, img4, img5];
let count = 0;

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const sliderRef = useRef();

  const startSlider = () => {
    setInterval(() => {
      handleOnNext();
    }, 3000);
  };

  useEffect(() => {
    startSlider();
  }, []);

  const handleOnNext = () => {
    count = (count + 1) % sliderImages.length;
    setImageIndex(count);
  };

  const handleOnPrev = () => {
    const productsLength = sliderImages.length;
    count = (imageIndex + productsLength - 1) % productsLength;
    setImageIndex(count);
  };

  console.log(sliderRef);
  return (
    <div ref={sliderRef} className="w-full select-none relative pt-10 flex">
      <img src={sliderImages[imageIndex]} alt="" />
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button onClick={handleOnPrev}>Previus</button>
        <button onClick={handleOnNext}>Next</button>
      </div>
    </div>
  );
};

export default Hero;
