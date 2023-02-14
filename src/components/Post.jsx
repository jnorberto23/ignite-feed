import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.authorInfo} />
          <div>
            <strong>Joao Norberto</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <div className={styles.content}>Fala galera</div>
      </header>
    </article>
  );
}
