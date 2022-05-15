let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelector(`.buttons`);
const playerScoreDiv = document.querySelector(`.player-score`);
const computerScoreDiv = document.querySelector(`.computer-score`);

buttons.addEventListener(`click`, (e) => {
  const resultDiv = document.querySelector(`.result`);

  if (e.target.value == undefined) {
    return;
  }

  resultDiv.textContent = playRound(e.target.value, computerPlay());
  if (playerScore == 5) {
    playerScore = 0;
    computerScore = 0;
    playerScoreDiv.textContent = `You: ${playerScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
    resultDiv.textContent = `You Win!`;
  }
  if (computerScore == 5) {
    playerScore = 0;
    computerScore = 0;
    playerScoreDiv.textContent = `You: ${playerScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
    resultDiv.textContent = `You Lose!`;
  }
});

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
    (playerChoice == `paper` && computerChoice == `rock`) ||
    (playerChoice == `rock` && computerChoice == `scissors`) ||
    (playerChoice == `scissors` && computerChoice == `paper`);

  if (winConditions) {
    playerScore++;
    playerScoreDiv.textContent = `You: ${playerScore}`;
    return `You win! ${playerChoice} beats ${computerChoice}`;
  }

  if (playerChoice == computerChoice) {
    return `Draw! ${playerChoice} and ${computerChoice} is tied.`;
  }

  computerScore++;
  computerScoreDiv.textContent = `Computer: ${computerScore}`;
  return `You lose! ${playerChoice} loses against ${computerChoice}`;
}
