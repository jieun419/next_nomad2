import { config } from "@/config";

export const getVideos = async (id: string) => {
  console.log(`Fetching videos: ${Date.now()}`);
  const res = await fetch(`${config.moviesApi}/${id}/videos`);
  return res.json();
};

export const getAllMovies = async () => {
  await new Promise((res) => setTimeout(res, 1000));
  const res = await fetch(`${config.moviesApi}`);
  return res.json();
};

export const getMovies = async (id: string) => {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((res) => setTimeout(res, 5000));
  const res = await fetch(`${config.moviesApi}/${id}`);
  return res.json();
};

export const getCredits = async (id: string) => {
  console.log(`Fetching credits: ${Date.now()}`);
  const res = await fetch(`${config.moviesApi}/${id}/credits`);
  return res.json();
};

export const getProviders = async (id: string) => {
  console.log(`Fetching providers: ${Date.now()}`);
  const res = await fetch(`${config.moviesApi}/${id}/providers`);
  return res.json();
};

export const getSimilar = async (id: string) => {
  console.log(`Fetching similar: ${Date.now()}`);
  const res = await fetch(`${config.moviesApi}/${id}/similar`);
  return res.json();
};
