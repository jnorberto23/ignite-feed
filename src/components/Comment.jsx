import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/diego3g.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time
                title="14 de Fevereiro de 2023 às 16h40"
                dateTime="2023-02-14 16:40:00"
              >
                Cerca de 1h
              </time>
            </div>
            <button title="Deletar comentario">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom, Joao!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp /> Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
