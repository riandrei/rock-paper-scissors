let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let random = Math.floor(Math.random() * 3) + 1;

  if (random == 1) {
    return `rock`;
  }
  if (random == 2) {
    return `paper`;
  }
  return `scissors`;
}

function playRound(playerChoice, computerChoice) {
  const winConditions =
    (playerChoice.toLowerCase() == `paper` && computerChoice == `rock`) ||
    (playerChoice.toLowerCase() == `rock` && computerChoice == `scissors`) ||
    (playerChoice.toLowerCase() == `scissors` && computerChoice == `paper`);
  const invalidChoices =
    playerChoice.toLowerCase() == `rock` ||
    playerChoice.toLowerCase() == `paper` ||
    playerChoice.toLowerCase() == `scissors`;

  if (!invalidChoices) {
    return `You entered an invalid choice`;
  }

  if (playerChoice.toLowerCase() == computerChoice) {
    return `Draw! ${playerChoice.toLowerCase()} and ${computerChoice} is tied.`;
  }

  if (winConditions) {
    playerScore++;
    return `You win! ${playerChoice.toLowerCase()} beats ${computerChoice}`;
  }

  computerScore++;
  return `You lose! ${playerChoice.toLowerCase()} loses against ${computerChoice}`;
}

function game() {
  for (let i = 1; i < 6; i++ || playerScore < 3 || computerScore < 3) {
    const playerChoice = prompt(`Rock, Paper, or Scissors?`);
    console.log(playRound(playerChoice, computerPlay()));
  }

  if (playerScore > computerScore) {
    console.log(`You Won! The score is ${playerScore} to ${computerScore}.`);
  } else if (playerScore < computerScore) {
    console.log(`You Lose! The score is ${playerScore} to ${computerScore}`);
  } else {
    console.log(`It's a draw`);
  }
}

game();
