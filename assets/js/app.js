// Create elements for page and begin functionality

const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const winnerMessageEl = document.getElementById("winner");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const buttonEl = document.getElementById("restart-btn");

let userScore = 0;
let computerScore = 0;
let rounds = 0;
let userChoice = "";



// 1. Function to get user Choice when action buttons are clicked 
// 2. Function to get computer choice as a random selection of RPS
// 3. Function to compare user choice vs computer Choice (getWinner)
    // If user wins, increase score, update text content and rounds
    // If computer wins, increase comp score, text content and rounds
    // if tie, no score change needed, increase rounds and update text content
// 4. Play round function which will generate user choice function, computer choice funciton and pick winner function 


// PLAY ROUND FUNCTION //


function playRound() {
    getWinner();        
}



    // This function is working to return the random computer choice

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        let computerChoice = (Math.floor(Math.random() * choices.length));
        return choices[computerChoice];
           
    }

 

    function getWinner(userChoice, computerChoice) {
        

        rockBtn.addEventListener("click", function() {
            userChoice = "rock";
            playRound();
            
        })

        paperBtn.addEventListener("click", function() {
            userChoice = "paper";
            playRound();
           
        })

        scissorsBtn.addEventListener("click", function() {
            userChoice = "scissors";
            playRound();
        })

        getComputerChoice();

            


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

    getWinner();






       // function getUserChoice() {
    //     // These are working to grab and return user choice on click for the buttons
    //     rockBtn.addEventListener('click', function() {
    //         userChoice = "rock"; 
    //     })

    //     paperBtn.addEventListener('click', function() {
    //         userChoice = "paper";
    //     })

    //     scissorsBtn.addEventListener('click', function() {
    //         userChoice = "scissors";
            
    //     })
            
    // }
