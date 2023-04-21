var boxes = document.querySelectorAll("div");
var gameBoard = document.querySelector("section.gameBoard");
var displayResult = document.querySelector("h2");
var whosTurn = "X";

var box1= document.querySelector('.box1')
var box2= document.querySelector('.box2')
var box3= document.querySelector('.box3')
var box4= document.querySelector('.box4')
var box5= document.querySelector('.box5')
var box6= document.querySelector('.box6')
var box7= document.querySelector('.box7')
var box8= document.querySelector('.box8')
var box9= document.querySelector('.box9')

gameBoard.addEventListener("click", function (event) {
    var box = event.target;
    if (box.textContent === "" && whosTurn === "X"){
        box.textContent = "X"
        whosTurn = "O"
        if (box1.textContent === "X" && box2.textContent === "X" && box3.textContent === "X"){
            displayResult.textContent = "Player X won the game!";
        }else if (box4.textContent === "X" && box5.textContent === "X" && box6.textContent === "X"){
            displayResult.textContent = "Player X won the game!";
        }else if (box7.textContent === "X" && box8.textContent === "X" && box9.textContent === "X"){
            displayResult.textContent = "Player X won the game!";
        }else if (box1.textContent === "X" && box4.textContent === "X" && box7.textContent === "X"){
            displayResult.textContent = "Player X won the game!";
        }else if (box2.textContent === "X" && box5.textContent === "X" && box8.textContent === "X"){
            displayResult.textContent = "Player X won the game!";
        }else if (box3.textContent === "X" && box6.textContent === "X" && box9.textContent === "X"){
            displayResult.textContent = "Player X won the game!";
        }else if (box1.textContent === "X" && box5.textContent === "X" && box9.textContent === "X"){
            displayResult.textContent = "Player X won the game!";
        }else if (box3.textContent === "X" && box5.textContent === "X" && box7.textContent === "X"){
            displayResult.textContent = "Player X won the game!";
        }
    }else{
        box.textContent = "O"
        whosTurn = "X"
        if (box1.textContent === "O" && box2.textContent === "O" && box3.textContent === "O"){
            displayResult.textContent = "Player O won the game!";
        }else if (box4.textContent === "O" && box5.textContent === "O" && box6.textContent === "O"){
            displayResult.textContent = "Player O won the game!";
        }else if (box7.textContent === "O" && box8.textContent === "O" && box9.textContent === "O"){
            displayResult.textContent = "Player O won the game!";
        }else if (box1.textContent === "O" && box4.textContent === "O" && box7.textContent === "O"){
            displayResult.textContent = "Player O won the game!";
        }else if (box2.textContent === "O" && box5.textContent === "O" && box8.textContent === "O"){
            displayResult.textContent = "Player O won the game!";
        }else if (box3.textContent === "O" && box6.textContent === "O" && box9.textContent === "O"){
            displayResult.textContent = "Player O won the game!";
        }else if (box1.textContent === "O" && box5.textContent === "O" && box9.textContent === "O"){
            displayResult.textContent = "Player O won the game!";
        }else if (box3.textContent === "O" && box5.textContent === "O" && box7.textContent === "O"){ 
            displayResult.textContent = "Player O won the game!";
            
    }   
    
}     
});
