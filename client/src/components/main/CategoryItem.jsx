import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ category }) => {
  return (
    <Link href="products/category">
      <div className="bg-white border border-gray-200 p-8 md:w-[120px] h-[120px] flex flex-col item-center justify-center gap-2 hover:scale-95 transition-all duration-300 ease-in-out">
        <img src={category.image} alt="" className="object-contain w-full" />
        <span className="text-center">{category.title}</span>
      </div>
    </Link>
  );
};

export default ProductItem;
