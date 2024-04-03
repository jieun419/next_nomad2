import { Metadata } from "next";
import Movie from "../components/movie";
import styles from "../styles/home.module.css";
import { ImoviesT } from "@/types/type";
import { config } from "@/config";

export const metadata: Metadata = {
  title: "Home",
};

const getMovies = async () => {
  await new Promise((res) => setTimeout(res, 1000));
  const res = await fetch(config.moviesApi);
  const json = await res.json();
  return json;
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie: ImoviesT) => (
        <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
      ))}
    </div>
  );
}
