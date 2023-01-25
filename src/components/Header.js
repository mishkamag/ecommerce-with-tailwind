import React, { useContext } from "react";
import { SidebarContext } from "../store/SidebarContext";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "../store/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  return (
    <header className="bg-[#008ECC] fixed w-full z-10 py-1 ">
      <div className="container mx-auto flex items-center justify-between h-[6vh] ">
        <Link to={"/"}>LOGO</Link>
        <div className="flex justify-center items-center gap-[25px] ">
          <div>
            <input type="text" placeholder="search" />
          </div>
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="cursor-pointer flex relative  "
          >
            <BsCart3 className="text-2xl " />
            <div className="absolute bg-red-500 rounded-full text-white text-[12px] w-[18px] h-[18px] -right-2 -bottom-2	flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
