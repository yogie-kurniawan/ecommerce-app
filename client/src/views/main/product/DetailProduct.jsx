import React, { useState, useEffect } from "react";
import ProductItem from "components/main/product/ProductItem";
import SectionTitle from "components/main/SectionTitle";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const dataProduct = [
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
];
const categories = [
  {
    name: "Hodie",
    slug: "hodie",
  },
];
const Product = () => {
  const [searchParams] = useSearchParams();
  const [cat, setCat] = useState(searchParams.get("cat") ?? "");

  useEffect(() => {
    setCat(searchParams.get("cat"));
  }, [searchParams]);

  return (
    <section className="bg-white pt-16">
      <div className="w-full max-w-screen-xl px-4 pt-10 pb-8 mx-auto relative">
        <div>
          <div className="flex">
            <div>
              <div className="w-[230px] bg-white rounded-lg border border-gray-200">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-normal text-gray-900">Categories</h3>
                </div>
                <div className="p-4">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
