"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function NavbarLink({ link }) {
  const pathName = usePathname();
  return (
    <Link href={`${link.link}`} className="relative py-2 px-4 rounded-lg">
      <span className={`z-20 relative`}>{link.page}</span>

      {/* {pathName === link.link &&
        (HoveringOver && (
          <motion.div
            layoutId="navlink"
            className="absolute z-10 w-full h-full top-0 left-0 bg-zinc-900 rounded-lg p-2"
          ></motion.div>
        ))} */}

      {pathName === link.link ? (
        <motion.div
          layoutId="navlink"
          className="absolute z-10 w-full h-full top-0 left-0 bg-zinc-900 rounded-lg p-2"
        ></motion.div>
      ) : (
        ""
      )}
    </Link>
  );
}
