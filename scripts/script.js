/*
DESCRIBE:
I want to create a rock-paper-scissors game that runs on the terminal only. The game is played with one human aganst the computer.
The computer picks one at random, the human picks one through a browser prompt. There is a scoreboard that keeps track of the
number of wins each players has.
*/

let humanScore = 0;
let computerScore = 0;

playRound();

// The round BEGINS
function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    let winner = getWinner(humanChoice, computerChoice);
    updateCounter(winner);
    if (winner === 'computer_wins') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice} :(`);
    } else if (winner === 'human_wins') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (winner === 'invalid_input') {
        console.log(`${humanChoice} is not a valid input.`);
    } else {
        console.log('Draw, no harm done.');
    }

    console.log(`Current score: Human ${humanScore} - ${computerScore} Computer`);
}

// The computer picks one option randomly
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: 
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// The human gets prompted to input an option
function getHumanChoice() {
    let choice = prompt('Choose: rock, paper or scissors').toLowerCase();
    return choice;
}

// The input gets validated ---- ASSUME A VALID INPUT FOR NOW


// The winner is decided
function getWinner(humanChoice, computerChoice) {
    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            return 'draw';
        } else if (computerChoice === 'paper') {
            return 'computer_wins';
        } else {
            return 'human_wins';
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'human_wins';
        } else if (computerChoice === 'paper') {
            return 'draw';
        } else {
            return 'computer_wins';
        }
    } else if (humanChoice === 'scissors') {
         if (computerChoice === 'rock') {
            return 'computer_wins';
        } else if (computerChoice === 'paper') {
            return 'human_wins';
        } else {
            return 'draw';
        }
    } else {
        return 'invalid_input';
    }
}

// The winner counter is incremented by one
function updateCounter(winner) {
    if (winner === 'human_wins') {
        humanScore++;
    } else if (winner === 'computer_wins') {
        computerScore++;
    }
}

// Logic to play 5 rounds before deciding a final winner