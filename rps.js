// Function definitions

function getComputerChoice() {
    const input = Math.floor(Math.random() * 3);
    const computerChoice = choices[input];
    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        text.textContent = `Draw! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        text.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        text.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    scoreBoard.textContent = `You: ${humanScore} - Computer: ${computerScore}`;
}

// Formatting
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.flexDirection = "column";
document.body.style.gap = "20px";
document.body.style.fontSize = "15px";
document.body.style.fontFamily = "Montserrat, sans-serif";

// Constants and variables
const choices = ["rock", "paper", "scissors"];
let humanScore = 0,
    computerScore = 0;

//// UI Elements
const scoreBoard = document.createElement("div");
scoreBoard.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
document.body.appendChild(scoreBoard);

const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.gap = "15px";
container.style.height = "80vh";
container.style.justifyContent = "center";

const buttons = document.createElement("div");
buttons.style.display = "flex";
buttons.style.justifyContent = "center";

const rock = document.createElement("button");
rock.textContent = "🪨";
rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
rock.style.backgroundColor = "blue";
rock.style.width = "90px";
rock.style.height = "90px";
rock.style.fontSize = "40px";
buttons.appendChild(rock);
rock.addEventListener("mouseover", () => {
    rock.style.backgroundColor = "lightblue";
});
rock.addEventListener("mouseout", () => {
    rock.style.backgroundColor = "blue";
});

const paper = document.createElement("button");
paper.textContent = "📄";
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
paper.style.backgroundColor = "green";
paper.style.width = "90px";
paper.style.height = "90px";
paper.style.fontSize = "40px";
buttons.appendChild(paper);
paper.addEventListener("mouseover", () => {
    paper.style.backgroundColor = "lightgreen";
});
paper.addEventListener("mouseout", () => {
    paper.style.backgroundColor = "green";
});

const scissors = document.createElement("button");
scissors.textContent = "✂️";
scissors.addEventListener("click", () =>
    playRound("scissors", getComputerChoice())
);
scissors.style.backgroundColor = "red";
scissors.style.width = "90px";
scissors.style.height = "90px";
scissors.style.fontSize = "40px";
buttons.appendChild(scissors);
scissors.addEventListener("mouseover", () => {
    scissors.style.backgroundColor = "lightcoral";
});
scissors.addEventListener("mouseout", () => {
    scissors.style.backgroundColor = "red";
});

const text = document.createElement("div");
text.textContent = "Let's play! Choose your weapon:";

container.appendChild(buttons);
container.appendChild(text);

document.body.appendChild(container);
