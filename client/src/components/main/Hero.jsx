import React from "react";
import HeroImg from "assets/images/main/hero.png";
import Button from "./buttons/Button";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="md:min-h-[300px] pt-24">
      <div className="w-full h-full max-w-screen-xl px-4 mx-auto">
        <div className="w-full h-full bg-primary-light rounded-xl">
          <div className="w-full grid grid-cols-12">
            <div className="col-span-12 lg:col-span-7 p-4 md:p-12">
              <h1 className="text-center md:text-start text-2xl md:text-4xl lg:text-6xl font-semibold text-primary-dark">
                Discover the Latest Trends. Shop Now!
              </h1>
              <div className="w-full mt-4 md:mt-8 flex items-center justify-center md:justify-start">
                <Button
                  type="link"
                  variant="secondary"
                  size="lg"
                  href="/products"
                >
                  Shop Now
                </Button>
              </div>
            </div>
            <div className="hidden md:col-span-12 lg:col-span-5 pt-4">
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
