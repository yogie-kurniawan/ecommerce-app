import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ category }) => {
  return (
    <Link to={`products?cat=${category.title}`}>
      <div className="border rounded-md md:p-4 w-[50px] h-[50px] md:w-[120px] md:h-[120px] flex flex-col items-center justify-center gap-1 hover:scale-95 transition-all duration-300 ease-in-out">
        <img src={category.image} alt="" className="object-contain w-full" />
        <span className="text-center text-[0.5rem] md:text-xs">
          {category.title}
        </span>
      </div>
    </Link>
  );
};

export default ProductItem;
