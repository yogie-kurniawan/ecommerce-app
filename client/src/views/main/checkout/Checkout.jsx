import { useEffect, useState, useRef } from "react";
import CartItem from "components/main/cart/CartItem";
import Button from "components/main/buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "features/reducers/cartSlice";
import currencyFormat from "utils/currencyFormat";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems, subTotal, discountTotal, total, loading, error } =
    useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <section className="bg-white pt-16">
      <div className="w-full max-w-screen-xl min-h-screen px-4 py-10 md:py-16 mx-auto relative">
        <div className="flex flex-col md:flex-row gap-4 w-full">
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
                <CartItem product={item} key={id} />
              ))}
            </div>
          </div>
          <div className="w-full md:w-[400px] w-ful">
            <div className="border border-gray-200 p-8 rounded-lg w-full">
              <div className="flex justify-between items-center text-md text-gray-700 mb-1">
                Subtotal : <span>{currencyFormat(subTotal)}</span>
              </div>
              <div className="flex justify-between items-center text-md text-gray-700 mb-1">
                Discount : <span>{currencyFormat(discountTotal)}</span>
              </div>
              <div className="flex justify-between items-center font-semibold text-md text-gray-700">
                Total :{" "}
                <span className="text-2xl">{currencyFormat(subTotal)}</span>
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
