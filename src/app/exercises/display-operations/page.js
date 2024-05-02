import SmallStartChallenge from "@/components/exercises/startChallenges/SmallChallenge";
import LogicChallenge from "@/components/exercises/displayOperations/LogicChallange";

import styles from "@/styles/pages/exercises/displayers/Displayers.module.css";
import HeaderPage from "@/components/headerPage/headerPage";

export default function DisplayOperations() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* <HeaderPage title={"Exercício de Operações"} />  */}
      </header> 
      <main className={styles.main__content}>
        <LogicChallenge />
      </main>
    </div>
  );
}
