import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "features/reducers/cartSlice";
import React from "react";
import { FaPlus, FaMinus, FaRegTrashCan } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa6";
import currencyFormat from "utils/currencyFormat";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <article className="w-full px-4 py-2">
      <div className="flex gap-2">
        <div className="flex gap-2">
          <a href={`/product/${product?.slug}`} className="flex gap-4">
            <div className="w-12 md:w-16 h-12 md:h-16 bg-gray-100 border border-gray-300 rounded-md overflow-hidden">
              <img
                src={product.image}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-[300px]">
              <h5 className="text-sm md:text-md font-medium text-gray-900">
                {product?.title}
              </h5>
              <p className="text-sm md:text-md text-gray-900 font-mendium">
                {currencyFormat(product?.price)}
              </p>
              <div className="w-full flex items-center justify-between mb-2">
                <div className="flex gap items-center text-[10px]">
                  {[1, 2, 3, 4, 5].map((item, id) => (
                    <span key={id} className="text-yellow-500">
                      <FaStar />
                    </span>
                  ))}
                  <span className="text-gray-700">(120)</span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="flex justify-between items-center md:justify-center gap-8">
          <div className="flex">
            <div className="bg-gray-100 rounded-full flex items-center justify-center px-1 py-[0.05rem] md:py-2 md:px-4">
              <span
                onClick={() => {
                  dispatch(increaseQty(product?.id));
                }}
                className="cursor-pointer p-2"
              >
                <FaPlus className="w-3 h-3 md:w-4 md:h-4 text-gray-400 hover:text-gray-700 transition-all ease-in-out duration-300" />
              </span>
              <span className="text-center w-10 md:w-12 p-1 text-sm md:text-md outline-none text-gray-700 hover:text-gray-700 appearance-none">
                {product?.qty}
              </span>
              <span
                onClick={() => {
                  dispatch(decreaseQty(product?.id));
                }}
                className="cursor-pointer p-2"
              >
                <FaMinus className="w-3 h-3 md:w-4 md:h-4 text-gray-400 hover:text-gray-700 transition-all ease-in-out duration-300" />
              </span>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <h5 className="text-md md:text-md font-medium text-gray-600">
              {currencyFormat(product?.price * product?.qty)}
            </h5>
          </div>
          <div className="flex items-center md:justify-center">
            <span className="cursor-pointer flex items-center justify-center gap-2 outline-none p-1 text-md hover:text-red-500 text-gray-500 transition-all duration-300 ease-in-out">
              <FaRegTrashCan
                size={20}
                onClick={() => {
                  dispatch(removeFromCart(product.id));
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
