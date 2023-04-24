# Tic-Tac-Toe
This is a simple Tic Tac Toe game built using JavaScript, HTML, and CSS. It allows two players to play the game on a single screen. The game includes a reset button to start a new game and displays the winner at the end of the game.

## :computer: [Click here](https://sadiausmann.github.io/tic-tac-toe/) to see my live project!
## :page_facing_up: About
![project.png](https://github.com/sadiausmann/tic-tac-toe/blob/main/Snip_TEMP0001-1.png)
![project.png](https://github.com/sadiausmann/tic-tac-toe/blob/main/Snip_TEMP0001-2.png)

- Two players game.
- Game starts when player clicks on a box of the Tic Tac Toe board to make their move.
- The game will switch turns between Player 1 (X) and Player 2 (O).
- The game will end: 
    - When any of the player gets three identical symbols align vertically, horizontally or diagnally and the player wins or
    - When all the cells are filled without either of the player winning and game is a draw.
- To start a new game click on the restart button.

## :pencil2: Planning & Problem Solving

I started by planning the logic through flow chart.

![project.png](https://github.com/sadiausmann/tic-tac-toe/blob/main/Snip_TEMP0001-1.png)

- Gave basic structure to the web page with HTML and styled it with CSS.
- In javascript,  started with defining few variables like boxes, box , gameBoard and whosTurn. Created the main logic of the game. 
- The game board element has an event listener, so whenever a user clicks on a box on game board, the event occurs and calls the function. Function checks if the clicked box is a DIV element which is a tagName for all the boxes(to specify that a specific box is clicked on the game board).
It also checks whether the box is empty and whether it is the turn of the player whose symbol is "X". If both of these conditions are true, the box is marked with an "X" symbol, and it becomes the turn of the player whose symbol is "O". If the box is not empty and it is the turn of the player whose symbol is "O", the box is marked with an "O" symbol, and it becomes the turn of the player whose symbol is "X".
The function also checks if the gameOn variable is 0, if it is true the game will progress and if not, it displays 'click on the Restart button to play again.   
- Restart Button element also has an event listener attached to it. On clicking the restart button , the function checks gameOn variable if it is true or not. If it is false , it empties the textContent of all the boxes , setting the variable gameOn to 0, and clearing the display result and message to click on the restart button to play again.
- Game board is cleared and ready for the player to play again.

Credits:
Inspiration for neon display: Tic tac toe Glow - app on google play

## :rocket: Cool tech
- Programming languages used Javascript, HTML and CSS.

## :scream: Bugs to fix :poop:
- There is a break in border on the lower right right of first 2 top boxes.

## :sob: Lessons learnt
- Implement DRY (Don't Repeat Your code). By using arrays and loops.  

## :white_check_mark: Future features
- Animation
- Option for players to enter their name and display on screen. Recording their score
- Keep track of multiple game rounds with a win counter
- Allow players to customize their token (X, O, name, picture, avatar etc)


