'use client'
import { useState } from "react";
import StartChallenge from "@/components/displayLetters/StartChallenge";
import Challenge from "@/components/displayLetters/Challenge";

import styles from "@/styles/pages/exercises/displayNumbers/display-number.module.css";

export default function DisplayLetters() {
  const [isChallengeStarted, setIsChallengeStarted] = useState(false)
  const [displayDatas, setDisplayDatas] = useState({})

  return (
    <div className={styles.container}>
      {
        isChallengeStarted ? <Challenge setIsChallengeStarted={setIsChallengeStarted} displayDatas={displayDatas} />
        : <StartChallenge 
              setIsChallengeStarted={setIsChallengeStarted} 
              setDisplayDatas={setDisplayDatas} 
          />
      }
    </div>
  );
}
