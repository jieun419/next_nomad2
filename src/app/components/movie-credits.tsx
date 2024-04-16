import Image from "next/image";
import { getCredits } from "../services/movieApi";
import globalStyles from "../styles/movie-common.module.css";
import styles from "../styles/movie-credits.module.css";
import { IcreditT } from "@/types/type";

const MovieCredits = async ({ id }: { id: string }) => {
  const credits = await getCredits(id);
  return (
    <article className={globalStyles.container}>
      <h3 className={globalStyles.infoTitle}>출연진</h3>
      <section className={styles.carouselContainer}>
        <div className={styles.profileList}>
          {
            credits && credits.slice(10).map((credit: IcreditT) => (
              <div key={credit.id} className={styles.profileWrap}>
                <div className={styles.imgWrap}>
                  {credit.profile_path && <Image src={credit.profile_path} alt={credit.name} fill className={styles.profilePath} />}
                  {!credit.profile_path && <p>Noting :(</p>}
                </div>
                <span>{credit.name}</span>
              </div>
            ))
          }
        </div>
      </section>
    </article>


  );
};

export default MovieCredits;