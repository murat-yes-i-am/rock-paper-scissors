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

const rockButton = document.getElementById(ROCK);
const paperButton = document.getElementById(PAPER);
const scissorsButton = document.getElementById(SCISSORS);

const choiceButtons = [rockButton, paperButton, scissorsButton];
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
const resultsElement = document.querySelector('.results');

const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];
const getPlayerChoice = (e) => e.target.id;
const updatePlayerScore = () => playerScoreElement.textContent = playerScore;
const updateComputerScore = () => computerScoreElement.textContent = computerScore;
const updateResultsElement = (result) => resultsElement.textContent = result;
const disableButtons = () => choiceButtons.forEach(button => button.disabled = true);
const enableButtons = () => choiceButtons.forEach(button => button.disabled = false);

const playRound = (e) => {
  const computerChoice = getComputerChoice();
  const playerChoice = getPlayerChoice(e);
  let result = '';

  switch (true) {
    case (playerChoice === ROCK && computerChoice === SCISSORS):
    case (playerChoice === PAPER && computerChoice === ROCK):
    case (playerChoice === SCISSORS && computerChoice === PAPER):
      result =`You win! ${playerChoice} beats ${computerChoice}`;
      playerScore++;
      updatePlayerScore();
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

const reset = () => {
  playerScore = 0;
  computerScore = 0;
  updatePlayerScore();
  updateComputerScore();
  updateResultsElement('');
  enableButtons();
}

choiceButtons.forEach(button => button.addEventListener('click', playRound));
