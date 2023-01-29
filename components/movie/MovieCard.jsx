import SeeMoreButton from "@/components/movie/SeeMoreButton";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

export const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <div className="relative bg-zinc-900 rounded-lg overflow-hidden group border border-zinc-800">
      <Link
        href="/"
        className="absolute p-2 bg-zinc-900 rounded top-2 right-2 z-20 sm:opacity-0  transition-all duration-300 group-hover:sm:!opacity-100 sm:scale-95 group-hover:sm:!scale-100 active:!scale-95"
      >
        <BiLinkExternal size={25} />
      </Link>

      <img
        className="w-full h-64 object-cover object-center"
        src={backdropUrl}
        alt={movie.title}
      />
      <div className="px-4 py-6">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12">
              <img
                className="rounded-full w-full h-full object-cover object-center"
                src={posterUrl}
                alt={movie.title}
              />
            </div>

            <div className="flex flex-col">
              <h2 className="text-sm font-bold text-white">{movie.title}</h2>
              <p className="text-xs text-zinc-400">{movie.release_date}</p>
            </div>
          </div>
        </div>
        <hr className="mt-4" />
        <h2 className="text-2xl mt-3 font-bold text-white">{movie.title}</h2>
        <div className="mt-2">
          <SeeMoreButton>
            <p className="text-zinc-500 text-sm">{movie.overview} </p>
          </SeeMoreButton>
        </div>
      </div>
    </div>
  );
};
