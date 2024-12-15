import { BASEAPIURL } from "constants/constant";
import axios from "axios";

const products = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/71qoLNg7CcL._AC_SX522_.jpg",
    title: "Jaket bertenaga super and kjewg",
    price: "2000000",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/61FRgVZBhzL._AC_UY1000_.jpg",
    title: "Jaket bertenaga super awjeigwieg",
    price: "2000000",
  },
  {
    id: 2,
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7r991-lr1utphw098t83_tn.webp",
    title: "Jaket bertenaga super akjwiegiaweg",
    price: "2000000",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/61FRgVZBhzL._AC_UY1000_.jpg",
    title: "Jaket bertenaga super",
    price: "2000000",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/61FRgVZBhzL._AC_UY1000_.jpg",
    title: "Jaket bertenaga super",
    price: "2000000",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/61FRgVZBhzL._AC_UY1000_.jpg",
    title: "Jaket bertenaga super",
    price: "2000000",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/61FRgVZBhzL._AC_UY1000_.jpg",
    title: "Jaket bertenaga super",
    price: "2000000",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/61FRgVZBhzL._AC_UY1000_.jpg",
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

export const getProducts = async () => {
  try {
    // const results = await axios.get(`${BASEAPIURL}/products`);
    // return results.data;
    return products;
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