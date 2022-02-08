function getRandomInt() {
    return Math.ceil(Math.random() * 3);
}

function computerPlay() {
    let num = getRandomInt();
    if (num === 1) {
        return ('rock');
    }
    else if (num === 2) {
        return ('paper');
    }
    else {
        return ('scissors');
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

const playerScore = document.querySelector('.updatePlayerScore');
const computerScore = document.querySelector('.updateComputerScore');

let playerWinCount = 0;
let computerWinCount = 0;

function incrementPlayerWinCount() {
    ++playerWinCount;
    playerScore.innerHTML = playerWinCount;
    checkWinCount();
}

function incrementComputerWinCount() {
    ++computerWinCount;
    computerScore.innerHTML = computerWinCount;
    checkWinCount();
}

//returns mesasge after 5 rounds are won and disables the buttons
function checkWinCount () {
    if (playerWinCount === 5) {
        results.innerHTML += "<span style='color: green;'><br> You were the first to win 5 rounds! You win.</span>";
        disableButtons();
    } else if (computerWinCount === 5) {
        results.innerHTML += "<span style='color: red;'><br> The computer won 5 rounds before you did. You lost.</span>"
        disableButtons();
    }
}

function disableButtons () {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}


const resetButton = document.querySelector('.reset');

function refresh() {
    reload = location.reload();
}
resetButton.addEventListener("click", refresh, false);


const resultsContainer = document.querySelector('.results');
const results = document.createElement('p');

function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            results.innerHTML += ("<br> You tied.");
            resultsContainer.append(results);
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            results.innerHTML +=  "<br> You lose! Paper beats Rock.";
            incrementComputerWinCount();
            resultsContainer.append(results);
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            results.innerHTML += "<br> You win! Rock beats Sciscors.";
            incrementPlayerWinCount();
            resultsContainer.append(results);
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            results.innerHTML += "<br> You win! Paper beats Rock.";
            incrementPlayerWinCount();
            resultsContainer.append(results);
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            results.innerHTML += "<br> You lose! Scissors beat rock.";
            incrementComputerWinCount();
            resultsContainer.append(results);
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            results.innerHTML += "<br> You lose! Rock beats scissors.";
            incrementComputerWinCount();
            resultsContainer.append(results);
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            results.innerHTML += "<br> You win! Scissors beats paper.";
            incrementPlayerWinCount();
            resultsContainer.append(results);
        }
}