import React, { useEffect, useState, useRef } from "react";
import { MdClose } from "react-icons/md";
import CartItem from "./CartItem";
import Button from "../buttons/Button";

const dataProduct = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/71qoLNg7CcL._AC_SX522_.jpg",
    title: "Jaket bertenaga super",
    price: "2000000",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/61FRgVZBhzL._AC_UY1000_.jpg",
    title: "Jaket bertenaga super",
    price: "2000000",
  },
];

const Cart = ({ isCartVisible, closeCart }) => {
  const [products, setProducts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const basketRef = useRef(null);

  useEffect(() => {
    setProducts(dataProduct);
    let st = 0;
    products.forEach((product) => {
      st += product.price * 1;
    });
    setSubTotal(st);
  }, []);

  const handleRemoveItem = (id) => {
    setProducts(products.filter((product) => product.id != id));
  };

  const handleClickOutside = (e) => {
    if (basketRef.current && !basketRef.current.contains(e.target)) {
      closeCart();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={basketRef}
      className={`${
        isCartVisible ? "right-0" : "right-[-100%]"
      } w-full flex flex-col fixed top-0 md:w-[800px] z-[1001] bg-white h-screen shadow-xl transition-all duration-300 ease-in-out`}
    >
      <div className="p-8">
        <div className="w-full flex justify-between items-center border-b border-gray-200">
          <div>
            <h3 className="text-lg">
              My Chart ({products.length}{" "}
              {products.length > 1 ? `items` : "item"})
            </h3>
          </div>
          <div>
            <button
              onClick={closeCart}
              className="flex items-center justify-center gap-2 outline-none p-1 text-md text-gray-500 hover:text-gray-900 transition-all duration-300 ease-in-out"
            >
              <MdClose size={30} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1 py-4">
          {products.map((item, id) => (
            <CartItem
              product={item}
              handleRemoveItem={handleRemoveItem}
              key={id}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center w-full absolute bottom-0 border-t border-gray-200  p-8">
        <div>
          <h4 className="text-sm text-gray-700 mb-4">Subtotal Amount :</h4>
          <h3 className="text-2xl font-semibold text-gray-900">
            Rp. {subTotal}
          </h3>
        </div>
        <div>
          <Button variant={"primary"} size="lg" type="link" href="/checkout">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
