import { API_URL } from "@/app/(home)/page";

const getMovise = async (id: string) => {
  console.log(`Fetching movies: ${Date.now()}`)
  await new Promise((res) => setTimeout(res, 5000));
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovise(id);
  return (
    <h6>{JSON.stringify(movie)}</h6>
  );
};

export default MovieInfo;