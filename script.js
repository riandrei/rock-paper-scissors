let playerScore = 0;
let computerScore = 0;
const choicesContainer = document.querySelector(`.choices-container`);
const computerScoreDiv = document.querySelector(`.computer-score`);
const finalResultContainer = document.querySelector(`.final-result-container`);
const gameScreen = document.querySelector(`.hide`);
const playerScoreDiv = document.querySelector(`.player-score`);
const resultDiv = document.querySelector(`.match-prompt`);
const retryButton = document.querySelector(`.retry-btn`);
const startScreen = document.querySelector(`.start-screen`);

startScreen.addEventListener(`click`, (e) => {
  if (e.target.tagName != `BUTTON`) {
    return;
  }
  setTimeout(() => {
    gameScreen.classList.add(`game-screen`);
    startScreen.classList.add(`hide`);
    startScreen.classList.remove(`start-screen`);
  }, 100);
});

choicesContainer.addEventListener(`click`, (e) => {
  const finalScore = document.querySelector(`.final-score`);
  const wlMessage = document.querySelector(`.win-lose-message`);

  if (e.target.dataset.value == undefined) {
    return;
  }
  // calls the playRound function and passes in the value of what was clicked in the choicesContainer
  resultDiv.textContent = playRound(e.target.dataset.value, computerPlay());

  if (playerScore == 5 || computerScore == 5) {
    playerScore == 5
      ? ((wlMessage.textContent = `Congratulations!`), finalResultContainer.classList.add(`winning-popup`))
      : ((wlMessage.textContent = `Better luck next time!`), finalResultContainer.classList.add(`losing-popup`));

    finalScore.textContent = `The final score is ${playerScore} : ${computerScore}`;
  }
});

// removes the pop-up window if you lose or win and resets everything to the original values
retryButton.addEventListener(`click`, () => {
  finalResultContainer.classList.remove(`winning-popup`);
  finalResultContainer.classList.remove(`losing-popup`);

  playerScore = 0;
  computerScore = 0;

  resultDiv.textContent = `Start!`;
  playerScoreDiv.textContent = playerScore;
  computerScoreDiv.textContent = computerScore;
});

// updates the scores when player or computer wins and returns a string of how the player won, lost, or draw
function playRound(playerChoice, computerChoice) {
  updateChoiceIcon(playerChoice, computerChoice);

  const winConditions =
    (playerChoice == `paper` && computerChoice == `rock`) ||
    (playerChoice == `rock` && computerChoice == `scissors`) ||
    (playerChoice == `scissors` && computerChoice == `paper`);

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

// randomly returns rock, paper, scissor needed for playRound function
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
