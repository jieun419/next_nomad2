import { config } from "@/config";

export const getVideos = async (id: string) => {
  console.log(`Fetching videos: ${Date.now()}`);
  const res = await fetch(`${config.moviesApi}/${id}/videos`);
  return res.json();
};

export const getMovise = async (id: string) => {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((res) => setTimeout(res, 5000));
  const res = await fetch(`${config.moviesApi}/${id}`);
  return res.json();
};
