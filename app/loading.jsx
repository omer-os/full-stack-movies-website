export default async function page() {
  return (
    <div className="grid p-4 sm:grid-cols-[minmax(10em,_16em),minmax(10em,1fr)] grid-cols-1 grid-rows-2 gap-5">
      <div className="bg-zinc-800 sm:flex hidden border min-h-[20em] rounded-xl col-start-1 row-span-2 border-zinc-700 animate-pulse gap-4 flex-col p-3">
        <div className="text-2xl font-extrabold">Top Categories</div>
        <div className="bg-zinc-700 border border-zinc-700 animate-pulse rounded h-10"></div>
        <div className="bg-zinc-700 border border-zinc-700 animate-pulse rounded h-10"></div>
        <div className="bg-zinc-700 border border-zinc-700 animate-pulse rounded h-10"></div>
        <div className="bg-zinc-700 border border-zinc-700 animate-pulse rounded h-10"></div>
      </div>

      <div className="bg-zinc-800 border min-h-[20em] rounded-xl col-start-2 border-zinc-700 animate-pulse"></div>

      <div>
        <div className="text-2xl font-bold">Top Rated Movies</div>
        <div className="flex rounded gap-5 h-[16em] pb-2 mt-3 snap-x overflow-x-scroll">
          {[...Array(10)].map((i, index) => (
            <div
              key={index}
              className="rounded bg-zinc-800 border border-zinc-700 animate-pulse min-w-[15em] snap-start"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
