import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import ProductItem from "components/main/product/ProductItem";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "features/reducers/productSlice";

const categories = [
  {
    name: "Hodie",
    slug: "hodie",
  },
];
const Product = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [cat, setCat] = useState(searchParams.get("cat") ?? "");
  const {
    products,
    loading: productLoading,
    error: productError,
  } = useSelector((state) => state.product);

  useEffect(() => {
    setCat(searchParams.get("cat"));
  }, [searchParams]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="bg-white pt-16">
      <div className="w-full max-w-screen-xl px-4 pt-10 pb-8 mx-auto relative">
        <div>
          <div className="flex">
            <div>
              <div className="w-[230px] bg-white rounded-lg border border-gray-200">
                <div className="p-2 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">Categories</h3>
                </div>
                <div className="p-2">
                  <div className="flex flex-col gap-2 items-start">
                    {categories.map((category, index) => (
                      <Link
                        key={index}
                        to={`/products?cat=${category?.slug}`}
                        className={`text-sm font-normal ${
                          category == cat ? "text-primary" : "text-gray-900"
                        } cursor-pointer hover:text-primary transition-all ease-in-out duration300`}
                      >
                        {category?.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              {cat && (
                <div className="px-4 py-2">
                  <h3 className="text-gray-400">
                    Showing{" "}
                    <span className="text-gray-700 text-lg font-bold">
                      {cat}
                    </span>
                  </h3>
                </div>
              )}
              <div className="grid sm:grid-cols-2 md:grid-cols-4 px-4 gap-2 items-start overflow-auto">
                {products.map((product, index) => (
                  <ProductItem product={product} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
