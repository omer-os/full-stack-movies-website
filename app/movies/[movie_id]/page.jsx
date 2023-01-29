import { GetImage } from "@/components/other/getImage";
import Link from "next/link";
import { BiLink } from "react-icons/bi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

export default async function page({ params }) {
  const { movie_id } = params;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.MOVIES_API_KEY}`
  );

  const movie = await res.json();

  return (
    <main className="mx-0 flex flex-col py-6 px-4 md:m-6 md:px-0 md:pt-0 lg:ml-32 lg:min-w-[800px] lg:grow">
      <section className="flex flex-col sm:mx-8 md:mx-0 md:flex-row md:items-start lg:justify-center">
        <section className="px-20 text-center md:pr-8 md:pl-0 lg:w-2/5">
          <span>
            <span>
              <img
                alt=""
                aria-hidden="true"
                src={GetImage(movie.backdrop_path)}
                className="rounded-lg sm:flex hidden"
              />
            </span>
            <img
              alt="M3GAN"
              src={GetImage(movie.poster_path)}
              decoding="async"
              data-nimg="intrinsic"
              className="rounded-lg mt-5"
            />
          </span>
        </section>
        <section className="md:w-3/5">
          <div className="mt-6 mb-2 text-center md:mt-0 md:mb-4 md:text-left">
            <Link
              className="p-2 text-sm underline active:scale-95 transition-all bg-zinc-900 rounded z-20"
              href="/movies"
            >
              GO Back
            </Link>
            <h1 className="mb-1 mt-3 text-3xl font-light md:mb-3 md:text-5xl">
              {movie.original_title}
            </h1>
            {movie.production_companies &&
              movie.production_companies.map((company, index) => (
                <div key={index} className="flex gap-5">
                  <h2 className="text-xs mx-auto sm:mx-0  font-light text-app-placeholder sm:text-sm md:text-lg">
                    {company.name}
                  </h2>
                </div>
              ))}
          </div>
          <div className="mb-6 flex flex-col items-center text-center md:flex-row md:items-center md:text-left">
            <p className="mb-2 text-4xl font-medium md:mr-4 md:mb-0">
              {movie.vote_average}
            </p>
            <span
              className="align-center flex self-center"
              ls="display: inline-block; direction: ltr;"
            >
              {[...Array(5)].map((e, i) => {
                if (i < movie.vote_average / 2) {
                  if ((i + 0.5) * 2 < movie.vote_average) {
                    return <AiFillStar key={i} />;
                  } else {
                    return <BsStarHalf key={i} />;
                  }
                } else {
                  return <AiOutlineStar key={i} />;
                }
              })}{" "}
            </span>
          </div>
          <div className="mb-6 flex items-center justify-between text-left text-sm lg:w-10/12 lg:text-lg">
            <div>
              <p className="mb-1 text-app-placeholder">Length</p>
              <p className="">{movie.runtime} mins</p>
            </div>
            <div>
              <p className="mb-1 text-app-placeholder">Language</p>
              <p className="">
                {movie.spoken_languages &&
                  movie.spoken_languages[0].english_name}
              </p>
            </div>
            <div>
              <p className="mb-1 text-app-placeholder">Year</p>
              <p className="">{movie.release_date}</p>
            </div>
            <div>
              <p className="mb-1 text-app-placeholder">Status</p>
              <p className="">{movie.status}</p>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="mb-2 md:text-lg">categories</h3>
            <ul className="flex flex-wrap text-xs font-light md:text-sm">
              {movie.genres &&
                movie.genres.map((category, index) => (
                  <li
                    key={index}
                    className="mr-2 mb-2 flex items-center justify-center rounded-md border border-zinc-800 py-px px-2 text-center font-medium bg-zinc-900"
                  >
                    {category.name}
                  </li>
                ))}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="mb-1 font-bold capitalize text-lg">
              movie overview
            </h3>
            <p className="font-light">{movie.overview} </p>
          </div>
          <div className="mb-10 flex">
            <Link
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              className="mb-4 mr-4 flex gap-4 cursor-pointer items-center justify-between rounded-md border-none py-3 px-8 text-sm  font-medium  "
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <p>See Movie in IMDB</p>
                <BiLink />
              </div>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
