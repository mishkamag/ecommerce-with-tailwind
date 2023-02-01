import React from "react";
// import mobile from "../assets/images/mobile.png";
// import furniture from "../assets/images/furniture.png";
// import watches from "../assets/images/watches.png";
import electronics from "../assets/categoryImg/electronics.png";
import Category from "./Category";

const Categories = () => {
  return (
    <div className="w-11/12 mt-20 ">
      <div className=" container flex justify-around items-center	">
        <Category to={"men"} offset={15} src={electronics} name={"Men"} />

        <Category to={"women"} offset={16} src={electronics} name={"Women"} />

        <Category
          to={"jewelery"}
          offset={18}
          src={electronics}
          name={"Jewelery"}
        />
        <Category
          to={"electronics"}
          offset={19}
          src={electronics}
          name={"Electronics"}
        />
      </div>
    </div>
  );
};

export default Categories;
