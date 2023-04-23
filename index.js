var boxes = document.querySelectorAll("div");
var box = document.querySelector("div");
var gameBoard = document.querySelector("section.gameBoard");
var displayResult = document.querySelector("h2");
var h3 = document.querySelector("h3");
var restartButton = document.querySelector("button");
var whosTurn = "X";
var gameOn = 0;

function result() {
  if (
    (boxes[0].textContent === "X" &&
      boxes[1].textContent === "X" &&
      boxes[2].textContent === "X") ||
    (boxes[3].textContent === "X" &&
      boxes[4].textContent === "X" &&
      boxes[5].textContent === "X") ||
    (boxes[6].textContent === "X" &&
      boxes[7].textContent === "X" &&
      boxes[8].textContent === "X") ||
    (boxes[0].textContent === "X" &&
      boxes[3].textContent === "X" &&
      boxes[6].textContent === "X") ||
    (boxes[1].textContent === "X" &&
      boxes[4].textContent === "X" &&
      boxes[7].textContent === "X") ||
    (boxes[2].textContent === "X" &&
      boxes[5].textContent === "X" &&
      boxes[8].textContent === "X") ||
    (boxes[0].textContent === "X" &&
      boxes[4].textContent === "X" &&
      boxes[8].textContent === "X") ||
    (boxes[2].textContent === "X" &&
      boxes[4].textContent === "X" &&
      boxes[6].textContent === "X")
  ) {
    displayResult.textContent = "Player X won the game!";
    gameOn = 1;
  } else if (
    (boxes[0].textContent === "O" &&
      boxes[1].textContent === "O" &&
      boxes[2].textContent === "O") ||
    (boxes[3].textContent === "O" &&
      boxes[4].textContent === "O" &&
      boxes[5].textContent === "O") ||
    (boxes[6].textContent === "O" &&
      boxes[7].textContent === "O" &&
      boxes[8].textContent === "O") ||
    (boxes[0].textContent === "O" &&
      boxes[3].textContent === "O" &&
      boxes[6].textContent === "O") ||
    (boxes[1].textContent === "O" &&
      boxes[4].textContent === "O" &&
      boxes[7].textContent === "O") ||
    (boxes[2].textContent === "O" &&
      boxes[5].textContent === "O" &&
      boxes[8].textContent === "O") ||
    (boxes[0].textContent === "O" &&
      boxes[4].textContent === "O" &&
      boxes[8].textContent === "O") ||
    (boxes[2].textContent === "O" &&
      boxes[4].textContent === "O" &&
      boxes[6].textContent === "O")
  ) {
    displayResult.textContent = "Player O won the game!";
    gameOn = 1;
  } else if (
    boxes[0].textContent !== "" &&
    boxes[1].textContent !== "" &&
    boxes[2].textContent !== "" &&
    boxes[3].textContent !== "" &&
    boxes[4].textContent !== "" &&
    boxes[5].textContent !== "" &&
    boxes[6].textContent !== "" &&
    boxes[7].textContent !== "" &&
    boxes[8].textContent !== ""
  ) {
    displayResult.textContent = "Game Draw!";
    gameOn = 1;
  }
}

gameBoard.addEventListener("click", function (event) {
  var box = event.target;
  if (box.tagName === "DIV" && gameOn === 0) {
    if (box.textContent === "" && whosTurn === "X") {
      box.textContent = "X";
      whosTurn = "O";
    } else if (box.textContent !== "X" && whosTurn === "O") {
      box.textContent = "O";
      whosTurn = "X";
    }
  } else if (box.tagName === "DIV" && gameOn !== "0") {
    h3.textContent = "Click on Restart to play again.";
  }
  result();
});

restartButton.addEventListener("click", function () {
  if (gameOn !== 0) {
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].textContent = "";
      gameOn = 0;
      displayResult.textContent = "";
      h3.textContent = "";
    }
  }
});
