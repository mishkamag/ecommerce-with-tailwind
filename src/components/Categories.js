import React from "react";
import mobile from "../assets/images/mobile.png";
import furniture from "../assets/images/furniture.png";
import watches from "../assets/images/watches.png";
import electronics from "../assets/images/electronics.png";

const Categories = () => {
  return (
    <div className="w-11/12 mt-20 ">
      <div className="flex justify-around items-center	">
        <div className="space-y-2 text-center cursor-pointer">
          <div className="w-12 h-16 flex items-center justify-center rounded-md">
            <img src={mobile} alt="mobile" />
          </div>
          <h1 className="font-semibold">Mobiles</h1>
        </div>
        <div className="space-y-2 text-center cursor-pointer">
          <div className="w-24 h-16 flex items-center justify-center rounded-md">
            <img src={watches} alt="watches" />
          </div>
          <h1 className="font-semibold">Watches</h1>
        </div>
        <div className="space-y-2 text-center cursor-pointer">
          <div className="w-24 h-16 flex items-center justify-center rounded-md">
            <img src={furniture} alt="Furniture" />
          </div>
          <h1 className="font-semibold">Furnitures</h1>
        </div>
        <div className="space-y-2 text-center cursor-pointer">
          <div className="w-24 h-16 flex items-center justify-center rounded-md">
            <img src={electronics} alt="electornics" />
          </div>
          <h1 className="font-semibold">Electronics</h1>
        </div>
      </div>
    </div>
  );
};

export default Categories;
