import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";

const Invoice = () => {
  const { cart, totalPrice } = useContext(CartContext);

  console.log(cart);

  return (
    <div className="container">
      <header className=" bg-white px-4 py-6 border-b border-gray-200 sm:px-6">
        <h1>Ecomerce</h1>
        <h3>Kutaisi</h3>
        <h3>Kutaisi</h3>
        <h3>Kutaisi</h3>
        <h3>Kutaisi</h3>
      </header>

      <div className="bg-white p-6 rounded-lg shadow-md max-h-[450px] lg:max-h-[480px] overflow-y-auto overflow-x-hidden ">
        <table className="w-full text-left">
          <thead>
            <tr className="text-sm font-medium text-white uppercase border bg-gray-700 ">
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index} className="text-sm text-gray-700">
                <td className="py-3 px-4 border font-semibold">{item.title}</td>
                <td className="py-3 px-4 border">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </td>
                <td className="py-3 px-4 border font-semibold">
                  {item.amount}
                </td>
                <td className="py-3 px-4 border font-bold">{`$ ${(
                  item.price * item.amount
                ).toFixed(2)}`}</td>
              </tr>
            ))}
            <h1 className="text-red-700 uppercase text-xl">
              {totalPrice.toFixed(2)}
            </h1>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoice;
