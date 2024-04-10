"use client";

import { ImoviesT } from "@/types/type";
import Movie from "./movie";
import styles from "../styles/movie-carousel.module.css";
import Arrow from "./icons/arrow";


const MovieCarousel = ({ movies }: { movies: ImoviesT[] }) => {
  const voteAverage = movies.sort((a, b) => b.vote_average - a.vote_average)
  console.log(voteAverage)

  return (
    <section className={styles.carouselContainer}>
      <div className={styles.carouselWrap}>
        {voteAverage.map((movie: ImoviesT) => (
          <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
        ))}
        4111
      </div>
      <button className={styles.prevBtn}><Arrow type='left' /></button>
      <button className={styles.nextBtn}><Arrow type='right' /></button>
    </section>
  );
};

export default MovieCarousel;