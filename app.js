let gameRound = 0;
const squares = document.querySelectorAll(".square");
const playerTurn = document.querySelector(".announce-turn");
const draw = document.querySelector(".draw");
let xWin;
let oWin;

function playersPickSquares() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function (e) {
      // Players take turns
      gameRound++;

      if (
        gameRound === 1 ||
        gameRound === 3 ||
        gameRound === 5 ||
        gameRound === 7 ||
        gameRound === 9
      ) {
        playerTurn.classList.add("show-turn");
        playerTurn.textContent = "Player 1";
        playerTurn.style.color = "red";
        if (!squares[i].firstChild) {
          squares[i].textContent = "X";
          squares[i].style.color = "red";
        }
      } else if (
        gameRound === 0 ||
        gameRound === 2 ||
        gameRound === 4 ||
        gameRound === 6 ||
        gameRound === 8
      ) {
        playerTurn.classList.add("show-turn");
        playerTurn.textContent = "Player 2";
        playerTurn.style.color = "black";
        if (!squares[i].firstChild) {
          squares[i].textContent = "O";
        }
      }

      //   ------------------------

      //   Determine winner based on winning patterns on the board

      if (
        squares[0].textContent === "X" &&
        squares[3].textContent === "X" &&
        squares[6].textContent === "X"
      ) {
        playerTurn.textContent = "Player 1 wins!";
        xWin = true;
        playerTurn.style.color = "red";

        setTimeout(() => {
          location.reload();
        }, 3000);
      } else if (
        squares[0].textContent === "O" &&
        squares[3].textContent === "O" &&
        squares[6].textContent === "O"
      ) {
        playerTurn.textContent = "Player 2 wins!";
        oWin = true;
        playerTurn.style.color = "black";
        setTimeout(() => {
          location.reload();
        }, 3000);
      }

      if (
        squares[0].textContent === "X" &&
        squares[1].textContent === "X" &&
        squares[2].textContent === "X"
      ) {
        playerTurn.textContent = "Player 1 wins!";
        xWin = true;
        playerTurn.style.color = "red";
        setTimeout(() => {
          location.reload();
        }, 3000);
      } else if (
        squares[0].textContent === "O" &&
        squares[1].textContent === "O" &&
        squares[2].textContent === "O"
      ) {
        playerTurn.textContent = "Player 2 wins!";
        oWin = true;
        playerTurn.style.color = "black";
        setTimeout(() => {
          location.reload();
        }, 3000);
      }

      if (
        squares[0].textContent === "X" &&
        squares[4].textContent === "X" &&
        squares[8].textContent === "X"
      ) {
        playerTurn.textContent = "Player 1 wins!";
        xWin = true;
        playerTurn.style.color = "red";
        setTimeout(() => {
          location.reload();
        }, 3000);
      } else if (
        squares[0].textContent === "O" &&
        squares[4].textContent === "O" &&
        squares[8].textContent === "O"
      ) {
        playerTurn.textContent = "Player 2 wins!";
        oWin = true;
        playerTurn.style.color = "black";
        setTimeout(() => {
          location.reload();
        }, 3000);
      }

      if (
        squares[3].textContent === "X" &&
        squares[4].textContent === "X" &&
        squares[5].textContent === "X"
      ) {
        playerTurn.textContent = "Player 1 wins!";
        xWin = true;
        playerTurn.style.color = "red";
        setTimeout(() => {
          location.reload();
        }, 3000);
      } else if (
        squares[3].textContent === "O" &&
        squares[4].textContent === "O" &&
        squares[5].textContent === "O"
      ) {
        playerTurn.textContent = "Player 2 wins!";
        oWin = true;
        playerTurn.style.color = "black";
        setTimeout(() => {
          location.reload();
        }, 3000);
      }

      if (
        squares[1].textContent === "X" &&
        squares[4].textContent === "X" &&
        squares[7].textContent === "X"
      ) {
        playerTurn.textContent = "Player 1 wins!";
        xWin = true;
        playerTurn.style.color = "red";
        setTimeout(() => {
          location.reload();
        }, 3000);
      } else if (
        squares[1].textContent === "O" &&
        squares[4].textContent === "O" &&
        squares[7].textContent === "O"
      ) {
        playerTurn.textContent = "Player 2 wins!";
        oWin = true;
        playerTurn.style.color = "black";
        setTimeout(() => {
          location.reload();
        }, 3000);
      }

      if (
        squares[2].textContent === "X" &&
        squares[5].textContent === "X" &&
        squares[8].textContent === "X"
      ) {
        playerTurn.textContent = "Player 1 wins!";
        xWin = true;
        playerTurn.style.color = "red";
        setTimeout(() => {
          location.reload();
        }, 3000);
      } else if (
        squares[2].textContent === "O" &&
        squares[5].textContent === "O" &&
        squares[8].textContent === "O"
      ) {
        playerTurn.textContent = "Player 2 wins!";
        oWin = true;
        playerTurn.style.color = "black";
        setTimeout(() => {
          location.reload();
        }, 3000);
      }

      if (
        squares[2].textContent === "X" &&
        squares[4].textContent === "X" &&
        squares[6].textContent === "X"
      ) {
        playerTurn.textContent = "Player 1 wins!";
        xWin = true;
        playerTurn.style.color = "red";
        setTimeout(() => {
          location.reload();
        }, 3000);
      } else if (
        squares[2].textContent === "O" &&
        squares[4].textContent === "O" &&
        squares[6].textContent === "O"
      ) {
        playerTurn.textContent = "Player 2 wins!";
        oWin = true;
        playerTurn.style.color = "black";
        setTimeout(() => {
          location.reload();
        }, 3000);
      }

      if (
        squares[6].textContent === "X" &&
        squares[7].textContent === "X" &&
        squares[8].textContent === "X"
      ) {
        playerTurn.textContent = "Player 1 wins!";
        xWin = true;
        playerTurn.style.color = "red";
        setTimeout(() => {
          location.reload();
        }, 3000);
      } else if (
        squares[6].textContent === "O" &&
        squares[7].textContent === "O" &&
        squares[8].textContent === "O"
      ) {
        playerTurn.textContent = "Player 2 wins!";
        oWin = true;
        playerTurn.style.color = "black";
        setTimeout(() => {
          location.reload();
        }, 3000);
      }

      if (!oWin && gameRound === 9) {
        draw.textContent = "Draw!";
        setTimeout(() => {
          location.reload();
        }, 3000);
      } else if (!xWin && gameRound === 9) {
        draw.textContent = "Draw!";
        setTimeout(() => {
          location.reload();
        }, 3000);
      }
    });
  }
}

playersPickSquares();
