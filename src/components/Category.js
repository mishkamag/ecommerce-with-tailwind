import React from "react";
import { Link } from "react-scroll";

const Category = (props) => {
  const { to, offset, src, name } = props;

  return (
    <div className="space-y-2 text-center cursor-pointer">
      <div className="w-24 h-16 flex items-center justify-center rounded-md pb-3">
        <Link to={to} smooth="true" offset={offset} duration={500}>
          <img src={src} alt="mobile" />
        </Link>
      </div>
      <h1 className="font-semibold">{name}</h1>
    </div>
  );
};

export default Category;
