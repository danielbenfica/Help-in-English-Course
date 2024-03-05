'use client'
import { useRouter } from 'next/navigation'
import styles from "@/styles/components/displayNumbers/Challenge.module.css";

export default function DisplayChallenge({isNumberVisible, dataToDisplay}) {
  const router = useRouter();

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
