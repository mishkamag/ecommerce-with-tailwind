import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";

const Invoice = () => {
  const { cart, totalPrice } = useContext(CartContext);

  console.log(cart);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <table className="w-full text-left">
        <thead>
          <tr className="text-sm font-medium text-gray-600 uppercase ">
            <th className="py-3 px-4">Category</th>
            <th className="py-3 px-4">Image</th>
            <th className="py-3 px-4">Title</th>
            <th className="py-3 px-4">Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index} className="text-sm text-gray-700">
              <td className="py-3 px-4">{item.category}</td>
              <td className="py-3 px-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-full"
                />
              </td>
              <td className="py-3 px-4">{item.title}</td>
              <td className="py-3 px-4">{item.price}</td>
            </tr>
          ))}
          <h1 className="text-red-700 uppercase text-xl">{totalPrice}</h1>
        </tbody>
      </table>
    </div>
  );
};

export default Invoice;
