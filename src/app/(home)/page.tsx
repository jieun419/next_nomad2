import { Metadata } from "next";
import Movie from "../components/movie";
import styles from "../styles/home.module.css";
import { ImoviesT } from "@/types/type";
import { getAllMovies } from "@/app/services/movieApi";
import MovieCarousel from "../components/movie-carousel";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  const movies = await getAllMovies();
  return (
    <article className={styles.container}>
      <section className={styles.movieListContainer}>
        <h3 className={styles.title}>인기 영화 TOP 10</h3>
        <MovieCarousel movies={movies} />
      </section>

      <section className={styles.movieListContainer}>
        <h3 className={styles.title}>상영중인 영화</h3>
        <div className={styles.movieListWrap}>
          {movies.map((movie: ImoviesT) => (
            <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
          ))}
        </div>
      </section>
    </article>
  );
}
