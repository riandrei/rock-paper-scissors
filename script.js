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
      return `You Lose! Rock loses against Paper`;
    } else {
      return `You Win! Rock beats Scissors`;
    }
  } else if (playerSelection.toLowerCase() == `paper`) {
    if (computerSelection() == `rock`) {
      return `You Win! Paper beats Rock`;
    } else if (computerSelection() == `paper`) {
      return `Draw! Paper is tied with Paper`;
    } else {
      return `You Lose! Paper loses against Scissors`;
    }
  } else if (playerSelection.toLowerCase() == `scissors`) {
    if (computerSelection() == `rock`) {
      return `You Lose! Scissors loses against Rock`;
    } else if (computerSelection() == `paper`) {
      return `You Win! Scissors beats Paper`;
    } else {
      return `Draw! Scissors is tied with Scissors`;
    }
  } else {
    return `You entered an invalid choice. Please try again.`;
  }
}
