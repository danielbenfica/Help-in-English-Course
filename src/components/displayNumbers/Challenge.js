'use client'
import styles from "@/styles/components/displayNumbers/Challenge.module.css";
import { useEffect, useState } from "react";


export default function Challenge({setIsChallengeStarted, displayDatas}) {
  const [number, setNumber] = useState(0)
  const [isNumberVisible, setIsNumberVisible] = useState(false)

  function generateRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    const finalNumber = Math.floor(Math.random() * (max - min) + min);
    if(Number(finalNumber) > displayDatas.max){
      generateRandomNumber(min, max)
    } else{
      return finalNumber
    }
  }

  useEffect(() => {
    if(!isNumberVisible){
      setTimeout(() => {
        setNumber(() => generateRandomNumber(displayDatas.min, (Number(displayDatas.max) + 2)))
        setIsNumberVisible(true)
      }, 4000)
    }
    if(isNumberVisible){
      setTimeout(() => setIsNumberVisible(false), displayDatas.timeDisplay * 1000)
    }

  }, [isNumberVisible])
  
  return (
    <main className={styles.container}>
      <div className={styles.displayNumber}>
        {isNumberVisible && <h2>{number}</h2>}
      </div>
      <div className={styles.header}>
        <button onClick={() => setIsChallengeStarted(false)}>Parar</button>
      </div>
    </main>
  );
}
