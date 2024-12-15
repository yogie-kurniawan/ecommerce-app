import { createSlice } from "@reduxjs/toolkit";

export const initialCartItems = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initialState = {
  cartItems: initialCartItems,
  subTotal: 0,
  discountTotal: 0,
  total: 0,
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCart(state, action) {
      const storedCart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      state.cartItems = storedCart;
    },
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cartItems.push({ ...item, qty: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      cartSlice.caseReducers.getSubTotal(state);
    },
    increaseQty(state, action) {
      const existingItem = state.cartItems.find((i) => i.id === action.payload);

      if (existingItem) {
        existingItem.qty += 1;
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
      cartSlice.caseReducers.getSubTotal(state);
    },
    decreaseQty(state, action) {
      const existingItem = state.cartItems.find((i) => i.id === action.payload);
      if (existingItem) {
        existingItem.qty -= 1;
        if (existingItem.qty === 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id != action.payload
          );
        }
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
      cartSlice.caseReducers.getSubTotal(state);
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id != action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      cartSlice.caseReducers.getSubTotal(state);
    },
    getSubTotal(state, action) {
      let subTotal = 0;
      state.cartItems.forEach((item) => {
        subTotal += item.price * item.qty;
      });
      state.subTotal = subTotal;
    },
    clearCart(state) {
      state.cartItems = [];
      state.subTotal = 0;
      localStorage.removeItem("cart");
      cartSlice.caseReducers.getSubTotal(state);
    },
  },
});
export const {
  getCart,
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  getSubTotal,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
