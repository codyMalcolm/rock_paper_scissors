function game() {
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
  function getInput() {
    return window.prompt("Rock, paper, or scissors?", "rock");
  }

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    const playerSelection = getInput();
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    const winner = result.split(' ')[1];

    console.log(result);

    switch (winner) {
      case "Win!":
        playerScore++;
        break;
      case "Lose!":
        computerScore++;
        break;
      case "Tie!": case "invalid!":
        i--;
        break;
    }
  }

  const results = playerScore > computerScore ? 'You win!' : 'Computer wins!';
  console.log(`${results} You won ${playerScore} matches and the computer won ${computerScore} matches!`);
}

game();
