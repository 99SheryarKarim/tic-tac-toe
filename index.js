class TicTacToe {
  constructor() {
    this.playerX = "X";
    this.playerO = "O";
    this.cells = [...document.querySelectorAll(".cell")];

    // Store individual cells separately for checking
    this.cellone = document.getElementById("1");
    this.celltwo = document.getElementById("2");
    this.cellthree = document.getElementById("3");
    this.cellFour = document.getElementById("4");
    this.cellFive = document.getElementById("5");
    this.cellSix = document.getElementById("6");
    this.cellSeven = document.getElementById("7");
    this.cellEight = document.getElementById("8");
    this.cellNine = document.getElementById("9");
  }

  playMove(cellIndex) {
    const cell = this.cells[cellIndex];
    if (!cell.textContent.trim()) {
      cell.textContent = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
      return true;
    }
  }

  checkWinner() {
    const cellOneValue = this.cellone.textContent.trim();
    const cellTwoValue = this.celltwo.textContent.trim();
    const cellThreeValue = this.cellthree.textContent.trim();
    const cellFourValue = this.cellFour.textContent.trim();
    const cellFiveValue = this.cellFive.textContent.trim();
    const cellSixValue = this.cellSix.textContent.trim();
    const cellSevenValue = this.cellSeven.textContent.trim();
    const cellEightValue = this.cellEight.textContent.trim();
    const cellNineValue = this.cellNine.textContent.trim();

    if (
      (cellOneValue === "X" &&
        cellTwoValue === "X" &&
        cellThreeValue === "X") ||
      (cellOneValue === "X" &&
        cellFourValue === "X" &&
        cellSevenValue === "X") ||
      (cellOneValue === "X" &&
        cellFiveValue === "X" &&
        cellNineValue === "X") ||
      (cellTwoValue === "X" &&
        cellFiveValue === "X" &&
        cellEightValue === "X") ||
      (cellThreeValue === "X" &&
        cellSixValue === "X" &&
        cellNineValue === "X") ||
      (cellThreeValue === "X" &&
        cellFiveValue === "X" &&
        cellSevenValue === "X") ||
      (cellFourValue === "X" &&
        cellFiveValue === "X" &&
        cellSixValue === "X") ||
      (cellSevenValue === "X" &&
        cellEightValue === "X" &&
        cellNineValue === "X")
    ) {
      alert("Player X wins");
    } else if (
      (cellOneValue === "O" &&
        cellTwoValue === "O" &&
        cellThreeValue === "O") ||
      (cellOneValue === "O" &&
        cellFourValue === "O" &&
        cellSevenValue === "O") ||
      (cellOneValue === "O" &&
        cellFiveValue === "O" &&
        cellNineValue === "O") ||
      (cellTwoValue === "O" &&
        cellFiveValue === "O" &&
        cellEightValue === "O") ||
      (cellThreeValue === "O" &&
        cellSixValue === "O" &&
        cellNineValue === "O") ||
      (cellThreeValue === "O" &&
        cellFiveValue === "O" &&
        cellSevenValue === "O") ||
      (cellFourValue === "O" &&
        cellFiveValue === "O" &&
        cellSixValue === "O") ||
      (cellSevenValue === "O" &&
        cellEightValue === "O" &&
        cellNineValue === "O")
    ) {
      alert("Player O wins");
    }
  }

  isBoardFull() {
    return this.cells.every((cell) => cell.textContent.trim());
  }

  clearBoard() {
    this.cells.forEach((cell) => {
      cell.textContent = "";
    });
  }
}

const game = new TicTacToe();

function tap(cellIndex) {
  const validIndex = cellIndex >= 0 && cellIndex < game.cells.length;
  if (validIndex && game.playMove(cellIndex)) {
    // Check for a winner after each move
    game.checkWinner();
    if (game.isBoardFull()) {
      // const restartGame = confirm("Want to restart the game?");
    }
  }
}
function restart() {
  game.clearBoard();
}
