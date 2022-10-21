let maxRange = 2
let userName = ''
let userCurrentStage = 1
let userPoint = 0
let userGuess = 0.0
let correctAnswer = 0.0



let answer = (Math.random() * (maxRange - 1)) + 1
correctAnswer = Math.round(answer * 10) / 10

//alert(correctAnswer)

userName = prompt('NUMBER GUESSING GAME    \n\nENTER YOUR USERNAME :')

alert(`Welcome ${userName}`)

userGuess = parseFloat(prompt('NUMBER GUESSING GAME    \n\nGUESS THE NUMBER :'))
getUserGuess(userGuess)



function getUserGuess(userAnswer) {
  if (userAnswer === correctAnswer) {
    alert('ANSWER CORRECT!')
    userPoint += 1
    let doYouWantToContinue = confirm('DO YOU WANT TO CONTINUE')
    if (doYouWantToContinue) {
      userCurrentStage += 1
      maxRange += 1

      let answer = (Math.random() * (maxRange - 1)) + 1
      correctAnswer = Math.round(answer * 10) / 10

      //alert(correctAnswer)

      userGuess = parseFloat(prompt('NUMBER GUESSING GAME    \n\nGUESS THE NUMBER :'))
      getUserGuess(userGuess)

    } else {
      alert(`Your total point =  ${userPoint} \n\nYOUR STAGE : ${userCurrentStage}`)
    }
  } else {

    let doYouWantToContinue = confirm('INCORRECT ANSWER \n\nDO YOU WANT TO RETRY')
    if (doYouWantToContinue) {
      userGuess = parseFloat(prompt('NUMBER GUESSING GAME    \n\nGUESS THE NUMBER AGAIN :'))
      getUserGuess(userGuess)
    } else {
      alert(`Your total point =  ${userPoint}`)
    }


  }

}
