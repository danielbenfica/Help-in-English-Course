import HeaderPage from "@/components/headerPage/headerPage";
import styles from "@/styles/pages/exercises/exercises.module.css";
import Link from "next/link";
import { PiListNumbersBold, PiTextAaBold, PiMathOperationsBold, PiClockCounterClockwiseBold  } from "react-icons/pi";


export default function Exercises() {

  return (
    <main className={styles.container}>
        <header className={styles.header_page}>
          <HeaderPage title={"Exercícios"} />
        </header>
        <div className={styles.main_content}>

        <section className={styles.links__lessons_container}>
                <header>
                    <h2>Exercícios</h2>
                    <p>Pratique seu inglês com atividades online.</p>
                </header>
                <nav>
                      <ul>
                          <li>
                            <Link href={"/exercises/display-numbers"}>
                              <PiListNumbersBold size={26}  />
                              Números
                            </Link>
                            </li>
                          <li>
                            <Link href={"/exercises/display-letters"}>
                              <PiTextAaBold  size={26} />
                              Alfabeto
                            </Link>
                          </li>
                          <li>
                            <Link href={"/exercises/display-operations"}>
                              <PiMathOperationsBold   size={26} />
                              Operações
                            </Link>
                          </li>
                          <li>
                            <Link href={"/exercises/display-hours"}>
                              <PiClockCounterClockwiseBold size={26} />
                              Horas
                            </Link>
                          </li>
                        
                      </ul>
                </nav>
            </section>
        </div>
    </main>
  );
}
