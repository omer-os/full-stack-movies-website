import React from "react";

export default function NavBar() {
  return (
    <div className="flex z-50 justify-between items-center p-5 sticky top-0 left-0 w-full bg-zinc-900 border-b border-zinc-600">
      <div className="text-xl font-mono font-extrabold">
        Fullstack Movies App
      </div>
    </div>
  );
}
