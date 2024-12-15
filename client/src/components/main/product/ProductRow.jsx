import React from "react";
import ProductItem from "components/main/product/ProductItem";
import SectionTitle from "components/main/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";

const ProductRow = ({ title, products }) => {
  return (
    <section className="bg-white">
      <div className="w-full max-w-screen-xl px-4 pt-8 pb-4 mx-auto">
        <div>
          <div>
            <SectionTitle>{title}</SectionTitle>
          </div>
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-btn-next",
                prevEl: ".swiper-btn-prev",
              }}
              breakpoints={{
                450: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                740: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                920: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1030: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
                1200: {
                  slidesPerView: 6,
                  spaceBetween: 10,
                },
              }}
              style={{ padding: "20px 0" }}
            >
              {products.map((product, index) => (
                <SwiperSlide key={index} style={{ alignSelf: "stretch" }}>
                  <ProductItem product={product} />
                </SwiperSlide>
              ))}
              <div className="swiper-btn-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg cursor-pointer transition-all ease-in-out duration-300">
                <FaAngleLeft className="w-6 h-6" />
              </div>
              <div className="swiper-btn-next absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg cursor-pointer transition-all ease-in-out duration-300">
                <FaAngleRight className="w-6 h-6" />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRow;
