"use client";

import { useState } from "react";

export default function SeeMoreButton({ children }) {
  const [ShowMore, setShowMore] = useState(false);
  return (
    <>
      <div
        className={`line-clamp-2 ${
          ShowMore && "line-clamp-none"
        } transition-all`}
      >
        {children}
      </div>
      <button
        onClick={() => setShowMore(!ShowMore)}
        className="text-blue-600 underline cursor-pointer active:scale-95  transition-all"
      >
        {!ShowMore ? "see more" : "show less"}
      </button>
    </>
  );
}
