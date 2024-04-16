import styles from '../styles/loading.module.css';

const LoadingBox = () => {
  return (
    <main className={styles.loadingContainer}>
      <div className={styles.loader}></div>
      <p className={styles.loaderText}>영화 정보를 불러오고 있습니다.</p>
    </main>
  );
};

export default LoadingBox;