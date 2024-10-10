import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus, FaRegTrashCan } from "react-icons/fa6";

const CartItem = ({ product, handleRemoveItem }) => {
  const [qty, setQty] = useState(1);

  const handleIncreaseQty = () => {
    setQty(qty + 1);
  };

  const handleDecreateQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  return (
    <article className="flex items-center gap-4 border border-gray-200 p-4">
      <div className="flex gap-8 flex-grow">
        <div className="w-16">
          <img
            src={product.image}
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-2 flex-grow">
          <h5 className="text-sm text-gray-700 font-medium">
            {product?.title}
          </h5>
          <p className="text-sm text-gray-700 font-medium">{qty}x</p>
          <p className="text-sm text-gray-700 font-medium">
            Rp.{product?.price}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={handleIncreaseQty}
          className="flex items-center justify-center outline-none text-gray-500 hover:text-gray-700 p-4 text-md border border-gray-200 w-12 h-12 transition-all duration-300 ease-in-out"
        >
          <FaPlus size={20} />
        </button>
        <input
          type="text"
          placeholder="1"
          value={qty}
          className="text-center border border-gray-200 w-20 h-12 p-4 text-md outline-none text-gray-500 hover:text-gray-700 appearance-none"
        />
        <button
          onClick={handleDecreateQty}
          className="flex items-center justify-center outline-none text-gray-500 hover:text-gray-700 p-4 text-md border border-gray-200 w-12 h-12 transition-all duration-300 ease-in-out"
        >
          <FaMinus size={20} />
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            handleRemoveItem(product.id);
          }}
          className="flex items-center justify-center gap-2 outline-none p-1 text-md hover:text-red-500 text-gray-500 transition-all duration-300 ease-in-out"
        >
          <FaRegTrashCan size={20} />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
