export default async function Loading() {
  return (
    <main className="mx-0 flex flex-col py-6 px-4 md:m-6 md:px-0 md:pt-0 lg:ml-32 lg:min-w-[800px] lg:grow">
      <section className="flex flex-col sm:mx-8 md:mx-0 md:flex-row md:items-start lg:justify-center">
        <section className="px-20 text-center md:pr-8 md:pl-0 lg:w-2/5">
          <span>
            <span>
              <div className="bg-zinc-800 animate-pulse w-full h-[30em] rounded-lg border border-zinc-700"></div>
            </span>
            <div className="bg-zinc-800 animate-pulse w-full h-[30em] rounded-lg border border-zinc-700 mt-5"></div>
          </span>
        </section>
        <section className="md:w-3/5">
          <div className="mt-6 mb-2 text-center md:mt-0 md:mb-4 md:text-left">
            <div className=" rounded w-20 h-10 bg-zinc-800 border border-zinc-700 animate-pulse"></div>
            <h1
              className="bg-zinc-800 border border-zinc-700
animate-pulse h-16 rounded-lg mb-1 mt-3 text-3xl font-light md:mb-3 md:text-5xl"
            ></h1>
          </div>
          <div className="mb-6 flex flex-col items-center text-center md:flex-row md:items-center md:text-left">
            <p
              className="bg-zinc-800 border border-zinc-700
animate-pulse mb-2 text-4xl font-medium md:mr-4 md:mb-0"
            ></p>
          </div>
          <div className="mb-6 flex items-center justify-between text-left text-sm lg:w-10/12 lg:text-lg">
            {[...Array(4)].map((i, index) => (
              <div className="bg-zinc-800 border border-zinc-700 animate-pulse w-40 h-20 rounded"></div>
            ))}
          </div>
          <div className="mb-6">
            <h3
              className="bg-zinc-800 border border-zinc-700
animate-pulse h-6 w-20 mb-6 rounded-lg"
            ></h3>
            <ul className="flex gap-5 flex-wrap text-xs font-light md:text-sm">
              {[...Array(5)].map((category, index) => (
                <li
                  key={index}
                  className="bg-zinc-800 border border-zinc-700
                  animate-pulse w-20 h-8 rounded-lg"
                ></li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h3
              className="bg-zinc-800 border border-zinc-700
animate-pulse h-6 w-20 mb- rounded-lg"
            ></h3>

            <div className="flex mt-3 flex-col gap-2">
              <h3 className="bg-zinc-800 border border-zinc-700 animate-pulse h-6 w-5/6 rounded-lg"></h3>
              <h3 className="bg-zinc-800 border border-zinc-700 animate-pulse h-6 w-3/6 rounded-lg"></h3>
              <h3 className="bg-zinc-800 border border-zinc-700 animate-pulse h-6 w-2/6 rounded-lg"></h3>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
