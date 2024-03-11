"use client";

import { useState } from "react";
import NavLink from "./NavLink";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import links from "@/constant/Navbar/navData";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossMark } from "react-icons/gi";

const Links = () => {
  let date = new Date();
  let year = date.getFullYear();
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="hidden items-center gap-7 md:inline-flex">
        <ul className="flex gap-7 text-lg">
          {links.map((link) => (
            <NavLink title={link.title} path={link.path} />
          ))}
        </ul>
      </div>
      <div onClick={() => setOpen(!open)} className="cursor-pointer hover:scale-110 md:hidden text-2xl">
        {open ? <GiCrossMark /> : <GiHamburgerMenu />}
      </div>
      {open && (
        <div
          className="bg-blur-md fixed right-0 -top-[9%] flex h-screen w-full flex-col items-end backdrop-blur-sm md:hidden z-[5999]"
          onClick={toggleMenu}>
          <div className="bg-white fixed  flex h-full w-[90%] flex-col items-center px-4 pt-[50px]">
            <IoClose className="absolute right-9 top-6 text-4xl"/>
            <div className="flex flex-col items-center gap-7 pt-[10px]">
              <ul className="mt-[59px] flex flex-col gap-7 text-4xl">
                {links.map((link) => (
                  <NavLink title={link.title} path={link.path} />
                ))}
              </ul>
            </div>

            <footer className="fixed  bottom-9 flex flex-col text-center text-black">
              <div className="mx-auto my-6 flex flex-row items-center gap-4">
                <a href="https://github.com/fullstacksherpa" target="_blank">
                  <span className="hover:text-orange-500 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-xl transition-all duration-300 hover:-translate-y-2">
                    <SlSocialFacebook />
                  </span>
                </a>
                <a href="https://github.com/fullstacksherpa" target="_blank">
                  <span className="hover:text-orange-500 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-xl transition-all duration-300 hover:-translate-y-2">
                    <SlSocialInstagram />
                  </span>
                </a>
                <a href="https://github.com/fullstacksherpa" target="_blank">
                  <span className="hover:text-orange-500 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-xl transition-all duration-300 hover:-translate-y-2">
                    <FaTiktok />
                  </span>
                </a>
              </div>
              <div className="mx-auto my-6 h-1 w-[70%] bg-black/50" />
              <h3>Copyright © {year} &#124; Hakkudai Tours & Travels</h3>
              <h3>
                website by{" "}
                <a href="https://fullstacksherpa.tech" className="hover:text-purple-500" target="_blank">
                  fullstacksherpa
                </a>
              </h3>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Links;
