import Link from "next/link";
import React from "react";
import NavSideBar from "./other/NavSideBar";
import AccountDropDown from "./dropdown/AccountDropDown";

export default function NavBar() {
  return (
    <div className="flex z-50 justify-between items-center sm:p-5 px-4 py-2 sticky top-0 left-0 w-full bg-black border-b border-zinc-600">
      <Link href="/" className="font-extrabold relative z-50">
        Fullstack Movies
      </Link>
      <div className="flex gap-2">
        <AccountDropDown />
        <NavSideBar />
      </div>
    </div>
  );
}
