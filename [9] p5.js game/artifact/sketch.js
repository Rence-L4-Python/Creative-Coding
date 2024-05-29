// majority of the code is based on https://youtu.be/AfhfAxKFP-s?si=xY6GHpz1bwCVRhLu
// removed flag button and changed it to right click instead
// added difficulties which change change the size of the board and increase the number of mines
// added further styling

var board = [];
var rows = 8;
var columns = 8;
var minesCount = 10;
var minesLocation = [];
var tilesClicked = 0;
var gameOver = false;

window.onload = function () {
  startGame();
};

function setDifficulty() {
  // different difficulties that are controlled by a dropdown list from html which holds different options (easy, medium, hard),  with them having varying amounts of mine tiles
  var setDiff = document.getElementById("difficultyList").value;
  if (setDiff == "1") {
    // easy difficulty
    rows = 8;
    columns = 8;
    minesCount = 10;
    board = []; // empties board
    minesLocation = []; // empties mine coordinates
    tilesClicked = 0; // changes value of amount of tiles clicked
    gameOver = false;
    document.getElementById("board").innerHTML = ""; // not calling this will result in clicking the wrong tiles
    // changes the height and width of the board to accomodate for the increasing/decreasing amounts of tiles for the mines
    document.getElementById("board").style.width = "400px";
    document.getElementById("board").style.height = "400px";
    startGame(); // starts game again
  }
  if (setDiff == "2") {
    // medium difficulty
    rows = 16;
    columns = 16;
    minesCount = 40;
    board = []; // empties board
    minesLocation = []; // empties mine coordinates
    tilesClicked = 0; // changes value of amount of tiles clicked
    gameOver = false;
    document.getElementById("board").innerHTML = ""; // not calling this will result in clicking the wrong tiles
    // changes the height and width of the board to accomodate for the increasing/decreasing amounts of tiles for the mines
    document.getElementById("board").style.width = "800px";
    document.getElementById("board").style.height = "800px";
    startGame(); // starts game again
  } else if (setDiff == "3") {
    // hard difficulty
    rows = 24;
    columns = 24;
    minesCount = 99;
    board = []; // empties board
    minesLocation = [];
    []; // empties mine coordinates
    tilesClicked = 0; // changes value of amount of tiles clicked
    gameOver = false;
    document.getElementById("board").innerHTML = ""; // not calling this will result in clicking the wrong tiles
    // changes the height and width of the board to accomodate for the increasing/decreasing amounts of tiles for the mines
    document.getElementById("board").style.width = "1200px";
    document.getElementById("board").style.height = "1200px";
    startGame(); // starts game again
  }
}

function setMines() {
  // function for setting mines
  let minesLeft = minesCount;
  while (minesLeft > 0) {
    let r = Math.floor(Math.random() * rows);
    let c = Math.floor(Math.random() * columns);
    let id = r.toString() + "-" + c.toString();
    if (!minesLocation.includes(id)) {
      minesLocation.push(id);
      minesLeft -= 1;
    }
  }
}

function startGame() {
  // function for starting game
  setMines(); // calls function for setting mines
  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.addEventListener("click", clickTile);
      tile.addEventListener("contextmenu", flagToTile);
      document.getElementById("board").append(tile);
      row.push(tile);
    }
    board.push(row);
  }
  console.log(board);
}

function newGame() {
  // function for starting new game, only works if you press the smiley face
  board = [];
  minesLocation = [];
  tilesClicked = 0;
  document.getElementById("board").innerHTML = "";
  gameOver = false;
  startGame();
}

function clickTile() {
  // function for tile clicking, makes sure that flagged tiles cannot be clicked and if mine tiles are clicked, you get a game over
  if (
    gameOver ||
    this.classList.contains("tile-clicked") ||
    this.innerText == "🚩"
  ) {
    return;
  }
  let tile = this;
  if (minesLocation.includes(tile.id)) {
    // alert("GAME OVER");
    gameOver = true;
    revealMines(); // calls function to reveal mines on loss
    return;
  }
  let coords = tile.id.split("-"); // removes the "-" in the tiles' ids ('2-2' becomes '2', etc.)
  let r = parseInt(coords[0]);
  let c = parseInt(coords[1]);
  checkMine(r, c); // calls function for checking mines
}

function flagToTile(event) {
  // function for flagging tiles , right click event
  event.preventDefault(); // prevents right click options from showing when right clicking on the board
  let tile = event.target;
  if (gameOver || tile.classList.contains("tile-clicked")) {
    return;
  }
  if (tile.innerText == "") {
    tile.innerText = "🚩";
  } else if (tile.innerText == "🚩") {
    tile.innerText = "";
  }
  checkWin();
}

function revealMines() {
  // function for revealing mines
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = board[r][c];
      if (minesLocation.includes(tile.id)) {
        tile.innerText = "💣";
        tile.style.backgroundColor = "red";
      }
    }
  }
}

function checkMine(r, c) {
  // function for checking mines, goes hand in hand with the checkTiles function
  if (r < 0 || r >= rows || c < 0 || c >= columns) {
    return;
  }
  if (board[r][c].classList.contains("tile-clicked")) {
    return;
  }
  board[r][c].classList.add("tile-clicked");
  tilesClicked += 1;
  let minesFound = 0;
  // checks the different directions of tiles
  minesFound += checkTile(r - 1, c - 1);
  minesFound += checkTile(r - 1, c);
  minesFound += checkTile(r - 1, c + 1);
  minesFound += checkTile(r, c - 1);
  minesFound += checkTile(r, c + 1);
  minesFound += checkTile(r + 1, c - 1);
  minesFound += checkTile(r + 1, c);
  minesFound += checkTile(r + 1, c + 1);
  if (minesFound > 0) {
    board[r][c].innerText = minesFound;
    board[r][c].classList.add("x" + minesFound.toString());
  } else {
    checkMine(r - 1, c - 1);
    checkMine(r - 1, c);
    checkMine(r - 1, c + 1);
    checkMine(r, c - 1);
    checkMine(r, c + 1);
    checkMine(r + 1, c - 1);
    checkMine(r + 1, c);
    checkMine(r + 1, c + 1);
  }
  checkWin();
}

function checkTile(r, c) {
  // function for checking tiles, reveals surrounding tiles if there are no nearby mines
  if (r < 0 || r >= rows || c < 0 || c >= columns) {
    return 0;
  }
  if (minesLocation.includes(r.toString() + "-" + c.toString())) {
    return 1;
  }
  return 0;
}

function checkWin() {
  // function for checking win condition, this one was called at important functions to see if the player actually won
  if (tilesClicked == rows * columns - minesCount) {
    revealMines();
    alert(
      "You won! 🎉🎉🎉 Click the smiley face to start a new game, or change the difficulty."
    );
    gameOver = true;
  }
}
