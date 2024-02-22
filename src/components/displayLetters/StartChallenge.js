'use client'
import styles from "@/styles/components/displayNumbers/StartChallenge.module.css";
import { useState } from "react";

export default function StartChallenge({setIsChallengeStarted, setDisplayDatas}) {
  const [timeDisplay, setTimeDisplay] = useState()

  return (
    <main className={styles.container}>
      <div>
        <input 
          onChange={(e) => setTimeDisplay(e.target.value)}
          type="number" /> 
        <span>segundos por letra</span>
      </div>
      <button onClick={() => {
        setIsChallengeStarted(true)
        setDisplayDatas({timeDisplay})
        }}>Iniciar</button>
    </main>
  );
}
