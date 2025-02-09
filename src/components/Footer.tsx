import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

interface FooterProps {
  isDarkMode: boolean;
}

const Footer = ({ isDarkMode }: FooterProps) => {
  const currentDate = new Date().getFullYear();

  return (
    <>
      <div className="mt-20">
        <h1 className="text-center font-salsa text-lg font-bold text-slate-700 md:text-2xl">
          Blessing<span className="text-slate-400">Ubiomor</span>{" "}
        </h1>

        <div className="mx-auto flex w-max items-center gap-2">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail_icon"
            className="w-6"
          />
          <a href="mailto:dev.blessingubiomor@gmail.com">
            dev.blessingubiomor@gmail.com{" "}
          </a>
        </div>

        <div className="mx-[10%] mt-12 items-center justify-between border-t border-gray-400 py-6 text-center sm:flex">
          <p> &copy; {currentDate} Blessing Ubiomor. All rights reserved.</p>

          <ul className="mt-4 flex items-center justify-center gap-10 sm:mt-0">
            <li>
              <a target="_blank" href="https://github.com/blessing986">
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/blessing-ubiomor/">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
