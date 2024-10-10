import React from "react";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";

const ProductItem = ({ product }) => {
  return (
    <div className="group bg-white shadow-sm">
      <div className="h-48 group-hover:scale-95 transition-all duration-300 ease-in-out">
        <img
          src={product.image}
          alt=""
          className="object-contain w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2 px-2 pt-2 pb-4">
        <h5 className="text-sm font-semibold text-gray-900">{product.title}</h5>
        <p className="text-sm text-gray-900 font-semibold">Rp500.000</p>
        <div className="flex items-start justify-end">
          <Button
            type="link"
            variant="outline-primary"
            href="/signin"
            size="sm"
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
