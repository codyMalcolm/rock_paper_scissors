const btns = document.querySelectorAll('.btn');
const output = document.querySelector('.output');

let playerScore = 0;
let computerScore = 0;
let ties = 0;
let gameOver = false;

btns.forEach(b => {
  b.addEventListener('click', game);
})

function game(e) {
  if (gameOver) return;
  function computerPlay() {
    const arr = ["rock", "paper", "scissors"]
    const index = Math.floor(Math.random()*3);
    return arr[index];
  }
  function playRound(playerSelection, computerSelection) {
    const playerNorm = playerSelection.toLowerCase();
    if (playerNorm === computerSelection) {
      return `You Tie! You both picked ${computerSelection}!`;
    }

    if (playerNorm === 'rock') {
      return computerSelection === 'scissors' ?
      `You Win! Rock beats scissors!` :
      `You Lose! Paper beats rock!`;
    }

    if (playerNorm === 'paper') {
      return computerSelection === 'rock' ?
      `You Win! Paper beats rock!` :
      `You Lose! Scissors beats paper!`;
    }

    if (playerNorm === 'scissors') {
      return computerSelection === 'paper' ?
      `You Win! Scissors beats paper!` :
      `You Lose! Rock beats scissors!`;
    }

    return `Entry invalid! Please use "rock", "paper", or "scissors"!`;
  }
  function updateScore(winner) {
    switch (winner) {
      case "Win!":
        output.querySelector('.p-score').textContent = `Player score: ${++playerScore}`;
        break;
      case "Lose!":
        output.querySelector('.c-score').textContent = `Computer score: ${++computerScore}`;
        break;
      case "Tie!":
        output.querySelector('.ties').textContent = `Ties: ${++ties}`;
        break;
    }
  }
  function checkForWinner() {
    if (playerScore === 5) {
      output.querySelector('.final').textContent = 'Congratulations! You win!';
      output.querySelector('.final').style.visibility = 'visible';
      gameOver = true;
    }
    if (computerScore === 5) {
      output.querySelector('.final').textContent = 'Computer wins! Better luck next time!';
      output.querySelector('.final').style.visibility = 'visible';
      gameOver = true;
    }
  }

  const playerSelection = e.target.textContent;
  const computerSelection = computerPlay();

  const result = playRound(playerSelection, computerSelection);
  const winner = result.split(' ')[1];

  updateScore(winner);

  output.querySelector('.result').textContent = result;
  output.querySelector('.played').textContent = `Games played: ${playerScore+computerScore+ties}`;

  checkForWinner();
}
