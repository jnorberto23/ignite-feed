import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/jnorberto23.png" />
          <div className={styles.authorInfo}>
            <strong>Joao Norberto</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="14 de Fevereiro de 2023 às 16h40"
          dateTime="2023-02-14 16:40:00"
        >
          Publicado a 4h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa 🚀.</p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário..." />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
