import { MovieCard } from "@/components/movie/MovieCard";

export default async function page() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIES_API_KEY}`
  );

  const data = await res.json();

  return (
    <div className="p-4">
      <div className="text-3xl font-bold">Welcome to Movies App</div>
      <div className="text-zinc-400 mt-3">Find any movie you want</div>

      <div className="grid grid-cols-[repeat(auto-fill,_minmax(15em,_1fr))] gap-8 auto-rows-auto mt-10">
        {data.results.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}
