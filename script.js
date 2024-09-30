const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

const choices = [
  ROCK,
  PAPER,
  SCISSORS
];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  let humanInput = prompt('Enter your choice: rock | paper | scissors').toLowerCase();

  if (choices.includes(humanInput)) {
    return humanInput;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
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
        console.log("It's tie");
    }
  }

  for (let round = 1; round <= 5; round++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log('You win');
  } else {
    console.log('Computer wins');
  }
}

playGame();
