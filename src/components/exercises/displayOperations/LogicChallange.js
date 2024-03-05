'use client'
import { useEffect, useState } from "react";
import DisplayChallenge from "../challenge/DisplayChallenge";


export default function LogicChallenge() {
  const [operation, setOperation] = useState("")
  const [timeDisplay, setTimeDisplay] = useState(3000)
  const [isNumberVisible, setIsNumberVisible] = useState(false)

  const operationsPlusAndMultiply = 
      [{culculate: (num1, num2) => num1 + num2, operation: "+"},
      {culculate: (num1, num2) => num1 * num2, operation: "x"},]
      

  useEffect(() => {
    const timeToDisplayText = JSON.parse(localStorage.getItem('settingsData'))
    setTimeDisplay(timeToDisplayText.durationOperations * 1000)
  }, [])

  function generateRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    const finalNumber = Math.floor(Math.random() * (max - min) + min);
    if(Number(finalNumber) > max){
      generateRandomNumber(min, max)
    } else{
      return finalNumber
    }
  }
  
  function createOperations(){
    const num1 = generateRandomNumber(0, 9)
    const num2 = generateRandomNumber(0, 9)
    const operationType = generateRandomNumber(0, 4)
    
    if(operationType === 2){
      return `${operationsPlusAndMultiply[0].culculate(num1, num2)} - ${num2} = ${num1}`
    }
    else if(operationType === 3){
      const num1 = generateRandomNumber(1, 9)
      const num2 = generateRandomNumber(1, 9)
      return `${operationsPlusAndMultiply[1].culculate(num1, num2)} ÷ ${num2} = ${num1}`
    }

    const resultOperation = operationsPlusAndMultiply[operationType].culculate(num1, num2)

    return `${num1} ${operationsPlusAndMultiply[operationType].operation} ${num2} 
        = ${resultOperation}`
  }

  useEffect(() => {
    if(!isNumberVisible){
      setTimeout(() => {
        setOperation(() => createOperations())
        setIsNumberVisible(true)
      }, 4000)
    }
    if(isNumberVisible){
      setTimeout(() => setIsNumberVisible(false), timeDisplay)
    }

  }, [isNumberVisible])
  
  return (
    <DisplayChallenge isNumberVisible={isNumberVisible} dataToDisplay={operation} />
  );
}
