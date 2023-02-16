import "./global.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./app.module.css";

function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/jnorberto23.png",
        name: "Norberto",
        role: "Desenvolvedor",
      },
      content: [
        {
          type: "paragraph",
          content: "Fala galera",
        },
        {
          type: "paragraph",
          content: "Acabei de subir mais um projeto no meu portifa",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2022-06-13 20:42:00"),
    },

    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/diego3g.png",
        name: "Diego",
        role: "Instrutor ",
      },
      content: [
        {
          type: "paragraph",
          content: "Fala galeraa",
        },
        { type: "paragraph", content: "Acabei de subir mais um projeto" },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2022-06-13 20:44:00"),
    },
  ];
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
