'use client'
import { useEffect, useState } from "react";
import DisplayChallenge from "../challenge/DisplayChallenge";

// import DisplayChallenge from "../challenge/DisplayChallenge";

export default function LogicChallenge() {
  const [hour, setHour] = useState(0)
  const [timeDisplay, setTimeDisplay] = useState(3000)
  const [isNumberVisible, setIsNumberVisible] = useState(false)

  useEffect(() => {
    const timeToDisplayText = JSON.parse(localStorage.getItem('settingsData'))
    setTimeDisplay(timeToDisplayText.durationHours * 1000)
  }, [])

  function generateRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    const finalNumber = Math.floor(Math.random() * (max - min) + min);
    if(Number(finalNumber) > 59){
      generateRandomNumber(min, max)
    } else{
      return finalNumber
    }
  }

  function generateHour(){
    let hour = generateRandomNumber(0, 13)
    let minute = generateRandomNumber(0, 60)
    if(hour <= 9){
      hour = '0' + hour
    }
    if(minute <= 9){
      minute = '0' + minute
    }
    const shift = generateRandomNumber(0, 2)
    return `${hour}:${minute} ${shift===0?'AM':'PM'}`
  }

  useEffect(() => {
    if(!isNumberVisible){
      setTimeout(() => {
        setHour(() => generateHour())
        setIsNumberVisible(true)
      }, 4000)
    }
    if(isNumberVisible){
      setTimeout(() => setIsNumberVisible(false), timeDisplay)
    }

  }, [isNumberVisible])
  
  return (
    <DisplayChallenge isNumberVisible={isNumberVisible} dataToDisplay={hour}/>
  );
}
