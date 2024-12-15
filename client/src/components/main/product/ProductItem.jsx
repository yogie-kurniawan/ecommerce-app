import React from "react";
import Button from "../buttons/Button";
import { FaStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "features/reducers/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="group rounded-md overflow-hidden">
      <div className="h-48 overflow-hidden bg-[#fafafa] rounded-md">
        <a href={`/product/${product?.id}`}>
          <img
            src={product.image}
            alt=""
            className="object-contain w-full h-full group-hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </a>
      </div>
      <div className="flex flex-col items-start gap-2 px-2 pt-2 pb-4">
        <h5 className="text-md font-medium text-gray-900">{product?.title}</h5>
        <p className="text-md text-gray-900 font-mendium">Rp500.000</p>

        <div className="w-full flex items-center justify-between mb-2">
          <div className="flex gap-1 items-center text-xs">
            {[1, 2, 3, 4, 5].map((item, id) => (
              <span key={id} className="text-primary-dark">
                <FaStar />
              </span>
            ))}
            <span className="text-gray-700">(120)</span>
          </div>
        </div>
        <Button
          variant="primary-outline"
          size="sm"
          onClick={() => {
            dispatch(addToCart(product));
          }}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
