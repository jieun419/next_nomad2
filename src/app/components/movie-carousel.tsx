"use client";

import { useEffect, useRef, useState } from "react";
import { ImoviesT } from "@/types/type";
import styles from "../styles/movie-carousel.module.css";
import Arrow from "./icons/arrow";
import MovieHot from "./movie-hot";


const MovieCarousel = ({ movies }: { movies: ImoviesT[] }) => {
  const voteAverage = movies.sort((a, b) => b.vote_average - a.vote_average).slice(10);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const nextDis = currentIndex >= 2 ? styles.disNone : styles.disBlock;
  const prevDis = currentIndex > 0 ? styles.disBlock : styles.disNone;

  const handlerPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }

  };

  const handlerNext = () => {
    if (currentIndex <= 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = "all 0.6s";
      if (currentIndex > 0) {
        carouselRef.current.style.transform = `translateX(${currentIndex * 25}%)`;
      }
      if (currentIndex <= 2) {
        carouselRef.current.style.transform = `translateX(-${currentIndex * 25}%)`;
      }
    }
  }, [currentIndex]);

  return (
    <section className={styles.carouselContainer}>
      <div ref={carouselRef} className={styles.carouselWrap}>
        {voteAverage.map((movie: ImoviesT, idx) => (
          <MovieHot key={movie.id} id={movie.id} title={movie.title} idx={idx} poster_path={movie.poster_path} />
        ))}
      </div>
      <button className={`${styles.prevBtn} ${prevDis}`} onClick={handlerPrev}><Arrow type='left' /></button>
      <button className={`${styles.nextBtn} ${nextDis}`} onClick={handlerNext}><Arrow type='right' /></button>
    </section>
  );
};

export default MovieCarousel;