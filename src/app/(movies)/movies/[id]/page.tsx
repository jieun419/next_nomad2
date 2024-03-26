import { API_URL } from "@/app/(home)/page";

const getMovise = async (id: string) => {
  console.log(`Fetching movies: ${Date.now()}`)
  await new Promise((res) => setTimeout(res, 5000));
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

const getVideos = async (id: string) => {
  console.log(`Fetching videos: ${Date.now()}`)
  await new Promise((res) => setTimeout(res, 5000));
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}

const MovieDetail = async ({ params: { id } }: { params: { id: string } }) => {
  console.log('==========');
  console.log('start fetching');
  const [movie, videos] = await Promise.all([getMovise(id), getVideos(id)])
  console.log('end fetching');
  return (
    <h1>
      {movie.title}
    </h1>
  );
};

export default MovieDetail;