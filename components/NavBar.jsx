import Link from "next/link";
import React from "react";
import { BiMenu } from "react-icons/bi";
import NavSideBar from "./other/NavSideBar";
import NavbarLink from "./other/NavbarLink";

export default function NavBar() {
  return (
    <div className="flex z-50 justify-between items-center sm:p-5 px-4 py-2 sticky top-0 left-0 w-full bg-black border-b border-zinc-600">
      <Link href="/" className="font-extrabold relative z-50">
        Fullstack Movies
      </Link>

      <NavSideBar />
    </div>
  );
}
