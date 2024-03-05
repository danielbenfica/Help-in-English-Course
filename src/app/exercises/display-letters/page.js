import SmallStartChallenge from "@/components/exercises/startChallenges/SmallChallenge";
import LogicChallenge from "@/components/exercises/displayLetters/LogicChallenge";

import styles from "@/styles/pages/exercises/displayers/Displayers.module.css";
import HeaderPage from "@/components/headerPage/headerPage";

export default function DisplayLetters() {

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <HeaderPage title={"Exercício do Alfabeto"} /> 
      </header>
      <main className={styles.main__content}>
        <LogicChallenge/>
         
      </main>
    </div>
  );
}
