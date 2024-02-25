'use client'
import { useState } from "react";

import BigStartChallenge from "@/components/exercises/startChallenges/BigChallenge";
import LogicChallenge from "@/components/exercises/displayNumbers/LogicChallange";

import styles from "@/styles/pages/exercises/displayers/Displayers.module.css";
import HeaderPage from "@/components/headerPage/headerPage";

export default function DisplayNumbers() {
  const [isChallengeStarted, setIsChallengeStarted] = useState(false)
  const [displayDatas, setDisplayDatas] = useState({})

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <HeaderPage title={"Exercício de Números"} /> 
      </header>
      <main className={styles.main__content}>
          {
            isChallengeStarted ? <LogicChallenge setIsChallengeStarted={setIsChallengeStarted} displayDatas={displayDatas} />
            : <BigStartChallenge 
                  setIsChallengeStarted={setIsChallengeStarted} 
                  setDisplayDatas={setDisplayDatas} 
              />
          }
      </main>
    </div>
  );
}
