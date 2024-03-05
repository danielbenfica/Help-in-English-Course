import BigStartChallenge from "@/components/exercises/startChallenges/BigChallenge";
import LogicChallenge from "@/components/exercises/displayNumbers/LogicChallange";

import styles from "@/styles/pages/exercises/displayers/Displayers.module.css";
import HeaderPage from "@/components/headerPage/headerPage";

export default function DisplayNumbers() {

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <HeaderPage title={"Exercício de Números"} /> 
      </header>
      <main className={styles.main__content}>
        <LogicChallenge />
      </main>
    </div>
  );
}
