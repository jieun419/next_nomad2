"use client"

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface MoviePropsT {
  id: number;
  title: string;
  poster_path: string;
}

const Movie = ({ id, title, poster_path }: MoviePropsT) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movie/${id}`);
  }
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link href={`/movie/${id}`}>{title}</Link>
    </div>
  );
};

export default Movie;