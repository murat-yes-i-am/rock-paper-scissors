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
  let humanInput = prompt('Enter your choice: rock | paper | scissors');

  if (choices.includes(humanInput)) {
    return humanInput;
  }
}

let humanScore = 0;
let computerScore = 0;


