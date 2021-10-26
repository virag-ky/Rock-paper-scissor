//Step 1.
//Create an array with the 3 options.
let pick = ['Rock', 'Paper', 'Scissors'];
//Declare a variable named random that we are going to initialize in the computerPlay function, with this the computer will select randomly from the options
let random;
//Declare the variables with the string meassages
let winner = 'Congratulations! You won! You beat the computer!';
let loser = 'Looser! You lost the game against the computer.';
let beat1 = ' Paper wraps Rock!';
let beat2 = ' Scissors cuts Paper!';
let beat3 = ' Rock crashes Scissors!';
let tie = 'It\s a tie!';
let gameOver = 'Game Over!';
//Declare the variable for the rounds, starting from 1.
let rounds = 1;
//Step 2.
//Create a function where the computer will pick randomly from the options.
function computerPlay() {
  random = pick[Math.floor(Math.random() * pick.length)];
  return(random);
}
//Step 3.
//Create an input for the player where he/she  can enter one of the options.
let input = prompt('Choose from one of these options: Rock, Paper, or Scissors', 'Please enter either Rock, Paper, or Scissors!');
//Step 4.
//Declare the variables computerSelection and playerSelection.
const computerSelection = computerPlay();
const playerSelection = input;
//Step 5.
//Create a function where the player's choice and the computer's choice is compared and then a message is displayed.
function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'Rock') {
    if (computerSelection === 'Paper') {
      return(beat1);
  } else if (computerSelection === 'Scissors') {
    return(beat3);
  } else if (computerSelection === 'Rock') {
    return(tie);
  }
}
  if (playerSelection === 'Paper') {
    if (computerSelection === 'Rock') {
    return(beat1);
  } else if (computerSelection === 'Scissors') {
    return(beat2);
  } else if (computerSelection === 'Paper') {
    return(tie);
  }
}
  if (playerSelection === 'Scissors') {
    if (computerSelection === 'Rock') {
    return(beat3);
  } else if (computerSelection === 'Paper') {
    return(beat2);
  } else {
    return(tie);
  }
 }
}
