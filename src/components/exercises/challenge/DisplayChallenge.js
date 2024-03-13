'use client'
import { useRouter } from 'next/navigation'
import styles from "@/styles/components/displayNumbers/Challenge.module.css";
import { useEffect } from 'react';

export default function DisplayChallenge({isNumberVisible, dataToDisplay}) {
  const router = useRouter();

  useEffect(() => {
    const localStorageDatas = localStorage.getItem('settingsData')
    let localDatas = ''
    if(!localStorageDatas){
      localDatas = '{"durationAlphabet": 3,"durationNumber":3,"durationOperations":5,"durationHours":4,"initialNumber":0,"finalNumber":100,"durationColors":3,"durationPersonalPronouns":3}'
      localStorage.setItem('settingsData', localDatas)
    }
  },[])

  return (
    <div className={styles.container}>
        <div></div>
        <main className={styles.main_contet}>
          <div className={styles.displayNumber}>
            {isNumberVisible && <div>{dataToDisplay}</div>}
          </div>
        </main>
        <div className={styles.controls}>
            <button onClick={() => router.back()}>Stop</button>
        </div>
    </div>
  );
}
