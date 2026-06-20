

let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector(".user_Score");
let compScorePara = document.querySelector(".comp_Score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id"); 
        playGame(userChoice);
    });
});

let drawGame = () => {
    console.log("Game was draw, please try again");
    msg.innerText = "Try again, game is draw!";
    msg.style.backgroundColor = "yellow";
};

let showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
    }
};

let playGame = (userChoice) => {
    console.log("Choice of user is", userChoice);
    let compChoice = genCompChoice();
    console.log("Choice of computer is", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

let genCompChoice = () => {
    let option = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};







