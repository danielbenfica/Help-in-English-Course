import HeaderPage from "@/components/headerPage/headerPage";
import styles from "@/styles/pages/exercises/exercises.module.css";
import Link from "next/link";
import { PiUserBold, PiArrowsOutCardinalBold, PiListNumbersBold, PiTextAaBold, PiMathOperationsBold, PiClockCountdownBold, PiPaletteBold} from "react-icons/pi";


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
                              <PiClockCountdownBold  size={26} />
                              Horas
                            </Link>
                          </li>
                          <li>
                            <Link href={"/exercises/display-colors"}>
                              <PiPaletteBold  size={26} />
                              Cores
                            </Link>
                          </li>
                          <li>
                            <Link href={"/exercises/display-pronouns"}>
                              <PiUserBold  size={26} />
                              Pronomes Pessoais
                            </Link>
                          </li>
                          <li>
                            <Link href={"/exercises/display-directions"}>
                              <PiArrowsOutCardinalBold   size={26} />
                              Direções
                            </Link>
                          </li>
                        
                      </ul>
                </nav>
            </section>
        </div>
    </main>
  );
}
