let player=undefined;
let computer=undefined;
let win=0;
let lose=0;
let draw=0;
function computerPlay(){
    let rdm=Math.floor(Math.random()*3);
    if(rdm==0) return "Rock";
    else if(rdm==1) return "Paper";
    else return "Scissor";
}

function choose_rock(){
    document.getElementById("player_choice").src="assets/rock.jpg";
    document.getElementById("paper").style.backgroundColor="white";
    document.getElementById("rock").style.backgroundColor="aqua";
    document.getElementById("scissor").style.backgroundColor="white";
    player="Rock";
};

function choose_paper(){
    document.getElementById("player_choice").src="assets/paper.png";
    document.getElementById("paper").style.backgroundColor="aqua";
    document.getElementById("rock").style.backgroundColor="white";
    document.getElementById("scissor").style.backgroundColor="white";
    player="Paper";
}

function choose_scissor(){
    document.getElementById("player_choice").src="assets/scissor.jpeg";
    document.getElementById("paper").style.backgroundColor="white";
    document.getElementById("rock").style.backgroundColor="white";
    document.getElementById("scissor").style.backgroundColor="aqua";
    player="Scissor";
}

function play(player,computer){
    player=player.toLowerCase();
    computer=computerPlay();
    computer=computer.toLowerCase();
    if(player=="rock"){
        if(computer==player){
             draw++;
             return "You Draw!!!";
        }
        else if(computer=="paper"){
            lose++;
            return "You Lose! Rock lose Paper";
        }
        else{
            win++;
            return "You Win! Rock win Scissor";
        }
    }
    else if(player=="paper"){
        if(computer==player){
            draw++;
             return "You Draw!!!";
        }
        else if(computer=="scissor"){
            lose++;
            return "You Lose! Paper lose Scissor";
        }
        else{
            win++;
            return "You Win! Paper win Rock";
        }
    }
    else{
        if(computer==player){
            draw++;
            return "You Draw!!!";
       }
       else if(computer=="rock"){
           lose++;
           return "You Lose! Scissor lose Rock";
       }
       else{
           win++;
           return "You Win! Scissor win Paper";
       }
    }
}

function confirm(){
    let result=play(player,computer);
    document.getElementById("battleLog").innerHTML=result;
    let temp="WIN:"+win+" LOSE:"+lose+" DRAW:"+draw;
    document.getElementById("score").innerHTML=temp;
}