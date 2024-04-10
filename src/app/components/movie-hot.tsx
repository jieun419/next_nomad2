"use client"

import Image from "next/image";
import styles from "../styles/movie-hot.module.css";
import { useRouter } from "next/navigation";

interface MoviePropsT {
  id: number;
  title: string;
  poster_path: string;
  idx: number;
}

const MovieHot = ({ id, title, poster_path, idx }: MoviePropsT) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movie/${id}`);
  }
  return (
    <div className={styles.movieHot}>
      <span className={styles.hotNum}>{idx + 1}</span>
      <div className={styles.imgWrap}>
        <Image src={poster_path} fill alt={title} onClick={onClick} />
      </div>
    </div>
  );
};

export default MovieHot;