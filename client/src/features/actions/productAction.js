import { BASEAPIURL } from "constants/constant";
import axios from "axios";

export const getProducts = async () => {
  try {
    const results = await axios.get(`${BASEAPIURL}/products`);
    return results.data;
  } catch (error) {
    return error;
  }
};

export const getProduct = async (id) => {
  try {
    const results = await axios.get(`${BASEAPIURL}/products/${id}`);
    return results.data;
  } catch (error) {
    return error;
  }
};
