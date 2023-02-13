import "./global.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./app.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <div>João</div>
        </main>
      </div>
    </div>
  );
}

export default App;
