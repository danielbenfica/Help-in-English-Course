'use client'
import { useEffect, useState } from "react";
import DisplayChallenge from "../challenge/DisplayChallenge";

export default function LogicChallenge() {
  const [number, setNumber] = useState(0)
  const [isNumberVisible, setIsNumberVisible] = useState(false)
  const [timeDisplay, setTimeDisplay] = useState(3000)
  
  const alphabet = ["Up", "Left", "Right", "Down"]

  useEffect(() => {
    const timeToDisplayText = JSON.parse(localStorage.getItem('settingsData'))
    setTimeDisplay(timeToDisplayText.durationDirections * 1000)
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
        setNumber(() => alphabet[generateRandomNumber(0, alphabet.length)])
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
