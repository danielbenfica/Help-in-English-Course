'use client'
import { useState } from "react";

import SmallStartChallenge from "@/components/exercises/startChallenges/SmallChallenge";
import LogicChallenge from "@/components/exercises/displayHours/DisplayChallenge";

import styles from "@/styles/pages/exercises/displayers/Displayers.module.css";
import HeaderPage from "@/components/headerPage/headerPage";

export default function DisplayColors() {
  const [isChallengeStarted, setIsChallengeStarted] = useState(false)
  const [displayDatas, setDisplayDatas] = useState({})

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <HeaderPage title={"Exercício das Horas"} /> 
      </header>
      <main className={styles.main__content}>
          {
            isChallengeStarted ? <LogicChallenge setIsChallengeStarted={setIsChallengeStarted} displayDatas={displayDatas} />
            : <SmallStartChallenge 
                  setIsChallengeStarted={setIsChallengeStarted} 
                  setDisplayDatas={setDisplayDatas} 
                  contentText="segundos por mensagem"
              />
              
            }
        </main>
    </div>
  );
}
