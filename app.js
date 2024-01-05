let user_score=0;
let com_score=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore=document.querySelector("#user-score");
const comScore=document.querySelector("#com-score");
const drawGame=()=>{
    console.log("game is draw ");
    msg.innerText="game was Draw, Play again :)"
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        user_score++
        userScore.innerText=user_score;
        console.log("you win !");
        msg.innerText=`you Win ! your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        com_score++
        comScore.innerText=com_score
        console.log("you lose!");
        msg.innerText=`you lose ! ${compChoice} beat your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const genCompChoice=()=>{
    const option = ["rock","paper","scissors"];
    const randIDX = Math.floor(Math.random()*3);
    return option[randIDX];
}

const playGame=(userChoice)=>{
    console.log("user Choice is",userChoice);
    const compChoice= genCompChoice();
    console.log("computer Choice is",compChoice);


    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin= compChoice==="paper"?false:true;
            //genarate sissors or paper

        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
    


}

    

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);

    });
});