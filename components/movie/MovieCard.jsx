import Image from "next/image";
import Link from "next/link";
import { BsCalendarDate } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { GetImage } from "../other/getImage";
export const MovieCard = ({ movie }) => {
  return (
    <Link href={`/movies/${movie.id}`} className="flex group flex-col">
      <div className="h-[15em] relative w-full">
        <Image
          className="w-full h-full object-cover object-center rounded-xl group-hover:scale-95 transition-all"
          src={GetImage(movie.backdrop_path)}
          alt={movie.title}
          fill
        />
      </div>

      <div className="p-2">
        <p className="text-zinc-500 text-sm  line-clamp-1 group-hover:text-xs transition-all">
          {movie.overview}{" "}
        </p>

        <h2 className="text-xl line-clamp-1 font-bold text-white group-hover:text-lg transition-all">
          {movie.title}
        </h2>

        <div className="flex items-center text-zinc-400 relative -bottom-5 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all text-xs gap-3">
          <div className="flex mt-1 gap-1 items-center">
            <BsCalendarDate />
            {movie.release_date}
          </div>
          <div className="flex mt-1 gap-1 items-center">
            <BiLike />
            {movie.vote_count}
          </div>
        </div>
      </div>
    </Link>
  );
};
