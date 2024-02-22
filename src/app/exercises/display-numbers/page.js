'use client'
import { useState } from "react";
import StartChallenge from "@/components/displayNumbers/StartChallenge";
import Challenge from "@/components/displayNumbers/Challenge";

import styles from "@/styles/pages/exercises/displayNumbers/display-number.module.css";

export default function Home() {
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
