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

function getRandomInt() {
    return Math.ceil(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    if (playerChoice === computerChoice) {
        return ("You tied.");
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        return ("You lose! Paper beats Rock.");
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return ("You win! Rock beats Sciscors.");
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return ("You win! Paper beats Rock.");
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        return ("You lose! Scissors beat rock.");
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        return ("You lose! Rock beats scissors.");
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return ("You win! Scissors beats paper.");
    }
}

    const playerSelection = "paper";
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));