const choices = [
  'rock',
  'paper',
  'scissors'
];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  let humanInput = prompt('Enter your choice: rock | paper | scissors');

  if (choices.includes) {
    return humanInput;
  }
}

let humanScore = 0;
let computerScore = 0;
