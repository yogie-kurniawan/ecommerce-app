import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "features/reducers/cartSlice";
import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus, FaRegTrashCan } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa6";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <article className="flex gap-8">
      <div className="flex w-[400px] gap-4">
        <div className="w-28 h-28 bg-[#fafafa] rounded-md overflow-hidden p-4">
          <img
            src={product.image}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h5 className="text-md font-medium text-gray-900">
            {product?.title}
          </h5>
          <p className="text-md text-gray-900 font-mendium">
            Rp {product?.price}
          </p>
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
        </div>
      </div>
      <div className="flex items-start justify-center gap-2">
        <div className="bg-gray-100 rounded-full flex items-center justify-center py-4 px-8">
          <span
            onClick={() => {
              dispatch(increaseQty(product?.id));
            }}
            className="cursor-pointer p-2"
          >
            <FaPlus className="w-4 h-4 text-gray-400 hover:text-gray-700 transition-all ease-in-out duration-300" />
          </span>
          <span className="text-center w-12 p-1 text-md outline-none text-gray-700 hover:text-gray-700 appearance-none">
            {product?.qty}
          </span>
          <span
            onClick={() => {
              dispatch(decreaseQty(product?.id));
            }}
            className="cursor-pointer p-2"
          >
            <FaMinus className="w-4 h-4 text-gray-400 hover:text-gray-700 transition-all ease-in-out duration-300" />
          </span>
        </div>
      </div>
      <div>
        <span className="cursor-pointer flex items-center justify-center gap-2 outline-none p-1 text-md hover:text-red-500 text-gray-500 transition-all duration-300 ease-in-out">
          <FaRegTrashCan
            size={20}
            onClick={() => {
              dispatch(removeFromCart(product.id));
            }}
          />
        </span>
      </div>
    </article>
  );
};

export default CartItem;
