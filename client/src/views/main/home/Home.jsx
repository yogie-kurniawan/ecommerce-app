import React, { useEffect } from "react";
import Hero from "components/main/Hero";
import ProductRow from "components/main/product/ProductRow";
import HomeCategory from "components/main/category/HomeCategory";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "features/reducers/productSlice";
import { getCart } from "features/reducers/cartSlice";

function Home() {
  const dispatch = useDispatch();
  const {
    products,
    loading: productLoading,
    error: productError,
  } = useSelector((state) => state.product);

  const {
    cartItems,
    loading: cartLoading,
    error: cartError,
  } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(getCart());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <HomeCategory />
      <ProductRow
        title="Best Products"
        products={products}
        loading={productLoading}
        error={productError}
      />
      <ProductRow
        title="Recomended Products"
        products={products}
        loading={cartLoading}
        error={cartError}
      />
    </>
  );
}

export default Home;
