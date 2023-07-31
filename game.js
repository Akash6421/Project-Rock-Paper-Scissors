    // game.js

    // Function to get the computer's choice (Rock, Paper, or Scissors)
    let playerScore =0;
    let computerScore=0;

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
            playerScore++;
            return "You Win! as " + playerSelection + " beats " +computerSelection + ".";
        }

        else{
            computerScore++;
            return "You Lose! as " + computerSelection + " beats " + playerSelection + "." ;
        }

    } 

    // Function to play a 5-round game of Rock Paper Scissors
        function game(event) {

            const playerSelection = event.target.id;
            const computerSelection = getComputerChoice();

            result = playRound(playerSelection, computerSelection);

            displayResult(result);
            displayScore();

            if(playerScore === 5 || computerScore === 5){
                announceWinner();
            }
        }


        function displayResult(result){
            const resultsDiv = document.getElementById("results");
            const resultElement = document.createElement('p');
            resultElement.textContent=result;
            resultsDiv.appendChild(resultElement);
        }

        function displayScore(){
            const scoreDiv = document.getElementById("score");
            scoreDiv.textContent= "Player Score: "+ playerScore +" " + "Computer Score: " + computerScore;
        }
        
        function announceWinner(){
            const winner = playerScore === 5 ? "Player" : "Computer"
            const winnerDiv = document.getElementById("results");
            const winnerElement = document.createElement('p');
            winnerElement.textContent= "The Winner is " + winner;
            winnerDiv.appendChild(winnerElement);

            const buttons = document.querySelectorAll("button");
            buttons.forEach((button) => button.removeEventListener('click',game));

        }
        
        // Add event listeners to the buttons
        const rockButton = document.getElementById("rock");
        const paperButton = document.getElementById("paper");
        const scissorsButton = document.getElementById("scissors");


        rockButton.addEventListener("click", game);
        paperButton.addEventListener("click", game);
        scissorsButton.addEventListener("click", game);