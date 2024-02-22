'use client'
import styles from "@/styles/components/displayNumbers/StartChallenge.module.css";
import { useState } from "react";

export default function StartChallenge({setIsChallengeStarted, setDisplayDatas}) {
  const [min, setMin] = useState()
  const [max, setMax] = useState()
  const [timeDisplay, setTimeDisplay] = useState()

  return (
    <main className={styles.container}>
      <div>
        <span>A partir do número</span>
        <input
          onChange={(e) => setMin(e.target.value)}
          type="number" />
        <span>ao</span>
        <input 
          onChange={(e) => setMax(e.target.value)}
          type="number" />
      </div>
      <div>
        <input 
          onChange={(e) => setTimeDisplay(e.target.value)}
          type="number" /> 
        <span>segundos por número</span>
      </div>
      <button onClick={() => {
        setIsChallengeStarted(true)
        setDisplayDatas({min, max, timeDisplay})
        }}>Iniciar</button>
    </main>
  );
}
