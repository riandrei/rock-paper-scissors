let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelector(`.buttons`);
const playerScoreDiv = document.querySelector(`.player-score`);
const computerScoreDiv = document.querySelector(`.computer-score`);
const startScreen = document.querySelector(`.start-screen`);
const playScreen = document.querySelector(`.hide`);

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

  if (e.target.value == undefined) {
    return;
  }

  resultDiv.textContent = playRound(e.target.value, computerPlay(), resultDiv);

  if (playerScore == 5) {
    playerScore = 0;
    computerScore = 0;
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;
    resultDiv.textContent = `You Win!`;
  }

  if (computerScore == 5) {
    playerScore = 0;
    computerScore = 0;
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;
    resultDiv.textContent = `You Lose!`;
  }
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
