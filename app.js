const computerChoiceDisplay = document.getElementById('computer-choice')
const myChoiceDisplay = document.getElementById('my-choice')
const resultsDisplay = document.getElementById('results')
const possibleChoices = document.querySelectorAll('button')
let myChoice
let computerChoice
let results

//General game instructions with our functions defined underneath
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
myChoice = e.target.id
myChoiceDisplay.innerHTML = myChoice
generateComputerChoice()
generateResults()
}))

//Making the function to decide the computer's choice
function generateComputerChoice(){
  const randomNumber = Math.floor(Math.random() * possibleChoices.length)
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'paper'
  }
  if (randomNumber === 3) {
    computerChoice = 'scissors'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

//Making the function to decide the results of the game logic
function generateResults () {
  if (computerChoice === myChoice) {
    results = "It's a draw!"
  }
  if (computerChoice === 'rock' && myChoice === "paper") {
    results = "You Win!"
  }
  if (computerChoice === 'paper' && myChoice === "scissors") {
    results = "You Win!"
  }
  if (computerChoice === 'scissors' && myChoice === "rock") {
    results = "You Win!"
  }
  if (computerChoice === 'rock' && myChoice === "scissors") {
    results = "You Lose!"
  }
  if (computerChoice === 'paper' && myChoice === "rock") {
    results = "You Lose!"
  }
  if (computerChoice === 'scissors' && myChoice === "paper") {
    results = "You Lose!"
  }
  resultsDisplay.innerHTML = results
}