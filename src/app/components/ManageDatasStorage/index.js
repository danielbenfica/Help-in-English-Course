import challenges from '@/assets/json-datas/questions.json'

export function SetChallengesDatas(Challenges){
  return (
    localStorage.setItem('settingsDuration', Challenges )
  )
}
export function GetChallengeDuration(ChallengeId){
  let timeToDisplayText = localStorage.getItem('settingsDuration')
  timeToDisplayText = JSON.parse(timeToDisplayText)
  return timeToDisplayText[ChallengeId]
}

export function GetAllChallengesDatas(){
  let timeToDisplayText = localStorage.getItem('settingsDuration')
  if(timeToDisplayText === ''){
    let dataToSave = `{${challenges.map(challenge => (
      `"${challenge.name}": ${challenge.timeDuration}`
    ))}}`;
    SetChallengesDatas(dataToSave)
    return dataToSave
  }
  timeToDisplayText = JSON.parse(timeToDisplayText)
  return timeToDisplayText
}