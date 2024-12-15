import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "features/reducers/cartSlice";
import productReducer from "features/reducers/productSlice";
import userReducer from "features/reducers/userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
  },
});

export default store;
