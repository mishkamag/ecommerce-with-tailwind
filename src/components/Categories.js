import React from "react";
// import mobile from "../assets/images/mobile.png";
// import furniture from "../assets/images/furniture.png";
// import watches from "../assets/images/watches.png";
import electronics from "../assets/categoryImg/electronics.png";
import { Link } from "react-scroll";

const Categories = () => {
  return (
    <div className="w-11/12 mt-20 ">
      <div className=" container flex justify-around items-center	">
        <div className="space-y-2 text-center cursor-pointer">
          <div className="w-24 h-16 flex items-center justify-center rounded-md pb-3">
            <Link to="men" smooth="true" offset={15} duration={500}>
              <img src={electronics} alt="mobile" />
            </Link>
          </div>
          <h1 className="font-semibold">Men</h1>
        </div>

        <div className="space-y-2 text-center cursor-pointer">
          <div className="w-24 h-16 flex items-center justify-center rounded-md pb-3">
            <Link to="women" smooth="true" offset={16} duration={500}>
              <img src={electronics} alt="mobile" />
            </Link>
          </div>
          <h1 className="font-semibold">Women</h1>
        </div>

        <div className="space-y-2 text-center cursor-pointer">
          <div className="w-24 h-16 flex items-center justify-center rounded-md pb-3">
            <Link to="jewelery" smooth="true" offset={18} duration={500}>
              <img src={electronics} alt="mobile" />
            </Link>
          </div>
          <h1 className="font-semibold">Jewelery</h1>
        </div>
        <div className="space-y-2 text-center cursor-pointer">
          <div className="w-24 h-16 flex items-center justify-center rounded-md pb-3">
            <Link to="electronics" smooth="true" offset={19} duration={500}>
              <img src={electronics} alt="mobile" />
            </Link>
          </div>
          <h1 className="font-semibold">Electronics</h1>
        </div>
      </div>
    </div>
  );
};

export default Categories;
