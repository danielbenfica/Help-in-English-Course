'use client'
import { useEffect, useState } from "react";
import DisplayChallenge from "../challenge/DisplayChallenge";
import { GetChallengeDuration } from "@/app/components/ManageDatasStorage";

export default function LogicChallenge() {
  const [number, setNumber] = useState(0)
  const [timeDisplay, setTimeDisplay] = useState(3000)
  const [initialNumberRange, setInitialNumberRange] = useState(0)
  const [finalNumberRange, setFinalNumberRange] = useState(100)
  const [isNumberVisible, setIsNumberVisible] = useState(false)

  useEffect(() => {
    setTimeDisplay(GetChallengeDuration("Números") * 1000)
  }, [])

  function generateRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    const finalNumber = Math.floor(Math.random() * (max - min) + min);
   
    return finalNumber
  }

  useEffect(() => {
    console.log(timeDisplay)
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
    <DisplayChallenge isDataVisible={isNumberVisible} dataToDisplay={number} nameChallenge={"Números"} />
  );
}
