const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const choices = [
  ROCK,
  PAPER,
  SCISSORS
];

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.button');
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
const resultsElement = document.querySelector('.results');

const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];
const getPlayerChoice = (e) => e.target.id;
const updateplayerScore = () => playerScoreElement.textContent = playerScore;
const updateComputerScore = () => computerScoreElement.textContent = computerScore;
const updateResultsElement = (result) => resultsElement.textContent = result;
const disableButtons = () => buttons.forEach(button => button.disabled = true);

const playRound = (e) => {
  const computerChoice = getComputerChoice();
  const playerChoice = getplayerChoice(e);
  let result = '';

  switch (true) {
    case (playerChoice === ROCK && computerChoice === SCISSORS):
    case (playerChoice === PAPER && computerChoice === ROCK):
    case (playerChoice === SCISSORS && computerChoice === PAPER):
      result =`You win! ${playerChoice} beats ${computerChoice}`;
      playerScore++;
      updateplayerScore();
      break;
    case (computerChoice === ROCK && playerChoice === SCISSORS):
    case (computerChoice === PAPER && playerChoice === ROCK):
    case (computerChoice === SCISSORS && playerChoice === PAPER):
      result = `You lose! ${computerChoice} beats ${playerChoice}`;
      computerScore++;
      updateComputerScore();
      break;
    default:
      result = `It\'s a tie. You both chose ${playerChoice}`;
  }

  updateResultsElement(result);

  if (playerScore >= 5) {
    alert('You win');
    disableButtons();
  }

  if (computerScore >= 5) {
    alert('You lose');
    disableButtons();
  }
}

buttons.forEach(button => button.addEventListener('click', playRound));
