import HeaderPage from "@/components/headerPage/headerPage";
import styles from "@/styles/pages/exercises/exercises.module.css";
import Link from "next/link";
import json from '@/assets/json-datas/questions.json'
import { PiUserBold, PiArrowsOutCardinalBold, PiListNumbersBold, PiTextAaBold, PiMathOperationsBold, PiClockCountdownBold, PiPaletteBold} from "react-icons/pi";
import { BsCalendar2Day, BsCalendarMonth  } from "react-icons/bs";


export default function Exercises() {

  const icons = [<PiListNumbersBold size={26}/>, <PiTextAaBold size={26}/>, <PiMathOperationsBold size={26}/>, <PiClockCountdownBold size={26}/>, <PiPaletteBold size={26}/>, <PiUserBold size={26}/>, <PiArrowsOutCardinalBold size={26}/>, <BsCalendar2Day size={26}/>, <BsCalendarMonth  size={26} />]

  return (
    <main className={styles.container}>
        <header className={styles.header_page}>
          <HeaderPage title="Exercícios" />
        </header>
        <div className={styles.main_content}>

        <section className={styles.links__lessons_container}>
                <header>
                    <h2>Exercícios</h2>
                    <p>Pratique seu inglês com atividades online.</p>
                </header>
                <nav>
                      <ul>
                        {json.map(challenge => (
                          <li key={challenge.id}>
                            <Link href={`/exercises/${challenge.id}`}>
                              {icons[challenge.id]}
                              {challenge.name}
                            </Link>
                          </li>
                        ))}
                          {/* <li>
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
                          </li> */}
                        
                      </ul>
                </nav>
            </section>
        </div>
    </main>
  );
}
