import styles from "@/styles/components/displayNumbers/Challenge.module.css";

export default function DisplayChallenge({isNumberVisible, dataToDisplay, setIsChallengeStarted}) {
  return (
    <div className={styles.container}>
        <div></div>
        <main className={styles.main_contet}>
          <div className={styles.displayNumber}>
            {isNumberVisible && <h2>{dataToDisplay}</h2>}
          </div>
        </main>
        <div className={styles.controls}>
            <button onClick={() => setIsChallengeStarted(false)}>Stop</button>
        </div>
    </div>
  );
}
