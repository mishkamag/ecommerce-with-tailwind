import React, { useContext } from "react";
import { SidebarContext } from "../store/SidebarContext";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "../store/CartContext";
import { Link } from "react-router-dom";
import { SearchContext } from "../store/SearchContext";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  const { searchTerm, isModalOpen, inputHandler } = useContext(SearchContext);

  return (
    <header className="bg-[#008ECC] fixed w-full z-10 py-1 ">
      <div className="container mx-auto flex items-center justify-between h-[6vh] ">
        <Link to={"/"}>LOGO</Link>
        <div className="flex justify-center items-center gap-[25px] ">
          <div className="relative">
            <input
              type="search"
              className="form-input py-2 px-3  block w-[300px] leading-5 rounded-full transition duration-150 ease-in-out bg-white border border-gray-300 placeholder-gray-500  focus:outline-none focus:shadow-outline-blue focus:border-blue-300 placeholder-opacity-25"
              placeholder="Search..."
              onChange={inputHandler}
              value={searchTerm}
            />
            {isModalOpen && (
              <div className="absolute bg-red-600 w-[300px]">
                Here will be matched items
              </div>
            )}
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
