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

const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];
const getHumanChoice = (e) => e.target.id;

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
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
      break;
    case (computerChoice === ROCK && humanChoice === SCISSORS):
    case (computerChoice === PAPER && humanChoice === ROCK):
    case (computerChoice === SCISSORS && humanChoice === PAPER): 
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
      break;
    default: 
      console.log("It's a tie");
  }
}

const buttons = document.querySelector('div.buttons');
buttons.addEventListener('click', playRound);
