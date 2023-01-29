import Link from "next/link";
import React from "react";

export default async function page() {
  return (
    <div className="p-4">
      <div className="text-3xl font-bold">No Content here yet</div>
      <Link href="/movies">got to movies page</Link>
    </div>
  );
}

// top rated : https://api.themoviedb.org/3/movie/top_rated
