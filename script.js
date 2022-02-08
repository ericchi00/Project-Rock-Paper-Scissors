function getRandomInt() {
    return Math.ceil(Math.random() * 3);
}

function computerPlay() {
    let num = getRandomInt();
    if (num === 1) {
        return ('Rock');
    }
    else if (num === 2) {
        return ('Paper');
    }
    else {
        return ('Scissors');
    }
}
const results = document.querySelector('.results');

const rockBtn = document.querySelector('.rockBtn');
rockBtn.addEventListener("click", () => {
    playRound('rock', computerPlay());
});

const paperBtn = document.querySelector('.paperBtn');
paperBtn.addEventListener("click", () => {
    playRound('paper', computerPlay());
});

const scissorsBtn = document.querySelector('.scissorsBtn');
scissorsBtn.addEventListener("click", () => {
    playRound('scissors', computerPlay());
});

const playerScoreContainer = document.querySelector('.playerScore');

const playerScores = document.createElement('p');
playerScoreContainer.classList.add('playerScores');

const computerScoreContainer = document.querySelector('.computerScore');

const computerScores = document.createElement('p');
computerScoreContainer.classList.add('computerScores');

let playerWinCount = 0;
let computerWinCount = 0;

function incrementPlayerWinCount() {
    ++playerWinCount;
    playerScores.textContent = playerWinCount;
    playerScoreContainer.append(playerScores);
    checkWinCount();
}

function incrementComputerWinCount() {
    ++computerWinCount;
    computerScores.textContent = computerWinCount;
    computerScoreContainer.append(computerScores);
    checkWinCount();
}

function checkWinCount () {
    if (playerWinCount === 5) {
        results.textContent += " You were the first to win 5 rounds! You win.";
    } else if (computerWinCount === 5) {
        results.textContent += " The computer won 5 rounds before you did. You lost."
    }
}

function reset() {
    // this will reset scores and counters to 0 so that users don't have to refresh page to play again
}

function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            results.textContent += (" You tied.");
        } else if (playerSelection === 'rock' && computerSelection === 'Paper') {
            results.textContent += (" You lose! Paper beats Rock.");
            incrementComputerWinCount();
        } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
            results.textContent += " You win! Rock beats Sciscors.";
            incrementPlayerWinCount();
        } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
            results.textContent += " You win! Paper beats Rock.";
            incrementPlayerWinCount();
        } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
            results.textContent += " You lose! Scissors beat rock.";
            incrementComputerWinCount();
        } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
            results.textContent += " You lose! Rock beats scissors.";
            incrementComputerWinCount();
        } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
            results.textContent += " You win! Scissors beats paper.";
            incrementPlayerWinCount();
        }
}
/*
function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    for (i = 0; i <= 5; i++) {
        let rock = rockBtn.addEventListener("click", () => {
            playRound('rock', computerPlay());
        });
        console.log(rock);
        let paper = paperBtn.addEventListener("click", () => {
            playRound('paper', computerPlay());
        });
        let scissors = scissorsBtn.addEventListener("click", () => {
            playRound('scissors', computerPlay());
        });
        if (rock === 'win' || paper === 'win' || scissors === 'win') {
            ++playerWinCount;
            console.log("You win this round.");
        } else if (rock === 'lose' || paper === 'lose' || scissors === 'lose') {
            ++computerWinCount;
            console.log("You lose this round.");
        } else {
            console.log("You tied this round.");
        }
    }
    if (playerWinCount > computerWinCount) {
        console.log("You beat the computer!");
    }
    else if (computerWinCount > playerWinCount) {
        console.log("The computer beat you!");
    } else {
        console.log("You tied the computer.");
    }
}
*/