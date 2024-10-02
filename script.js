const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const choices = [
  ROCK,
  PAPER,
  SCISSORS
];

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelector('.buttons');
const humanScoreElement = document.querySelector('.human-score');
const computerScoreElement = document.querySelector('.computer-score');
const resultsElement = document.querySelector('.results');

const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];
const getHumanChoice = (e) => e.target.id;
const updateHumanScore = () => humanScoreElement.textContent = humanScore;
const updateComputerScore = () => computerScoreElement.textContent = computerScore;
const updateResultsElement = (result) => resultsElement.textContent = result;

const playRound = (e) => {
  if (!choices.includes(e.target.id)) {
    return;
  }

  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice(e);

  switch (true) {
    case (humanChoice === ROCK && computerChoice === SCISSORS):
    case (humanChoice === PAPER && computerChoice === ROCK):
    case (humanChoice === SCISSORS && computerChoice === PAPER):
      updateResultsElement(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
      updateHumanScore();
      break;
    case (computerChoice === ROCK && humanChoice === SCISSORS):
    case (computerChoice === PAPER && humanChoice === ROCK):
    case (computerChoice === SCISSORS && humanChoice === PAPER):
      updateResultsElement(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
      updateComputerScore();
      break;
    default:
      updateResultsElement('It\'s a tie');
  }
}

buttons.addEventListener('click', playRound);
