"use client";

import { useEffect, useRef, useState } from "react";
import { ImoviesT } from "@/types/type";
import styles from "../styles/movie-carousel.module.css";
import Arrow from "./icons/arrow";
import MovieHot from "./movie-hot";


const MovieCarousel = ({ movies }: { movies: ImoviesT[] }) => {
  const voteAverage = movies.sort((a, b) => b.vote_average - a.vote_average).slice(10)
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carouselContRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }

  }
  const moveNext = () => {
    if (currentIndex <= 2) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  useEffect(() => {
    if (carouselRef.current) {
      // const sliderClone = carouselRef.current?.firstElementChild?.cloneNode(true);
      // console.log('sliderClone', sliderClone)
      // if (sliderClone) {
      //   carouselRef.current?.appendChild(sliderClone);
      // }

      if (currentIndex > 0) {
        carouselRef.current.style.marginLeft = `${currentIndex * 100}%`;
      }
      if (currentIndex <= 2) {
        carouselRef.current.style.marginLeft = `-${currentIndex * 100}%`;
      }
    }

    if (currentIndex === 3) {
      setTimeout(() => {
        if (carouselRef.current) {
          carouselRef.current.style.marginLeft = '0';

          setCurrentIndex(0);
        }
      }, 100)
    }
    console.log('currentIndex', currentIndex)
  }, [currentIndex])

  return (
    <section ref={carouselContRef} className={styles.carouselContainer}>
      <div ref={carouselRef} className={styles.carouselWrap}>
        {voteAverage.map((movie: ImoviesT, idx) => (
          <MovieHot key={movie.id} id={movie.id} title={movie.title} idx={idx} poster_path={movie.poster_path} />
        ))}
      </div>
      <button className={styles.prevBtn} onClick={movePrev}><Arrow type='left' /></button>
      <button className={styles.nextBtn} onClick={moveNext}><Arrow type='right' /></button>
    </section>
  );
};

export default MovieCarousel;