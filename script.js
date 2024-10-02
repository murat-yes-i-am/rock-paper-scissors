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

const buttons = document.querySelector('.buttons');
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
const resultsElement = document.querySelector('.results');

const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];
const getHumanChoice = (e) => e.target.id;
const updateplayerScore = () => playerScoreElement.textContent = playerScore;
const updateComputerScore = () => computerScoreElement.textContent = computerScore;
const updateResultsElement = (result) => resultsElement.textContent = result;
const disableButtons = () => {};

const playRound = (e) => {
  if (!choices.includes(e.target.id)) {
    return;
  }

  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice(e);
  let result = '';

  switch (true) {
    case (humanChoice === ROCK && computerChoice === SCISSORS):
    case (humanChoice === PAPER && computerChoice === ROCK):
    case (humanChoice === SCISSORS && computerChoice === PAPER):
      result =`You win! ${humanChoice} beats ${computerChoice}`;
      playerScore++;
      updateplayerScore();
      break;
    case (computerChoice === ROCK && humanChoice === SCISSORS):
    case (computerChoice === PAPER && humanChoice === ROCK):
    case (computerChoice === SCISSORS && humanChoice === PAPER):
      result = `You lose! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
      updateComputerScore();
      break;
    default:
      result = 'It\'s a tie';
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

buttons.addEventListener('click', playRound);
