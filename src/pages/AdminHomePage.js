import React, { useContext } from "react";
import { ProductContext } from "../store/ProductContext";

const AdminHomePage = () => {
  const { products } = useContext(ProductContext);
  const handleFetchProducts = () => {
    // Fetch products from Firestore and set the products state
  };
  return (
    <div className="flex justify-center items-center py-28 bg-slate-600">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <div className="flex justify-between mb-4">
          <input
            type="text"
            className="border p-2 rounded w-1/2"
            placeholder="Search products"
          />
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleFetchProducts}
          >
            Fetch Products
          </button>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Stock</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">{product.price}</td>
                <td className="px-4 py-2">{product.stock}</td>
                <td className="px-4 py-2">
                  <button className="bg-blue-500 text-white p-2 rounded">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white p-2 rounded ml-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHomePage;
