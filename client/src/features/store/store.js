import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/reducers/userSlice";
import userReducer from "features/reducers/userSlice";
import cartReducer from "features/reducers/cartSlice";
import productReducer from "features/reducers/productSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
  },
});

export default store;
