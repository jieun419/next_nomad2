import Link from "next/link";

interface MoviePropsT {
  id: number;
  title: string;
  poster_path: string;
}

const Movie = ({ id, title, poster_path }: MoviePropsT) => {
  return (
    <div>
      <img src={poster_path} alt={id} />
      <Link href={`/movie/${id}`}>{title}</Link>
    </div>
  );
};

export default Movie;