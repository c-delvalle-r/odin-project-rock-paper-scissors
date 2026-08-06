/*
DESCRIBE:
I want to create a rock-paper-scissors game that runs on the terminal only. The game is played with one human aganst the computer.
The computer picks one at random, the human picks one through a browser prompt. There is a scoreboard that keeps track of the
number of wins each players has.
*/

console.log(getHumanChoice()); 

// The round BEGINS
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
    let choice = prompt('Choose: rock, paper or scissors');
    return choice;
}

// The input gets validated ---- ASSUME A VALID INPUT FOR NOW


// The winner is decided


// The winner counter is incremented by one


// You get the option to play another round ----- ASSUME JUST ONE ROUND FOR NOW