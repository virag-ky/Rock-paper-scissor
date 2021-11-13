const selection = document.querySelectorAll("button");
const machineChoice = document.getElementById("machine-choice");
const playerChoice = document.getElementById("player-choice");
const playerScore = document.getElementById("player-score");
const machineScore = document.getElementById("machine-score");
const result = document.getElementById("result");

let playerSelection;
let rounds = 0;

//Play round
function playRound(e) {
  playerSelection = e.target.id;
  playerChoice.innerHTML = playerSelection;
  computerPlay();
  getResult(playerSelection, computerSelection);
  rounds++;
  if (rounds === 5) {
    selection.forEach((button) => (button.style.display = "none"));
    getWinner(playerPoint, machinePoint);
  }
}

selection.forEach((button) => button.addEventListener("click", playRound));

//Computer selection
let computerSelection;
function computerPlay() {
  let random = Math.floor(Math.random() * selection.length);
  if (random === 2) {
    computerSelection = "scissors";
  }
  if (random === 1) {
    computerSelection = "paper";
  }
  if (random === 0) {
    computerSelection = "rock";
  }
  machineChoice.innerHTML = computerSelection;
}

//Get result
let winner = "Congratulations! You won! You beat the machine!";
let loser = "Looser! You lost the game against the machine.";
let beat1 = " Paper wraps Rock!";
let beat2 = " Scissors cuts Paper!";
let beat3 = " Rock crashes Scissors!";
let tie = "Its a tie!";
let gameOver = "Game Over!";

let playerPoint = 0;
let machinePoint = 0;

function getResult(playerSelection, computerSelection) {
  let text;
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      text = beat1;
      machinePoint += 1;
    } else if (computerSelection === "scissors") {
      text = beat3;
      playerPoint += 1;
    } else if (computerSelection === "rock") {
      text = tie;
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      text = beat1;
      playerPoint += 1;
    } else if (computerSelection === "scissors") {
      text = beat2;
      machinePoint += 1;
    } else if (computerSelection === "paper") {
      text = tie;
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      text = beat3;
      machinePoint += 1;
    } else if (computerSelection === "paper") {
      text = beat2;
      playerPoint += 1;
    } else {
      text = tie;
    }
  }
  result.innerHTML = text;
  machineScore.innerHTML = machinePoint;
  playerScore.innerHTML = playerPoint;
}

//Reset
function reset() {
  playerPoint = 0;
  playerScore.innerHTML = playerPoint;
  machinePoint = 0;
  machineScore.innerHTML = machinePoint;
  playerSelection = "";
  computerSelection = "";
  result.innerHTML = "";
  playerChoice.innerHTML = "";
  machineChoice.innerHTML = "";
  rounds = 0;
  selection.forEach((button) => (button.style.display = "block"));
  btn.style.display = "none";
}
const btn = document.getElementById("btn");
//End game, announce winner
function getWinner(playerPoint, machinePoint) {
  if (playerPoint > machinePoint) {
    result.innerHTML = gameOver + " " + winner;
  } else if (playerPoint === machinePoint) {
    result.innerHTML = gameOver + " " + tie;
  } else {
    result.innerHTML = gameOver + " " + loser;
  }
  btn.style.display = "block";
  btn.addEventListener("click", reset);
}
