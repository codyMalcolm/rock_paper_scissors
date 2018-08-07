function computerPlay() {
  const arr = ["rock", "paper", "scissors"]
  const index = Math.floor(Math.random()*3);
  return arr[index];
}

function playRound(playerSelection, computerSelection) {
  const playerNorm = playerSelection.toLowerCase();
  if (playerNorm === computerSelection) {
    return `You tie! You both picked ${computerSelection}!`;
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



}
