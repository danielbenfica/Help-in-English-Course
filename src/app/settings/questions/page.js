'use client'
import HeaderPage from "@/components/headerPage/headerPage";
import Header from "@/app/components/Header";
import styles from '@/styles/pages/settings/settings.module.css'
import { useEffect, useState } from "react";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import challenges from '@/assets/json-datas/questions.json'
import SettingInput from "@/app/components/SettingInput";
import { PiUserBold, PiArrowsOutCardinalBold, PiListNumbersBold, PiTextAaBold, PiMathOperationsBold, PiClockCountdownBold, PiPaletteBold} from "react-icons/pi";
import { BsCalendar2Day, BsCalendarMonth  } from "react-icons/bs";
import { GetAllChallengesDatas, SetChallengesDatas } from "@/app/components/ManageDatasStorage";


export default function Settings() {
  const icons = [<PiListNumbersBold size={26}/>, <PiTextAaBold size={26}/>, <PiMathOperationsBold size={26}/>, <PiClockCountdownBold size={26}/>, <PiPaletteBold size={26}/>, <PiUserBold size={26}/>, <PiArrowsOutCardinalBold size={26}/>, <BsCalendar2Day size={26}/>, <BsCalendarMonth  size={26} />]

  const [challengeDuration, setChallengeDuration] = useState([])

  function saveDatasUpdate() {
    const dataToUpdate = `{${challenges.map(challenge => (
      `"${challenge.name}": ${challengeDuration[challenge.id]}`
    ))}}`
    
    SetChallengesDatas(dataToUpdate)

    toast.success('Alterações salvas com sucesso!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  useEffect(() => {
    const settingsDatas = GetAllChallengesDatas()
    challenges.map(challenge => {
        challengeDuration[challenge.id] = settingsDatas[challenge.name]
        setChallengeDuration([...challengeDuration])
    })
  }, [])

  const handleChangeChallengeDuration = (e, index) => {
    console.log(challengeDuration)
    challengeDuration[index] = e.target.value
    setChallengeDuration([...challengeDuration])
    console.log(challengeDuration)
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <header>
          <HeaderPage title="Configurações" />
        </header>
        <div className={styles.main_container}>
          <header>
            <h3>
              Questões
            </h3>
          </header>
          <ToastContainer />
          <main className={styles.main_content}>
            {challenges.map(challenge => (
              <SettingInput 
              key={challenge.id} 
              icon={icons[challenge.id]}
              name={challenge.name}
              value={challengeDuration[challenge.id]} 
              onChange={e => handleChangeChallengeDuration(e, challenge.id)} />
            )
            )}

          </main>
            <footer className={styles.footer__buttons}>
              <Link href="/exercises/">
                <button>
                  Descartar
                </button>
              </Link>
              <button onClick={saveDatasUpdate}>Salvar</button>
            </footer>

        </div>
      </div>

    </>
  )
}