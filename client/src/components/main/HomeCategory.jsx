import React from "react";
import CategoryItem from "components/main/CategoryItem";
import SectionTitle from "components/main/SectionTitle";

const categories = [
  {
    image:
      "https://down-id.img.susercontent.com/file/dcd61dcb7c1448a132f49f938b0cb553@resize_w320_nl.webp",
    title: "Jacket",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/04dba508f1ad19629518defb94999ef9@resize_w320_nl.webp",
    title: "Trouser",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/5230277eefafad8611aaf703d3e99568@resize_w320_nl.webp",
    title: "Hoodie",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/3c8ff51aab1692a80c5883972a679168@resize_w320_nl.webp",
    title: "Jeans",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/dcd61dcb7c1448a132f49f938b0cb553@resize_w320_nl.webp",
    title: "Jacket",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/04dba508f1ad19629518defb94999ef9@resize_w320_nl.webp",
    title: "Trouser",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/5230277eefafad8611aaf703d3e99568@resize_w320_nl.webp",
    title: "Hoodie",
  },
  {
    image:
      "https://down-id.img.susercontent.com/file/3c8ff51aab1692a80c5883972a679168@resize_w320_nl.webp",
    title: "Jeans",
  },
];

const HomeCategory = () => {
  return (
    <section className="bg-white">
      <div className="w-full max-w-screen-xl px-4 py-16 mx-auto">
        <div>
          <div>
            <SectionTitle>Categories</SectionTitle>
          </div>
          <div className="flex items-center py-8 gap-1">
            {categories.map((category, index) => (
              <CategoryItem category={category} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCategory;
