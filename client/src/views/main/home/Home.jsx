import React, { useEffect } from "react";
import Hero from "components/main/Hero";
import ProductRow from "components/main/product/ProductRow";
import HomeCategory from "components/main/category/HomeCategory";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "features/reducers/productSlice";

function Home() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <HomeCategory />
      <ProductRow title="Best Products" products={products} />
      <ProductRow title="Recomended Products" products={products} />
    </>
  );
}

export default Home;
