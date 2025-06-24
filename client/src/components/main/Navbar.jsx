import React, { useEffect, useState } from "react";
import { menu } from "./menu";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaBarsStaggered } from "react-icons/fa6";
import Button from "./buttons/Button";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-[1000] ${
          isScrolledDown ? "h-16 bg-white shadow-md" : "h-24"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="relative h-full max-w-screen-xl mx-auto px-4 py-3 ">
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
                            `text-md capitalize font-sm hover:text-primary ${
                              isActive ? "text-primary" : "text-gray-600"
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
            </div>
            <div
              className="flex items-center gap-8
            "
            >
              <div className="items-center gap-2 md:gap-4 flex">
                <div className="hidden lg:block">
                  <input
                    type="search"
                    className="border border-gray-300 focus:border-gray-400 rounded-md px-2 py-2 text-sm outline-none"
                    placeholder="Search..."
                  />
                </div>
                <div className="text-gray-700">
                  <Link to="/cart">
                    <span className="p-1 flex items-center justify-center hover:bg-gray-200 transition-all duration-300 ease-in cursor-pointer w-12 h-12 rounded-full">
                      <HiOutlineShoppingBag size={25} className="cart-icon" />
                    </span>
                  </Link>
                </div>
                <div className="text-gray-700 flex md:hidden">
                  <span className="p-1 flex items-center justify-center hover:bg-gray-200 transition-all duration-300 ease-in cursor-pointer w-12 h-12 rounded-full">
                    <FaBarsStaggered onClick={toggleMenu} size={20} />
                  </span>
                </div>
              </div>
              <div className="md:items-center gap-2 hidden md:flex md:justify-center">
                <Button href="/signin" type="link" variant="primary" size="md">
                  Sign In
                </Button>
                <Button
                  href="/signup"
                  type="link"
                  variant="secondary"
                  size="md"
                >
                  Sign Up
                </Button>
              </div>
            </div>
            <div
              className={`absolute top-0 ${
                isMenuOpen ? "right-0" : "right-[150%]"
              } w-full h-screen z-[1005] bg-white transition-all duration-300 ease-in-out`}
            >
              <ul className="flex gap-4 flex-col items-center justify-start pt-20 pb-12">
                {menu.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <li key={id}>
                      <NavLink
                        to={url}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `text-xl capitalize font-sm hover:text-primary ${
                            isActive ? "text-primary" : "text-gray-600"
                          }`
                        }
                      >
                        {text}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <div className="flex items-center gap-2 justify-center">
                <Button href="/signin" type="link" variant="primary" size="md">
                  Sign In
                </Button>
                <Button
                  href="/signup"
                  type="link"
                  variant="secondary"
                  size="md"
                >
                  Sign Up
                </Button>
              </div>
              <div className="absolute top-4 right-4">
                <span className="flex items-center justify-center">
                  <MdOutlineClose
                    onClick={closeMenu}
                    className="w-8 h-8 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
