import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { CartContext } from "../store/CartContext";

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b w-full ">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="title" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2 ">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px]  hover:uderline"
            >
              {title}
            </Link>
            <div
              onClick={() => {
                removeFromCart(id);
              }}
            >
              <IoMdClose className="text-gray-500 text-xl hover:text-red-500 hover:scale-110 transition cursor-pointer " />
            </div>
          </div>

          <div className="flex  gap-x-2 h-[35px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border font-medium">
              <div
                onClick={() => {
                  decreaseAmount(id);
                }}
                className="flex-1 flex justify-center items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => {
                  increaseAmount(id);
                }}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>

            <div className="flex-1 flex justify-end items-center ">
              $ {price}
            </div>
            <div className="flex-1 flex justify-end items-center font-medium ">{`$ ${(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
