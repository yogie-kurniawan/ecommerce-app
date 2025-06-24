import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const initialUser = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initialState = {
  user: null,
  isAuthenticated: false,
  status: "",
  message: null,
};

export const signin = createAsyncThunk(
  "auth/signin",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER}/auth/signin`,
        user
      );
      localStorage.setItem("token", JSON.stringify(response.data.token));
      return response.data;
    } catch (err) {
      if (err.response) {
        return rejectWithValue(err.response.data.message || "Login failed!");
      } else if (err.request) {
        return rejectWithValue(
          "No response from the server. Please try again later."
        );
      } else {
        return rejectWithValue(err.message || "Something went wrong");
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        state.status = "loading";
        state.message = null;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuthenticated = true;
        state.message = action.payload.message;
      })
      .addCase(signin.rejected, (state, action) => {
        state.status = "failed";
        state.message = state.message =
          action.payload || "An unknown error occurred";
      });
  },
});

export default authSlice.reducer;
