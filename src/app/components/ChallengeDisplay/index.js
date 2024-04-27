'use client'
import { useRouter } from 'next/navigation'
import styles from "./ChallengeDisplay.module.css";
import { useEffect } from 'react';
import HeaderPage from '@/components/headerPage/headerPage';

export default function DisplayChallenge({isDataVisible, dataToDisplay, nameChallenge}) {
  const router = useRouter();

  return (
    <div className={styles.container}>
        <div></div>
        <header className={styles.header_page}>
          <HeaderPage title={nameChallenge} />
        </header>
        <main className={styles.main_contet}>
          <div className={styles.displayNumber}>
            {isDataVisible && <div>{dataToDisplay}</div>}
          </div>
        </main>
        <div className={styles.controls}>
            <button onClick={() => router.back()}>Stop</button>
        </div>
    </div>
  );
}
