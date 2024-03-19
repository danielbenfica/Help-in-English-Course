'use client'
import HeaderPage from "@/components/headerPage/headerPage";
import Header from "@/components/layout/header";
import { PiUserBold, PiArrowsOutCardinalBold, PiListNumbers, PiTextAa, PiMathOperations, PiClockCountdown, PiPaletteBold} from "react-icons/pi";
import styles from '@/styles/pages/settings/settings.module.css'
import { useEffect, useState } from "react";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function Settings(){
  const [initialNumber, setInitialNumber] = useState(0)
  const [finalNumber, setFinalNumber] = useState(0)
  const [durationNumber, setDurationNumber] = useState(0)
  const [durationAlphabet, setDurationAlphabet] = useState(0)
  const [durationOperations, setDurationOperations] = useState(0)
  const [durationHours, setDurationHours] = useState(0)
  const [durationColors, setDurationColors] = useState(0)
  const [durationPersonalPronouns, setDurationPersonalPronouns] = useState(0)
  const [durationDirections, setDurationDirections] = useState(0)

  function saveDatasUpdate(){
    localStorage.setItem('settingsData', `
    {"durationAlphabet": ${durationAlphabet},"durationNumber":${durationNumber},"durationOperations":${durationOperations},"durationHours":${durationHours},"initialNumber":${initialNumber},"finalNumber":${finalNumber},"durationColors":${durationColors}, "durationPersonalPronouns": ${durationPersonalPronouns}, "durationDirections": ${durationDirections}}`)
    
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
    const localStorageDatas = localStorage.getItem('settingsData')
    let localDatas = ''
    if(!localStorageDatas){
      localDatas = '{"durationAlphabet": 3,"durationNumber":3,"durationOperations":5,"durationHours":4,"initialNumber":0,"finalNumber":100,"durationColors":3,"durationPersonalPronouns":3,"durationDirections":3}'
      localStorage.setItem('settingsData', localDatas)
    }
  
    const settingsDatas = localStorageDatas ? JSON.parse(localStorageDatas) : localDatas
    setInitialNumber(settingsDatas.initialNumber)
    setFinalNumber(settingsDatas.finalNumber)
    setDurationNumber(settingsDatas.durationNumber)
    setDurationAlphabet(settingsDatas.durationAlphabet)
    setDurationOperations(settingsDatas.durationOperations)
    setDurationHours(settingsDatas.durationHours)
    setDurationColors(settingsDatas.durationColors)
    setDurationPersonalPronouns(settingsDatas.durationPersonalPronouns)
    setDurationDirections(settingsDatas.durationDirections)
  }, [])

  return (
    <>
      <Header />
      <div className={styles.container}>
        <header>
          <HeaderPage title="Configurações" />
        </header>
        <main className={styles.main_content}>
          <ToastContainer/>

          <div  className={styles.option_card}>
            <div> 
              <PiListNumbers size={32}  />
            </div>
            <div>
              <h2>Números:</h2>
              <div>
                <div>
                  <span>Intervalo:</span>
                  <input 
                    type="number" 
                    onChange={(e) => setInitialNumber(e.target.value)}
                    value={initialNumber}
                    /> a {' '}
                  <input 
                    type="number" 
                    onChange={(e) => setFinalNumber(e.target.value)}
                    value={finalNumber}
                    />
                </div>
                <div>
                  <span>Duração:</span>
                  <input 
                    type="number"
                    onChange={(e) => setDurationNumber(e.target.value)}
                    value={durationNumber} /> segundos
                </div>
              </div>
            </div>
          </div>
          
          <div  className={styles.option_card}>
            <div> 
              <PiTextAa size={32}  />
            </div>
            <div>
            <h2>Alfabeto:</h2>
              <div>
                <div>
                  <span>Duração:</span>
                  <input 
                    onChange={(e) => setDurationAlphabet(e.target.value)}
                    value={durationAlphabet}

                    type="number" /> segundos
                </div>
              </div>
            </div>
          </div>
          
          <div  className={styles.option_card}>
            <div> 
              <PiMathOperations size={32}  />
            </div>
            <div>
            <h2>Operações:</h2>
              <div>
                <div>
                  <span>Duração:</span>
                  <input
                    onChange={(e) => setDurationOperations(e.target.value)}
                    value={durationOperations}
                    type="number" /> segundos
                </div>
              </div>
            </div>
          </div>
          
          <div  className={styles.option_card}>
            <div> 
              <PiClockCountdown size={32}  />
            </div>
            <div>
            <h2>Horas:</h2>
              <div>
                <div>
                  <span>Duração:</span>
                  <input 
                    onChange={(e) => setDurationHours(e.target.value)}
                    value={durationHours}
                    type="number" /> segundos
                </div>
              </div>
            </div>
          </div>
          
          <div  className={styles.option_card}>
            <div> 
              <PiPaletteBold size={32}  />
            </div>
            <div>
            <h2>Cores:</h2>
              <div>
                <div>
                  <span>Duração:</span>
                  <input 
                    onChange={(e) => setDurationColors(e.target.value)}
                    value={durationColors}
                    type="number" /> segundos
                </div>
              </div>
            </div>
          </div>
          
          <div  className={styles.option_card}>
            <div> 
              <PiUserBold  size={32}  />
            </div>
            <div>
            <h2>Pronomes Pessoais:</h2>
              <div>
                <div>
                  <span>Duração:</span>
                  <input 
                    onChange={(e) => setDurationPersonalPronouns(e.target.value)}
                    value={durationPersonalPronouns}
                    type="number" /> segundos
                </div>
              </div>
            </div>
          </div>
          
          <div  className={styles.option_card}>
            <div> 
              <PiArrowsOutCardinalBold size={32}  />
            </div>
            <div>
            <h2>Direções:</h2>
              <div>
                <div>
                  <span>Duração:</span>
                  <input 
                    onChange={(e) => setDurationDirections(e.target.value)}
                    value={durationDirections}
                    type="number" /> segundos
                </div>
              </div>
            </div>
          </div>

          <footer className={styles.footer__buttons}>
              <Link href="/exercises/">
            <button>
              Descartar
              </button>
              </Link> 
            <button onClick={saveDatasUpdate}>Salvar</button>
          </footer>

        </main>
      </div>

    </>
  )
}