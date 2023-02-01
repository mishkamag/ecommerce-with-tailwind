import React, { useContext } from "react";
import { SidebarContext } from "../store/SidebarContext";
import { IoMdArrowForward } from "react-icons/io";
import { CartContext } from "../store/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, totalPrice } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] sm:w-[70%] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag</div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col py-2  h-[450px] lg:h-[480px] overflow-y-auto overflow-x-hidden border-b ">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>

      <div className=" bg-gray-200  w-full flex justify-center items-center py-4">
        <div>
          <div className="font-semibold">
            <span className="mr-2">Total:</span>$
            {parseFloat(totalPrice).toFixed(2)}
          </div>
        </div>
      </div>
      <Link
        to={"//"}
        className="bg-[#008ECC] flex p-4 justify-center items-center w-full font-medium mt-4 text-white"
      >
        Checkout
      </Link>
    </div>
  );
};

export default SideBar;
