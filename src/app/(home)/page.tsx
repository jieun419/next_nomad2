import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

const getMovies = async () => {
  await new Promise((res) => setTimeout(res, 10000));
  const res = await fetch(URL);
  const json = await res.json();
  return json;
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      <h1>Hello</h1>
      {JSON.stringify(movies)}
    </div>
  );
}
