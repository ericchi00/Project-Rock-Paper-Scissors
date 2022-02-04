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

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    if (playerChoice === computerChoice) {
        console.log("You tied.");
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        console.log("You lose! Paper beats Rock.");
        return false;
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You win! Rock beats Sciscors.");
        return true;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        console.log("You win! Paper beats Rock.");
        return true;
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        console.log("You lose! Scissors beat rock.");
        return false;
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        console.log("You lose! Rock beats scissors.");
        return false;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        console.log("You win! Scissors beats paper.");
        return true;
    }
}

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
    }

game();