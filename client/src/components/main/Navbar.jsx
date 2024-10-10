import React, { useEffect, useState } from "react";
import { menu } from "./menu";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Button from "./buttons/Button";

const Navbar = ({ toggleCart }) => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-[1000] ${
          isScrolledDown ? "h-16 bg-white shadow-md" : "h-30 pt-4 md:pt-8"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="h-full max-w-screen-xl mx-auto px-4 py-3 ">
          <div className="h-full flex justify-between">
            <div className="flex items-center justify-between md:justify-start gap-10">
              <div className="">
                <a href="/" className="text-xl">
                  LOGO
                </a>
              </div>
              <div className="hidden md:block">
                <ul className="flex gap-4">
                  {menu.map((link) => {
                    const { id, url, text } = link;
                    return (
                      <li key={id}>
                        <NavLink
                          to={url}
                          className={({ isActive }) =>
                            `text-sm capitalize font-sm hover:text-primary-500 ${
                              isActive ? "text-primary-500" : "text-gray-600"
                            }`
                          }
                        >
                          {text}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="block md:hidden">hanm</div>
            </div>
            <div
              className="flex items-center gap-8
            "
            >
              <div className="items-center gap-4 hidden md:flex">
                <div>
                  <input
                    type="search"
                    className="border border-gray-300 focus:border-gray-400 px-2 py-1 text-sm outline-none"
                    placeholder="Search..."
                  />
                </div>
                <div className="text-gray-700">
                  <span
                    className="p-1 flex items-center justify-center hover:bg-gray-200 transition-all duration-300 ease-in cursor-pointer w-12 h-12 rounded-full"
                    onClick={toggleCart}
                  >
                    <HiOutlineShoppingBag size={20} />
                  </span>
                </div>
              </div>
              <div className="md:items-center gap-2 hidden md:flex md:justify-center">
                <Button href="/signin" type="link" variant="primary" size="sm">
                  Sign In
                </Button>
                <Button
                  href="/signup"
                  type="link"
                  variant="outline-secondary"
                  size="sm"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
