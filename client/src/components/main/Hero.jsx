import React from "react";
import HeroImg from "assets/images/main/hero.png";
import Button from "./buttons/Button";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-16">
      <div className="w-full h-full max-w-screen-xl px-4 mx-auto">
        <div className="w-full pt-12 pb-8 bg-primary-500 rounded-xl">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-7 p-10">
              <h1 className="text-6xl font-bold text-white">
                Discover the Latest Trends. Shop Now!
              </h1>
              <p className="text-md text-gray-100 mt-4">
                Stay ahead of the fashion game with our curated collections.
                From everyday essentials to statement pieces.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <Button
                  type="link"
                  variant="secondary"
                  size="lg"
                  href="/products"
                >
                  Shop Now <FaArrowRight size={20} />
                </Button>
              </div>
            </div>
            <div className="col-span-5">
              <img
                src={HeroImg}
                alt=""
                className="w-full object-cover h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
