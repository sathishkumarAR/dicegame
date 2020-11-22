
function rollDice(){
    var player1= Math.floor(Math.random()*6)+1;
    var player1Source= "images/dice"+player1+".png";
    document.querySelectorAll("img")[0].setAttribute("src", player1Source);
    
    
    var player2= Math.floor(Math.random()*6)+1;
    var player2Source= "images/dice"+player2+".png";
    document.querySelectorAll("img")[1].setAttribute("src", player2Source);
    
    
    if(player1>player2){
        document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
    }
    else if(player1< player2){
        document.querySelector("h1").innerHTML="Player 2 wins 🚩";
    }
    else{
        document.querySelector("h1").innerHTML="Tie !"
    }
}

