function getComputerChoice(){
    const randomChoice = Math.floor(Math.random() * 3 + 1);
    switch(randomChoice){
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissor";
    }
}

function getHumanChoice(){
    return window.prompt("Rock, Paper, or Scissor").toLowerCase();
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    function playRound(humanChoice, computerChoice){
        if(humanChoice == computerChoice){
            return "It's a tie";
        }
        else if(humanChoice == "rock"){
            if(computerChoice == "paper") computerScore++;
            else humanScore++;
        }
        else if(humanChoice == "paper"){
            if(computerChoice == "scissor") computerScore++;
            else humanScore++;
        }
        else if(humanChoice == "scissor"){
            if(computerChoice == "rock") computerScore++;
            else humanScore++;
        }
        console.log(humanChoice, computerChoice, humanScore, computerScore);
    }

    while(round < 5){
        playRound(getHumanChoice(), getComputerChoice());
        round++;
    }

    return (humanScore > computerScore) ? "Player Wins the game" : "Computer wins the game";
}

console.log(playGame());

