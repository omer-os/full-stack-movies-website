"use client";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu, BiWindowClose } from "react-icons/bi";
import NavbarLink from "./NavbarLink";

export default function MenuBarButton() {
  const [ShowSideBar, setShowSideBar] = useState(false);
  const links = [
    {
      page: "home",
      link: "/",
    },
    {
      page: "movies",
      link: "/movies",
    },
  ];
  return (
    <>
      <div
        className={`flex flex-col sm:flex-row sm:relative fixed z-40 capitalize gap-2 text-white top-0 transition-all -right-[100vh] w-full sm:w-max h-full sm:p-0 p-5 sm:pt-0 pt-20 bg-black opacity-0 duration-300 sm:!right-0 sm:!opacity-100 ${
          ShowSideBar && "!right-0 !opacity-100"
        }`}
      >
        {links.map((link, index) => (
          <NavbarLink link={link} key={index} />
        ))}
      </div>
      <div
        onClick={() => setShowSideBar(!ShowSideBar)}
        className="relative z-50 active:scale-95 transition-all active:bg-zinc-800 rounded-full p-2 -pr-2 sm:hidden"
      >
        {ShowSideBar ? <AiOutlineClose size={28} /> : <BiMenu size={28} />}
      </div>
    </>
  );
}
