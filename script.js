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
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');

function playRound(playerSelection, computerSelection) {
    let playerWinCount = 0;
    let computerWinCount = 0;
    for (i = 1; i <+ 5; i++) {
        if (playerSelection === computerSelection) {
            results.textContent += ("You tied.");
            score.textContent = playerWinCount
        } else if (playerSelection === 'rock' && computerSelection === 'Paper') {
            results.textContent += ("You lose! Paper beats Rock.");
            ++computerWinCount;
        } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
            results.textContent += " You win! Rock beats Sciscors.";
            ++playerWinCount;
        } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
            results.textContent += " You win! Paper beats Rock.";
            ++playerWinCount;
        } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
            results.textContent += " You lose! Scissors beat rock.";
            ++computerWinCount;
        } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
            results.textContent += " You lose! Rock beats scissors.";
            ++computerWinCount;
        } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
            results.textContent += " You win! Scissors beats paper.";
            ++playerWinCount;
        }

    }
}
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




/* game only goes 5 rounds no matter what 
function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    for (i = 1; i <= 5; i++) {
        let player = prompt("Input rock, paper, or scissors.");
        let computer = computerPlay();
        let value = playRound(player, computer);
        if (value === true) {
            ++playerWinCount;
            console.log("You win this round.");
        } else if (value === false) {
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
    */