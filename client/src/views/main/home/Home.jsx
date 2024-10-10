import React from "react";
import Hero from "components/main/Hero";
import HomeCategory from "components/main/HomeCategory";
import HomeProduct from "components/main/HomeProduct";
import HomeRecommended from "components/main/HomeRecommended";

function Home() {
  return (
    <>
      <Hero />
      <HomeCategory />
      <HomeProduct />
      <HomeRecommended />
    </>
  );
}

export default Home;
