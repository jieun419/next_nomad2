import { API_URL } from "@/app/(home)/page";

const getVideos = async (id: string) => {
  console.log(`Fetching videos: ${Date.now()}`)
  await new Promise((res) => setTimeout(res, 3000));
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}

const MovieVideos = async ({ id }: { id: string }) => {
  const video = await getVideos(id);
  return (
    <h6>{JSON.stringify(video)}</h6>
  );
};

export default MovieVideos;