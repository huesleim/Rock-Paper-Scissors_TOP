// Function definitions 

function getComputerChoice() {
const input = Math.floor(Math.random() * 3);
const computerChoice = choices[input];
return computerChoice;
}

function getHumanChoice(){
  while (true){
    const input = prompt("Rock, paper or scissors?").toLowerCase();
    if (choices.includes(input)) {
        alert(`You chose: ${input}`);
        return input;
    }
  }
}

    function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        alert(`Draw! Both chose ${humanChoice}`);
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
                alert(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
    }
    else {
        alert(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    }
function playGame() {
    for (let i =0; i<5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
}
 // Main game logic
const choices = ["rock", "paper", "scissors"];
let humanScore = 0, computerScore = 0
playGame();
alert(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
