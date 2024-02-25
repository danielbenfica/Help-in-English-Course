'use client'
import { useState } from "react";

import styles from '@/styles/components/exercises/startChallenge/StartChallenge.module.css'

export default function SmallStartChallenge({setIsChallengeStarted, setDisplayDatas, contentText}){
  const [timeDisplay, setTimeDisplay] = useState()

  return (
    <main className={styles.container}>
      <div>
        <input 
          onChange={(e) => setTimeDisplay(e.target.value)}
          type="number" /> 
        <span>{contentText}</span>
      </div>
      <button onClick={() => {
        setIsChallengeStarted(true)
        setDisplayDatas({timeDisplay})
        }}>Iniciar</button>
    </main>
  );
}