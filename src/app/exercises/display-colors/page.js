import LogicChallenge from "@/components/exercises/displayColors/DisplayChallenge";

import styles from "@/styles/pages/exercises/displayers/Displayers.module.css";
import HeaderPage from "@/components/headerPage/headerPage";

export default function DisplayColors() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* <HeaderPage title={"Exercício de Cores"} />  */}
      </header>
      <main className={styles.main__content}>
        <LogicChallenge />
      </main>
    </div>
  );
}
