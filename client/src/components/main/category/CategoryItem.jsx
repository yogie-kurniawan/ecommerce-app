import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ category }) => {
  return (
    <Link to={`products?cat=${category.title}`}>
      <div className="bg-[#fafafa] rounded-md p-4 md:p-8 w-[100px] h-[100px] md:w-[120px] md:h-[120px] flex flex-col items-center justify-center gap-2 hover:scale-95 transition-all duration-300 ease-in-out">
        <img src={category.image} alt="" className="object-contain w-full" />
        <span className="text-center text-xs">{category.title}</span>
      </div>
    </Link>
  );
};

export default ProductItem;
