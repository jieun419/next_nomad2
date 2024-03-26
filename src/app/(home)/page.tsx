import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

const getMovies = async () => {
  await new Promise((res) => setTimeout(res, 1000));
  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      <h1>Hello</h1>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}
          </Link>
        </li>
      ))}
    </div>
  );
}
