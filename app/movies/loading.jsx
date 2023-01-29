import React from "react";

export default function loading() {
  return (
    <div className="p-4">
      <div className="h-[2em] w-[12em] rounded bg-zinc-800 animate-pulse"></div>
      <div className="h-[2em] w-[10em] rounded bg-zinc-800 animate-pulse mt-3"></div>

      <div className="grid grid-cols-[repeat(auto-fill,_minmax(15em,_1fr))] gap-8 mt-10 auto-rows-[16em]">
        {[...Array(10)].map((movie, index) => (
          <div
            key={index}
            className="bg-zinc-800 animate-pulse w-full h-full rounded border border-zinc-700"
          ></div>
        ))}
      </div>
    </div>
  );
}
