import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  adminList: [],
  loading: false,
  error: null,
};

export const fetchAdmins = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/admins");
  } catch (error) {
  }
};

const adminSlice = createSlice({
  name: "admin", // Name of the slice
  initialState,
  reducers: ,
});

export const {
  fetchAdminsStart,
  fetchAdminsSuccess,
  fetchAdminsFailure,
  addAdmin,
  removeAdmin,
} = adminSlice.actions;

export default adminSlice.reducer;
