import React from "react";
import Button from "../buttons/Button";
import { FaStar } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "features/reducers/cartSlice";
import currencyFormat from "utils/currencyFormat";
import { showToast } from "components/main/alert";
const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    showToast("Product added to cart!", "success");
  };

  return (
    <div className="group rounded-md overflow-hidden">
      <div className="h-48 overflow-hidden bg-gray-100 rounded-md">
        <a href={`/product/${product?.id}`}>
          <img
            src={product.image}
            alt=""
            className="object-contain w-full h-full group-hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </a>
      </div>
      <div className="flex flex-col items-start gap-1 py-2 pb-4">
        <h5 className="text-sm font-medium text-gray-700">{product?.title}</h5>
        <p className="text-sm text-gray-700 font-medium">
          {currencyFormat(product?.price)}
        </p>

        <div className="w-full flex items-center justify-between mb-2">
          <div className="flex items-center text-[10px] gap-1">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((item, id) => (
                <span key={id} className="text-yellow-500">
                  <FaStar />
                </span>
              ))}
            </div>
            <span className="text-gray-700">(120)</span>
          </div>
          <Button variant="primary-outline" size="md" onClick={handleAddToCart}>
            <FaCartPlus />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
