// game.js

// Function to get the computer's choice (Rock, Paper, or Scissors)

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomchoice = Math.floor(Math.random() * choices.length);
    return choices[randomchoice];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {

    // Making the playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();

    // Checking for a tie
     if(playerSelection === computerSelection.toLowerCase())
     {
        return "It's a tie. You both choose " + computerSelection + ".";
     }
     // Checking for all the other possible outcomes
     else if (playerSelection === "rock" && computerSelection === "Scissors" 
            ||playerSelection === "paper" && computerSelection === "Rock"
            ||playerSelection === "scissors" && computerSelection === "Paper" ){
        return "You Win! as " + playerSelection + " beats " +computerSelection + ".";
     }

     else{
        return "You Lose! as " + computerSelection + " beats " + playerSelection + "." ;
     }

}

// Function to play a 5-round game of Rock Paper Scissors
function game() {

    let playerScore = 0;
    let computerScore = 0;

    for(let round=1 ; round<=5; round++){

        const playerSelection = prompt("Round " + round + " Choose between Rock, Paper and Scissors");
        const computerSelection = getComputerChoice();

        console.log("You have selected " + playerSelection);
        console.log("Computer has selected " + computerSelection);

        result = playRound(playerSelection, computerSelection);
        console.log(result);
     // Update the scores
        if(result.includes("Win") ){
            playerScore++;
        }else if (result.includes("Lose")){
            computerScore++;
        }
    }
// Determine the winner of the game
    if(playerScore>computerScore){
        console.log("Congratulations ! You Won the Game");
    }else if(computerScore > playerScore){
        console.log("You Lost the game! Better luck next time");
    }else{
        console.log("It's a Tie");
    }
}

//Start the Game
game();