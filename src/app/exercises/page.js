import styles from "@/styles/pages/exercises/exercises.module.css";
import Link from "next/link";
import { PiListNumbers, PiTextAaBold  } from "react-icons/pi";


export default function Exercises() {

  return (
    <main className={styles.container}>
        <section className={styles.links__lessons_container}>
                <header>
                    <h2>Exercícios</h2>
                    <p>Pratique seu inglês com atividades online.</p>
                </header>
                <nav>
                      <ul>
                          <li>
                            <Link href={"/exercises/display-numbers"}>
                              <PiListNumbers size={26}  />
                              Números
                            </Link>
                            </li>
                          <li>
                            <Link href={"/exercises/display-letters"}>
                              <PiTextAaBold  size={26} />
                              Letras
                            </Link>
                          </li>
                        
                      </ul>
                </nav>
            </section>
    </main>
  );
}
