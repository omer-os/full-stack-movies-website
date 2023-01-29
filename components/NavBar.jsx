import Link from "next/link";
import React from "react";
import NavbarLink from "./other/NavbarLink";

export default function NavBar() {
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
    <div className="flex z-50 justify-between items-center p-5 sticky top-0 left-0 w-full bg-black border-b border-zinc-600">
      <Link href="/" className="text-xl font-mono font-extrabold">
        Fullstack Movies App
      </Link>

      <div className="flex capitalize gap-5 text-white">
        {links.map((link, index) => (
          <NavbarLink link={link} key={index} />
        ))}
      </div>
    </div>
  );
}
