import { API_URL } from "@/app/(home)/page";
import styles from "../styles/movie-video.module.css";

const getVideos = async (id: string) => {
  console.log(`Fetching videos: ${Date.now()}`);
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}

const MovieVideos = async ({ id }: { id: string }) => {
  const video = await getVideos(id);
  return (
    <div className={styles.container}>
      {
        video.map(((video) =>
          <iframe
            key={video.id}
            src={`https://youtube.com/embed/${video.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title} />
        ))
      }
    </div>
  );
};

export default MovieVideos;