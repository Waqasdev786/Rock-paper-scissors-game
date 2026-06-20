let userChoice = 0;
let compChoice = 0;

let choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
         userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

let genCompChoice = () => {
    let option = ["Rock","Paper","Scissors"];
    let randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}

let showWinner = (userWin) => {
    if(userWin){
        console.log("You are win");
    }else{
        console.log("You are lose");
    }
}

let drawGame = () => {
    console.log("game is draw");
}

let playGame = (userChoice) => {
    console.log("choice of user is", userChoice);
    let compChoice = genCompChoice();
    console.log("choice of comp is" , compChoice);

    if (userChoice === compChoice){
        let again = drawGame();
        console.log(again);
    }else{
       let userWin = true;
       if(userChoice === "Rock"){
        userWin = compChoice === "Paper" ? false:true;
       }else if (userChoice === "Paper"){
        userWin = compChoice === "Scissors" ? false:true;
       }else{
        userWin = compChoice === "Rock" ? false:true;
       }
       showWinner(userWin);
    }

}