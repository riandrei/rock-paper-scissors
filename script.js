let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelector(`.buttons`);
const playerScoreDiv = document.querySelector(`.player-score`);
const computerScoreDiv = document.querySelector(`.computer-score`);
const startScreen = document.querySelector(`.start-screen`);
const playScreen = document.querySelector(`.hide`);
const finalResult = document.querySelector(`.final-result`);
const finalScore = document.querySelector(`.final-score`);
const wlMessage = document.querySelector(`.win-lose-message`);
const retryButton = document.querySelector(`.retry-btn`);

startScreen.addEventListener(`click`, (e) => {
  if (e.target.tagName != `BUTTON`) {
    return;
  }

  playScreen.classList.add(`play-screen`);
  playScreen.classList.remove(`hide`);
  startScreen.classList.add(`hide`);
  startScreen.classList.remove(`start-screen`);
});

buttons.addEventListener(`click`, (e) => {
  const resultDiv = document.querySelector(`.result-prompt`);

  if (e.target.dataset.value == undefined) {
    return;
  }

  resultDiv.textContent = playRound(e.target.dataset.value, computerPlay(), resultDiv);

  if (playerScore == 5) {
    wlMessage.textContent = `Congratulations!`;
    finalScore.textContent = `The final score is ${playerScore} : ${computerScore}`;

    playerScore = 0;
    computerScore = 0;

    resultDiv.textContent = `Start!`;
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;

    finalResult.classList.add(`congratulations`);
  }

  if (computerScore == 5) {
    wlMessage.textContent = `Better luck next time!`;
    finalScore.textContent = `The final score is ${playerScore} : ${computerScore}`;

    resultDiv.textContent = `Start!`;
    playerScore = 0;
    computerScore = 0;

    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;

    finalResult.classList.add(`better-luck`);
  }
});

retryButton.addEventListener(`click`, (e) => {
  finalResult.classList.remove(`congratulations`);
  finalResult.classList.remove(`better-luck`);
});

function playRound(playerChoice, computerChoice, resultDiv) {
  const winConditions =
    (playerChoice == `paper` && computerChoice == `rock`) ||
    (playerChoice == `rock` && computerChoice == `scissors`) ||
    (playerChoice == `scissors` && computerChoice == `paper`);
  const linebreak = document.createElement(`br`);

  updateChoiceIcon(playerChoice, computerChoice);

  if (winConditions) {
    playerScore++;
    playerScoreDiv.textContent = playerScore;
    return `You win! \n${playerChoice} beats ${computerChoice}`;
  }

  if (playerChoice == computerChoice) {
    return `Draw! \n${playerChoice} and ${computerChoice} is tied.`;
  }

  computerScore++;
  computerScoreDiv.textContent = computerScore;
  return `You lose! \n${playerChoice} loses against ${computerChoice}`;
}

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

// updates the rock-paper-scissors picture depending on what the user and computer choice
function updateChoiceIcon(playerChoice, computerChoice) {
  const playerChoiceBox = document.querySelector(`.user-choice`);
  const computerChoiceBox = document.querySelector(`.computer-choice`);

  if (playerChoice == `rock`) {
    playerChoiceBox.src = 'images/rock.svg';
  }
  if (playerChoice == `paper`) {
    playerChoiceBox.src = `images/paper.svg`;
  }
  if (playerChoice == `scissors`) {
    playerChoiceBox.src = `images/scissors.svg`;
  }

  playerChoiceBox.classList.add(`flip`);

  if (computerChoice == `rock`) {
    computerChoiceBox.src = 'images/rock.svg';
  }
  if (computerChoice == `paper`) {
    computerChoiceBox.src = `images/paper.svg`;
  }
  if (computerChoice == `scissors`) {
    computerChoiceBox.src = `images/scissors.svg`;
  }
}
