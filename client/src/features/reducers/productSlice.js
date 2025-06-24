import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "features/actions/productAction";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "admin/fetchProducts",
  async () => {
    const response = await getProducts();
    return response.products;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      const id = action.payload;
      const product = state.products.filter((product) => product._id === id);
      return product;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { getProduct } = productSlice.actions;

export default productSlice.reducer;
