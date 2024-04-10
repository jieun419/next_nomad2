import Image from "next/image";
import styles from "../styles/movie.info.module.css";
import { getMovies } from "../services/movieApi";

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovies(id);
  return (
    <div className={styles.container}>
      <div className={styles.imgWrap}>
        <Image src={movie.poster_path} alt={movie.title} fill className={styles.poster} />
      </div>
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