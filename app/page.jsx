import { MovieCard } from "@/components/movie/MovieCard";
import { GetImage } from "@/components/other/getImage";
import SignInButton from "@/components/other/SignInButton";
import Link from "next/link";
import React from "react";
import { BiLike } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";

export default async function Home() {
  // console.log(getAllData());

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIES_API_KEY}`
  );

  const data = await res.json();

  return (
    <div
      className="grid p-4 
    
    sm:grid-cols-[minmax(10em,_16em),minmax(10em,1fr)]
    grid-cols-1
    grid-rows-2 gap-5"
    >
      <div className="bg-zinc-900 h-max rounded-xl col-start-1 row-span-2 gap-4 sm:flex hidden flex-col p-3">
        <div className="text-2xl font-extrabold">Top Categories</div>

        {["Top rated movies"].map((i, index) => (
          <div
            key={index}
            className="bg-zinc-800 p-2 rounded border border-zinc-700"
          >
            {i}
          </div>
        ))}

        <SignInButton />
      </div>

      <Link
        href="/"
        className="bg-zinc-800 min-h-[20em] rounded-xl sm:col-start-2 relative group"
      >
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <img
            src={GetImage("/hQ4pYsIbP22TMXOUdSfC2mjWrO0.jpg")}
            className="w-full h-full object-cover rounded-xl"
            alt=""
          />

          <div className="bg-gradient-to-t from-black absolute z-20 left-0 right-0 flex flex-col p-3 -bottom-3 group-hover:!bottom-0 transition-all">
            <div className="text-3xl font-bold">Ariel</div>
            <div className="sm:text-base text-xs.">
              Taisto Kasurinen is a Finnish coal miner whose father has just
              committed suicide and who is framed for a crime he did not commit.
              In jail, he starts to dream about leaving the country and starting
              a new life. He escapes from prison but things don't go as planned
            </div>
            <div className="flex items-center text-zinc-400 relative opacity-0 group-hover:opacity-100 bottom-0 transition-all text-xs gap-3">
              <div className="flex mt-1 gap-1 items-center">
                <BsCalendarDate />
                2020-2-2
              </div>
              <div className="flex mt-1 gap-1 items-center">
                <BiLike />
                203
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="sm:mt-10 mt-5">
        <div className="text-2xl font-bold">Top Rated Movies</div>
        <div className="flex rounded-lg overflow-y-hidden gap-5 h-max pb-2 mt-3 snap-x overflow-x-scroll snap-mandatory">
          {data.results.map((movie, index) => (
            <div key={index} className="min-w-[15em] snap-start">
              <MovieCard key={index} movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// top rated : https://api.themoviedb.org/3/movie/top_rated
// bg-zinc-800 border border-zinc-700 animate-pulse
