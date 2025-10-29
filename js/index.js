const choices = ["Bear", "Ninja", "Hunter"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result= "";
  if(playerChoice === computerChoice){
    result = "Tie Game";
  }
  
  else{
    switch(playerChoice){
      case "Bear":
        result = (computerChoice === "Ninja") ? "Player Wins!" : "Computer Wins!";
        break;
      case "Ninja":
        result = (computerChoice === "Hunter") ? "Player Wins!" : "Computer Wins!";
        break;
      case "Hunter":
        result = (computerChoice === "Bear") ? "Player Wins!" : "Computer Wins!";
        break;
    }
  }
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  switch(result){
    case "Player Wins!":
      resultDisplay.classList.add("whiteText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "Computer Wins!":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}
