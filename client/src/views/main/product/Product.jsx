import React from "react";
import SectionTitle from "components/main/SectionTitle";
import ProductItem from "components/main/product/ProductItem";

const Product = () => {
  return (
    <section className="bg-gray-100 py-32">
      <div className="w-full max-w-screen-xl px-4 py-16 mx-auto">
        <div>
          <div>
            <SectionTitle>Our Products</SectionTitle>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 gap-4">
            {[1, 2, 3, 4, 5, 6].map((product, index) => (
              <ProductItem product={product} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
