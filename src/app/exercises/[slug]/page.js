"use client"
import json from '@/assets/json-datas/questions.json'
import DisplayChallenge from '@/app/components/ChallengeDisplay';
import { useEffect, useState } from 'react';
import { GetChallengeDuration } from '@/app/components/ManageDatasStorage';

export default function LogicChallenge({params}){
  
  const [dataToDisplay, setDataToDisplay] = useState(0)
  const [isDataVisible, setIsDataVisible] = useState(false)
  const [timeDisplay, setTimeDisplay] = useState(3000)

  function generateRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    const finalNumber = Math.floor(Math.random() * (max - min) + min);
    return finalNumber
  }
  
  useEffect(() => {
    setTimeDisplay(GetChallengeDuration(json[params.slug].name) * 1000)
    
    let datasList = json[params.slug].datasToDisplay

    if(!isDataVisible){
      setTimeout(() => {
        const RandomNumber = generateRandomNumber(0, datasList.length + 1)
        setDataToDisplay(() => datasList[RandomNumber])
        setIsDataVisible(true)
      }, 4000)
    }
    if(isDataVisible){
      setTimeout(() => setIsDataVisible(false), timeDisplay)
    }

  }, [isDataVisible])

  return (
    <DisplayChallenge isDataVisible={isDataVisible} dataToDisplay={dataToDisplay} nameChallenge={json[params.slug].name} />
  );
}