import React, { useEffect, useRef, useState } from "react";
import img1 from "../assets/sliderImg/img1.png";
import img2 from "../assets/sliderImg/img2.png";
import img3 from "../assets/sliderImg/img3.png";
import img4 from "../assets/sliderImg/img4.png";
import img5 from "../assets/sliderImg/img5.png";
import { FaArrowCircleLeft } from "react-icons/fa";
import { BsArrowRightCircleFill } from "react-icons/bs";

const sliderImages = [img1, img2, img3, img4, img5];
let count = 0;

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const sliderRef = useRef();

  const startSlider = () => {
    setInterval(() => {
      handleOnNext();
    }, 5000);
  };
  const handleOnNext = () => {
    count = (count + 1) % sliderImages.length;
    setImageIndex(count);
    if (sliderRef.current) {
      sliderRef.current.classList.add("fade-anim");
    }
  };

  useEffect(() => {
    sliderRef.current.addEventListener("animationend", removeAnimation);
    startSlider();
    // eslint-disable-next-line
  }, []);

  const handleOnPrev = () => {
    const productsLength = sliderImages.length;
    count = (imageIndex + productsLength - 1) % productsLength;
    setImageIndex(count);
    sliderRef.current.classList.add("fade-anim");
  };

  const removeAnimation = () => {
    sliderRef.current.classList.remove("fade-anim");
  };

  return (
    <div ref={sliderRef} className="w-full select-none relative pt-10 flex">
      <img src={sliderImages[imageIndex]} alt="" />
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between  text-2xl text-gray-500 ">
        <button
          className="hover:text-gray-800  hover:scale-100"
          onClick={handleOnPrev}
        >
          <FaArrowCircleLeft />
        </button>
        <button
          className="hover:text-gray-800  hover:scale-100"
          onClick={handleOnNext}
        >
          <BsArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Hero;
