import { Suspense } from "react";
import MovieInfo from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";
import { getMovies } from "@/app/services/movieApi";
interface Iparams {
  params: { id: string }
}

export const generateMetadata = async ({ params: { id } }: Iparams) => {
  const movie = await getMovies(id);
  return {
    title: movie.title,
  }
};

const MovieDetailPage = async ({ params: { id } }: Iparams) => {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos...</h1>}>
        {/* <MovieVideos id={id} /> */}
      </Suspense>
    </div>
  );
};

export default MovieDetailPage;