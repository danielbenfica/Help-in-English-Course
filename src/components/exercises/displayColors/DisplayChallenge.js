'use client'
import { useEffect, useState } from "react";
import DisplayChallenge from "../challenge/DisplayChallenge";
import { GetChallengeDuration } from "@/app/components/ManageDatasStorage";

export default function LogicChallenge() {
  const [color, setColor] = useState(0)
  const [timeDisplay, setTimeDisplay] = useState(3000)
  const [isNumberVisible, setIsNumberVisible] = useState(false)

  useEffect(() => {
    // const timeToDisplayText = JSON.parse(localStorage.getItem('settingsData'))
    // setTimeDisplay(timeToDisplayText.durationColors * 1000)

    setTimeDisplay(GetChallengeDuration("Horas") * 1000)

  }, [])

  const colors = ["#ff0000", "#00ff00", "#0000ff", "#008000", "#000000", "#00ffff","#808080", "#FF1493", "#FFFF00", "#FF4500"]

  function generateRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    const finalNumber = Math.floor(Math.random() * (max - min) + min);
    return finalNumber
  
  }

  useEffect(() => {
    if(!isNumberVisible){
      setTimeout(() => {
        setColor(() => colors[generateRandomNumber(0, colors.length)])
        setIsNumberVisible(true)
      }, 4000)
    }
    if(isNumberVisible){
      setTimeout(() => setIsNumberVisible(false), timeDisplay)
    }

  }, [isNumberVisible])
  
  return (
    <DisplayChallenge isDataVisible={isNumberVisible} dataToDisplay={<div style={{height: "400px", width: "400px", borderRadius: "100%", background: color}}></div>} nameChallenge="Cores" />
  );
}
