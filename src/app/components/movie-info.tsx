import styles from "../styles/movie.info.module.css";
import { config } from "@/config";

export const getMovise = async (id: string) => {
  console.log(`Fetching movies: ${Date.now()}`)
  await new Promise((res) => setTimeout(res, 5000));
  const res = await fetch(`${config.moviesApi}/${id}`);
  return res.json();
}

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovise(id);
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} alt={movie.title} className={styles.poster} />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank">Homepage →</a>
      </div>
    </div>
  );
};

export default MovieInfo;