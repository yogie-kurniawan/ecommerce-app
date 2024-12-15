import { useEffect, useState, useRef } from "react";
import { MdClose } from "react-icons/md";
import CartItem from "components/main/cart/CartItem";
import Button from "components/main/buttons/Button";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems, subTotal, discountTotal, total, loading, error } =
    useSelector((state) => state.cart);

  const handleRemoveItem = (id) => {};

  return (
    <section className="bg-white pt-16">
      <div className="w-full max-w-screen-xl min-h-screen px-4 py-16 mx-auto relative">
        <div className="flex gap-4 w-full">
          <div className="flex-grow">
            <div className="w-full flex justify-between items-center">
              <div>
                <h3 className="text-lg">
                  My Chart ({cartItems.length}{" "}
                  {cartItems.length > 1 ? `items` : "item"})
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-2 py-4">
              {cartItems.map((item, id) => (
                <CartItem
                  product={item}
                  handleRemoveItem={handleRemoveItem}
                  key={id}
                />
              ))}
            </div>
          </div>
          <div className="w-[400px] w-ful">
            <div className="border border-gray-200 p-8 rounded-lg w-full">
              <div className="flex justify-between items-center text-md text-gray-700 mb-1">
                Subtotal : <span>Rp. {subTotal}</span>
              </div>
              <div className="flex justify-between items-center text-md text-gray-700 mb-1">
                Discount : <span>Rp. {discountTotal}</span>
              </div>
              <div className="flex justify-between items-center font-semibold text-md text-gray-700">
                Total : <span className="text-2xl">Rp. {subTotal}</span>
              </div>

              <div className="mt-8 flex justify-center items-start">
                <Button
                  variant={"primary"}
                  size="lg"
                  type="link"
                  href="/checkout"
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
