// Create elements for page and begin functionality

const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const winnerMessageEl = document.getElementById("winner");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const buttonEl = document.getElementById("restart-btn");


// 1. Create game function to contain all logic and functions
// 2. Create function to get random computer choice
// 3. Get index to return value at index from random choices array
// 4. Define playRound function




function playRound() {
    game();
}



function game() {

    // Score variables for each player
    var userScore = 0;
    var computerScore = 0;
    var rounds = 0;
    var userChoice;


    // This function is working to return the random computer choice

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        var computerChoice = (Math.floor(Math.random() * choices.length));
        return choices[computerChoice];
           
    }

    function getUserChoice() {
        // These are working to grab and return user choice on click for the buttons
        rockBtn.addEventListener('click', function() {
            userChoice = "rock"; 
        })

        paperBtn.addEventListener('click', function() {
            userChoice = "paper";
        })

        scissorsBtn.addEventListener('click', function() {
            userChoice = "scissors";
            
        })
            
    }

    function getWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            winnerMessageEl.textContent = "It's a tie!"
        }
        else if (userChoice === "rock"){
            if(computerChoice === "paper") {
                winnerMessageEl.textContent = "Paper beats rock. Computer wins!";
                computerScore++;
                computerScoreEl.textContent = computerScore;
            } else {
                winnerMessageEl.textContent = "Rock beats scissors. You win!";
                userScore++;
                userScoreEl.textContent = userScore;
                }
        } 
        else if (userChoice === "paper"){
            if(computerChoice === "rock") {
                winnerMessageEl.textContent = "Paper beats rock. You win!";
                userScore++;
                userScoreEl.textContent = userScore;
            } else {
                winnerMessageEl.textContent = "Scissors cuts paper. Computer wins!";
                computerScore++;
                computerScoreEl.textContent = computerScore;
            }
        }
        else if (userChoice === "scissors") {
            if (computerChoice === "rock") {
                winnerMessageEl.textContent = "Rock beats scissors. Computer wins!";
                computerScore++;
                computerScoreEl.textContent = computerScore;
            } else {
                winnerMessageEl.textContent = "Scissors beats paper. You win!";
                userScore++;
                userScoreEl.textContent = userScore;
            }
        }

        


}

}
