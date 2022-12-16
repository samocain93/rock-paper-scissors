// Create elements for page and begin functionality

// 1. Function to get user Choice when action buttons are clicked 
// 2. Function to get computer choice as a random selection of RPS
// 3. Function to compare user choice vs computer Choice (getWinner)
    // If user wins, increase score, update text content and rounds
    // If computer wins, increase comp score, text content and rounds
    // if tie, no score change needed, increase rounds and update text content
// 4. Play round function which will generate user choice function, computer choice funciton and pick winner function 



const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const winnerMessageEl = document.getElementById("winner");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const buttonEl = document.getElementById("restart-btn");


let userScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;
let rounds = 0;
const computerChoices = ['rock', 'paper', 'scissors'];

//  Event listeners for each button to change player choice and increase number of rounds played

function playGame() {

rockBtn.addEventListener('click', function() {
    playerChoice = 'rock';
    rounds++;
    getComputerChoice();
    getWinner();
  
});

paperBtn.addEventListener('click', function() {
    playerChoice = 'paper';
    rounds++;
    getComputerChoice();
    getWinner();
});

scissorsBtn.addEventListener('click', function() {
    playerChoice = 'scissors';
    rounds++;
    getComputerChoice();
    getWinner();
});

}

playGame()

// Function to get a random computer choice out of the computer CHoices array and assign that value to the computer choice

function getComputerChoice() {

    let randomIndex = Math.floor(Math.random() * computerChoices.length);
    
    computerChoice = computerChoices[randomIndex];
    // console.log(computerChoice)

}


function getWinner() {

    if (playerChoice === computerChoice) {
        winnerMessageEl.textContent = "It's a tie!";
        // console.log("It is a tie!");

        } 
        else if(playerChoice === 'rock')
            if (computerChoice === 'paper') {
                winnerMessageEl.textContent = 'Paper beats rock. Computer wins!';
                computerScore++;
                computerScoreEl.textContent = computerScore;
            }
            else {
                winnerMessageEl.textContent = 'Rock beats scissors. You win!';
                userScore++;
                userScoreEl.textContent = userScore;
            }

        else if(playerChoice === 'scissors') {
            if(computerChoice === 'rock') {
                winnerMessageEl.textContent = "Rock beats scissors. Computer wins!"
                computerScore++;
                computerScoreEl.textContent = computerScore;
                }
                else {
                    winnerMessageEl.textContent = "Scissors beats paper. You win!";
                    userScore++;
                    userScoreEl.textContent = userScore;
                }
            }

        else if (playerChoice === 'paper') {
            if(computerChoice === 'rock') {
                winnerMessageEl.textContent = 'Paper beats rock. You win!';
                userScore++;
                userScoreEl.textContent = userScore;
            }
            else {
                winnerMessageEl.textContent = 'Scissors beats paper. Computer wins!';
                computerScore++;
                computerScoreEl.textContent = computerScore;
            }
        }


}


