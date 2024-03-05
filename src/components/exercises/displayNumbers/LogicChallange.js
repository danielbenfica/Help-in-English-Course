'use client'
import { useEffect, useState } from "react";
import DisplayChallenge from "../challenge/DisplayChallenge";

export default function LogicChallenge() {
  const [number, setNumber] = useState(0)
  const [timeDisplay, setTimeDisplay] = useState(3000)
  const [initialNumberRange, setInitialNumberRange] = useState(0)
  const [finalNumberRange, setFinalNumberRange] = useState(100)
  const [isNumberVisible, setIsNumberVisible] = useState(false)

  useEffect(() => {
    const timeToDisplayText = JSON.parse(localStorage.getItem('settingsData'))
    setTimeDisplay(timeToDisplayText.durationNumber * 1000)
    setInitialNumberRange(timeToDisplayText.initialNumber)
    setFinalNumberRange(timeToDisplayText.finalNumber)

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
        setNumber(() => generateRandomNumber(Number(initialNumberRange), Number(finalNumberRange) + 1))
        setIsNumberVisible(true)
      }, 4000)
    }
    if(isNumberVisible){
      setTimeout(() => setIsNumberVisible(false), timeDisplay)
    }

  }, [isNumberVisible])
  
  return (
    <DisplayChallenge isNumberVisible={isNumberVisible} dataToDisplay={number} />
  );
}
