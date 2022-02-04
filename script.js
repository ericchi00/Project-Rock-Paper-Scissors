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
    return Math.ceil(Math.random() * (3 - 0));
}

alert(computerPlay());