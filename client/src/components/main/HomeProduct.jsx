import React from "react";
import ProductItem from "components/main/product/ProductItem";
import SectionTitle from "components/main/SectionTitle";
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
const HomeProduct = () => {
  return (
    <section className="bg-gray-100">
      <div className="w-full max-w-screen-xl px-4 py-16 mx-auto">
        <div>
          <div>
            <SectionTitle>Our Products</SectionTitle>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 py-8 gap-2">
            {dataProduct.map((product, index) => (
              <ProductItem product={product} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;
