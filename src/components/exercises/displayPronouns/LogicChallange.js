'use client'
import { useEffect, useState } from "react";
import DisplayChallenge from "../challenge/DisplayChallenge";

export default function LogicChallenge() {
  const [number, setNumber] = useState(0)
  const [isNumberVisible, setIsNumberVisible] = useState(false)
  const [timeDisplay, setTimeDisplay] = useState(3000)
  
  const pronouns = ['I', 'You', 'He', 'She', 'It', 'We', 'They']

  useEffect(() => {
    const timeToDisplayText = JSON.parse(localStorage.getItem('settingsData'))
    setTimeDisplay(timeToDisplayText.durationPersonalPronouns * 1000)
  }, [])

  function generateRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    const finalNumber = Math.floor(Math.random() * (max - min) + min);
    return finalNumber
  }

  useEffect(() => {
    if(!isNumberVisible){
      setTimeout(() => {
        setNumber(() => pronouns[generateRandomNumber(0, pronouns.length + 1)])
        setIsNumberVisible(true)
      }, 4000)
    }
    if(isNumberVisible){
      setTimeout(() => setIsNumberVisible(false), timeDisplay)
    }

  }, [isNumberVisible])
  
  return (
    <DisplayChallenge isNumberVisible={isNumberVisible} dataToDisplay={number}/>
  );
}
