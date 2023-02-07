import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";

const Invoice = () => {
  const { cart, totalPrice } = useContext(CartContext);

  return (
    <div className="">
      <header className="  bg-gray-100 px-4 py-6 border-b border-gray-200 sm:px-6 flex justify-between">
        <div>
          <div className="mb-4 w-[90px]">
            <img
              src="https://www.pngitem.com/pimgs/m/161-1619330_logos-e-commerce-png-transparent-png.png"
              alt=""
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="font-bold mb-2">From:</div>
          <div className="text-gray-600">
            Ecommerce <br />
            Buxaidze str 19/77 <br />
            Kutaisi 4600
          </div>
        </div>
      </header>

      <div className="bg-white  rounded-lg shadow-md max-h-[300px] lg:max-h-[330px] overflow-y-auto overflow-x-hidden  ">
        <table className="w-full text-left">
          <thead>
            <tr className="text-sm font-medium text-white uppercase border bg-[#008ECC]  ">
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
          </tbody>
        </table>
      </div>
      <div className="flex w-full ">
        <div className="  bg-[#008ECC] text-white font-bold py-2 px-12 rounded   mt-4">
          TOTAL: {totalPrice.toFixed(2)}
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <input
            type="email"
            placeholder="Email"
            className="appearance-none border rounded p-2 w-55 mr-2"
          />

          <button className="bg-[#008ECC] hover:bg-[#008EAC] text-white font-medium py-2 px-4 rounded ml-2">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
