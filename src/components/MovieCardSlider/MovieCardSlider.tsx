import styles from "./styles.module.scss";

interface Props {
  poster: string;
  title: string;
  position: number;
}

export const Card = ({ poster, title, position }: Props) => (
  <div className={styles.content}>
    <h3>{position}</h3>
    <div className={styles.image}>
      <div className={styles.poster}>
        <img src={poster} alt="poster" />
      </div>
      <div className={styles.title}>
        <img src={title} alt="title" />
        <div />
      </div>
    </div>
  </div>
);
