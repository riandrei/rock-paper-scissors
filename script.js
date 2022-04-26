let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let random = Math.floor(Math.random() * 3) + 1;

  if (random == 1) {
    return `rock`;
  } else if (random == 2) {
    return `paper`;
  } else {
    return `scissors`;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == `rock`) {
    if (computerSelection() == `rock`) {
      return `Draw! Rock is tied with Rock`;
    } else if (computerSelection() == `paper`) {
      computerScore++;
      return `You Lose! Rock loses against Paper`;
    } else {
      playerScore++;
      return `You Win! Rock beats Scissors`;
    }
  } else if (playerSelection.toLowerCase() == `paper`) {
    if (computerSelection() == `rock`) {
      playerScore++;
      return `You Win! Paper beats Rock`;
    } else if (computerSelection() == `paper`) {
      return `Draw! Paper is tied with Paper`;
    } else {
      computerScore++;
      return `You Lose! Paper loses against Scissors`;
    }
  } else if (playerSelection.toLowerCase() == `scissors`) {
    if (computerSelection() == `rock`) {
      computerScore++;
      return `You Lose! Scissors loses against Rock`;
    } else if (computerSelection() == `paper`) {
      playerScore++;
      return `You Win! Scissors beats Paper`;
    } else {
      return `Draw! Scissors is tied with Scissors`;
    }
  } else {
    return `You entered an invalid choice. Please try again.`;
  }
}

function game() {
  for (let i = 1; i < 6; i++ || playerScore < 3 || computerScore < 3) {
    let playerSelection = prompt(`Rock, Paper, or Scissors?`);
    console.log(playRound(playerSelection, computerPlay));
  }
  if (playerScore > computerScore) {
    console.log(`You Won! The score is ${playerScore} to ${computerScore}.`);
  } else if (playerScore < computerScore) {
    console.log(`You Lose! The score is ${playerScore} to ${computerScore}`);
  } else {
    console.log(`It's a draw?`);
  }
}

game();
