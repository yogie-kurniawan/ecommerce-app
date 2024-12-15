import React from "react";
import HeroImg from "assets/images/main/hero.png";
import Button from "./buttons/Button";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="md:min-h-[300px] pt-24">
      <div className="w-full h-full max-w-screen-xl px-4 mx-auto">
        <div className="w-full h-full bg-primary-light rounded-xl">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7 p-12">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-primary-dark">
                Discover the Latest Trends. Shop Now!
              </h1>
              <div className="mt-8 flex items-center gap-4">
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
            <div className="col-span-12 lg:col-span-5 pt-4">
              <img
                src={HeroImg}
                alt=""
                className="h-[300px] mx-auto object-cover lg:-translate-x-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
