var box = document.querySelector('.box');
var boxes = document.querySelectorAll("div");
var gameBoard = document.querySelector("section.gameBoard");
var whosTurn = "X";


gameBoard.addEventListener("click", function (event) {
    var box = event.target;
    if (box.textContent === "" && whosTurn === "X"){
        box.textContent = "X";
            whosTurn = "O"
    }else {
            box.textContent = "O";
            whosTurn = "X"
        }
});

