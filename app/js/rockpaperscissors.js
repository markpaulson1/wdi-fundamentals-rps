////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move = move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move = move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === 'rock' && computerMove === 'rock'){
        winner = 'tie';
    } else if (playerMove === 'rock' && computerMove === 'paper'){
        winnter = 'computer'
    } else if (playerMove === 'rock' && computerMove === 'scissors'){
        winnter = 'player'
    } else if (playerMove === 'paper' && computerMove === 'rock'){
        winnter = 'player'
    } else if (playerMove === 'paper' && computerMove === 'paper'){
        winnter = 'tie'
    } else if (playerMove === 'paper' && computerMove === 'scissors'){
        winnter = 'computer'
    } else if (playerMove === 'scissors' && computerMove === 'scissors'){
        winnter = 'tie'
    }  else if (playerMove === 'scissors' && computerMove === 'rock'){
        winnter = 'computer'
    } else (playerMove === 'scissors' && computerMove === 'paper'){
        winnter = 'player'
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5){
        if (getWinner()==='player'){
            playerWins += 1;
        } else if (getWinner() === 'computer'){
            computerWins += 1;
        }
        console.log("Player chose '" + getPlayerMove() + "' while the computer chose '" + getComputerMove() + "'.");
        console.log("Winner is: " + getWinner() + ".");
        console.log("The score is currently " + playerWins + " to " + computerWins + ".\n");
    }
    return [playerWins, computerWins];
}

playToFive();

