const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const RESET = 'reset';

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
const resetButton = document.getElementById(RESET);

const choiceButtons = [rockButton, paperButton, scissorsButton];
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
const resultsElement = document.querySelector('.results');
const gameOverElement = document.querySelector('.game-over')
const gameResultElement = document.querySelector('.game-result');

const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];
const getPlayerChoice = (e) => e.target.id;
const updatePlayerScore = () => playerScoreElement.textContent = playerScore;
const updateComputerScore = () => computerScoreElement.textContent = computerScore;
const updateResultsElement = (result) => resultsElement.textContent = result;
const disableButtons = () => choiceButtons.forEach(button => button.disabled = true);
const enableButtons = () => choiceButtons.forEach(button => button.disabled = false);

const endGame = (message) => {
  alert(message);
  gameResultElement.textContent = message;
  disableButtons();
  gameOverElement.style.display = 'flex';
}

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
      result = `It's a tie. You both chose ${playerChoice}`;
  }

  updateResultsElement(result);

  if (playerScore >= 5) {
    endGame('You win');
  }

  if (computerScore >= 5) {
    endGame('You lose');
  }
}

const reset = () => {
  gameOverElement.style.display = 'none';
  playerScore = 0;
  computerScore = 0;
  updatePlayerScore();
  updateComputerScore();
  updateResultsElement('');
  enableButtons();
}

choiceButtons.forEach(button => button.addEventListener('click', playRound));
resetButton.addEventListener('click', reset);
