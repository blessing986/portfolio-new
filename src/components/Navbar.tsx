"use client";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }: NavbarProps) => {
  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed right-0 top-0 -z-10 w-[80%] translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="header_bg_color"
          className="w-full"
        />
      </div>
      <nav
        className={`fixed z-50 flex w-full items-center justify-between px-5 py-4 lg:px-8 xl:px-[8%] ${isScroll ? "shodow-sm bg-white bg-opacity-50 backdrop-blur-lg dark:border-b dark:border-white/20 dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
        <a href="#top">
          <h1 className="mr-14 cursor-pointer font-salsa text-lg font-bold text-slate-700 md:text-2xl">
            Blessing<span className="text-slate-400">Ubiomor</span>{" "}
          </h1>
        </a>

        <ul
          className={`hidden items-center gap-6 rounded-full px-12 py-3 md:flex lg:gap-20 ${isScroll ? "" : "bg-white bg-opacity-50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"}`}>
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo">
              About
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo">
              My Work
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="moon_icon"
              className="w-6"
            />
          </button>

          <a
            href="/Blessing_Ubiomor_Resume.pdf"
            download
            className="ml-4 hidden items-center gap-3 rounded-full border border-gray-500 px-10 py-2.5 font-Ovo lg:flex">
            My resume{" "}
            <Image
              src={assets.download_icon}
              alt="download_icon"
              className="w-4 dark:bg-white dark:p-[2px]"
            />{" "}
          </a>

          <button className="ml-3 block md:hidden" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu_black"
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="fixed -right-64 bottom-0 top-0 z-50 flex h-screen w-64 flex-col gap-4 bg-rose-50 px-10 py-20 transition duration-500 md:hidden dark:bg-darkHover dark:text-white">
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close_black"
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a href="#top" onClick={closeMenu} className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu} className="font-Ovo">
              About
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu} className="font-Ovo">
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
