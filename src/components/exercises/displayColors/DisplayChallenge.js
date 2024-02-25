'use client'
import { useEffect, useState } from "react";
import styles from "@/styles/components/displayNumbers/Challenge.module.css";
import DisplayChallenge from "../challenge/DisplayChallenge";

// import DisplayChallenge from "../challenge/DisplayChallenge";

export default function LogicChallenge({setIsChallengeStarted, displayDatas}) {
  const [color, setColor] = useState(0)
  const [isNumberVisible, setIsNumberVisible] = useState(false)

  const colors = ["#ff0000", "#00ff00", "#0000ff", "#008000", "#000000", "#808080", "#FF1493", "#FFFF00", "#FF4500"]

  function generateRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    const finalNumber = Math.floor(Math.random() * (max - min) + min);
    if(Number(finalNumber) > 25){
      generateRandomNumber(min, max)
    } else{
      return finalNumber
    }
  }

  useEffect(() => {
    if(!isNumberVisible){
      setTimeout(() => {
        setColor(() => colors[generateRandomNumber(0, colors.length)])
        setIsNumberVisible(true)
      }, 4000)
    }
    if(isNumberVisible){
      setTimeout(() => setIsNumberVisible(false), displayDatas.timeDisplay * 1000)
    }

  }, [isNumberVisible])
  
  return (
    <DisplayChallenge isNumberVisible={isNumberVisible} dataToDisplay={<div style={{height: "300px", width: "300px", borderRadius: "100%", background: color}}></div>} setIsChallengeStarted={setIsChallengeStarted} />
  );
}
