import React from "react";

const Detal = ({ header, value }) => {
  return (
    <div className="relative mb-5">
      <h1 className="block font-bold mb-2 text-gray-700">{header}</h1>
      <p className="w-full p-2 bg-gray-200 rounded-lg">{value}</p>
    </div>
  );
};

export default Detal;
