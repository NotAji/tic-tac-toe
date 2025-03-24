const urlParams = new URLSearchParams(window.location.search);

const name1 = urlParams.get("name1");
const name2 = urlParams.get("name2");

const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
let turn = document.getElementById("move");

const restartBtn = document.getElementById("restartBtn");

const grid1 = document.getElementById("g1");
const grid2 = document.getElementById("g2");
const grid3 = document.getElementById("g3");
const grid4 = document.getElementById("g4");
const grid5 = document.getElementById("g5");
const grid6 = document.getElementById("g6");
const grid7 = document.getElementById("g7");
const grid8 = document.getElementById("g8");
const grid9 = document.getElementById("g9");

const player1Marker = "X";
const player2Marker = "O";

let move = player1Marker;

let checkg1;
let checkg2;
let checkg3;
let checkg4;
let checkg5;
let checkg6;
let checkg7;
let checkg8;
let checkg9;

function getName() {
  player1.textContent = `${name1}: X`;
  player2.textContent = `${name2}: O`;
}

function switchTurn() {
  if (move === player1Marker) {
    turn.textContent = `${name1} moves...`;
  } else if (move === player2Marker) {
    turn.textContent = `${name2} moves...`;
  }
}

function addMove() {
  let change = true;
  let g1Access = true;
  let g2Access = true;
  let g3Access = true;
  let g4Access = true;
  let g5Access = true;
  let g6Access = true;
  let g7Access = true;
  let g8Access = true;
  let g9Access = true;

  grid1.addEventListener("click", (e) => {
    e.preventDefault();
    if (g1Access === true) {
      if (change === true) {
        grid1.textContent = player1Marker;
        move = player2Marker;
        switchTurn();
        change = false;
        g1Access = false;
        checkg1 = true;
      } else if (change === false) {
        grid1.textContent = player2Marker;
        move = player1Marker;
        switchTurn();
        change = true;
        g1Access = false;
        checkg1 = false;
      }
    } else if (g1Access === false) {
      window.alert("This space is taken");
    }
    result();
  });

  grid2.addEventListener("click", (e) => {
    e.preventDefault();
    if (g2Access === true) {
      if (change === true) {
        grid2.textContent = player1Marker;
        move = player2Marker;
        switchTurn();
        change = false;
        g2Access = false;
        checkg2 = true;
      } else if (change === false) {
        grid2.textContent = player2Marker;
        move = player1Marker;
        switchTurn();
        change = true;
        g2Access = false;
        checkg2 = false;
      }
    } else if (g2Access === false) {
      window.alert("This space is taken");
    }
    result();
  });

  grid3.addEventListener("click", (e) => {
    e.preventDefault();
    if (g3Access === true) {
      if (change === true) {
        grid3.textContent = player1Marker;
        move = player2Marker;
        switchTurn();
        change = false;
        g3Access = false;
        checkg3 = true;
      } else if (change === false) {
        grid3.textContent = player2Marker;
        move = player1Marker;
        switchTurn();
        change = true;
        g3Access = false;
        checkg3 = false;
      }
    } else if (g3Access === false) {
      window.alert("This space is taken");
    }
    result();
  });

  grid4.addEventListener("click", (e) => {
    e.preventDefault();
    if (g4Access === true) {
      if (change === true) {
        grid4.textContent = player1Marker;
        move = player2Marker;
        switchTurn();
        change = false;
        g4Access = false;
        checkg4 = true;
      } else if (change === false) {
        grid4.textContent = player2Marker;
        move = player1Marker;
        switchTurn();
        change = true;
        g4Access = false;
        checkg4 = false;
      }
    } else if (g4Access === false) {
      window.alert("This space is taken");
    }
    result();
  });

  grid5.addEventListener("click", (e) => {
    e.preventDefault();
    if (g5Access === true) {
      if (change === true) {
        grid5.textContent = player1Marker;
        move = player2Marker;
        switchTurn();
        change = false;
        g5Access = false;
        checkg5 = true;
      } else if (change === false) {
        grid5.textContent = player2Marker;
        move = player1Marker;
        switchTurn();
        change = true;
        g5Access = false;
        checkg5 = false;
      }
    } else if (g5Access === false) {
      window.alert("This space is taken");
    }
    result();
  });

  grid6.addEventListener("click", (e) => {
    e.preventDefault();
    if (g6Access === true) {
      if (change === true) {
        grid6.textContent = player1Marker;
        move = player2Marker;
        switchTurn();
        change = false;
        g6Access = false;
        checkg6 = true;
      } else if (change === false) {
        grid6.textContent = player2Marker;
        move = player1Marker;
        switchTurn();
        change = true;
        g6Access = false;
        checkg6 = false;
      }
    } else if (g6Access === false) {
      window.alert("This space is taken");
    }
    result();
  });

  grid7.addEventListener("click", (e) => {
    e.preventDefault();
    if (g7Access === true) {
      if (change === true) {
        grid7.textContent = player1Marker;
        move = player2Marker;
        switchTurn();
        change = false;
        g7Access = false;
        checkg7 = true;
      } else if (change === false) {
        grid7.textContent = player2Marker;
        move = player1Marker;
        switchTurn();
        change = true;
        g7Access = false;
        checkg7 = false;
      }
    } else if (g7Access === false) {
      window.alert("This space is taken");
    }
    result();
  });

  grid8.addEventListener("click", (e) => {
    e.preventDefault();
    if (g8Access === true) {
      if (change === true) {
        grid8.textContent = player1Marker;
        move = player2Marker;
        switchTurn();
        change = false;
        g8Access = false;
        checkg8 = true;
      } else if (change === false) {
        grid8.textContent = player2Marker;
        move = player1Marker;
        switchTurn();
        change = true;
        g8Access = false;
        checkg8 = false;
      }
    } else if (g8Access === false) {
      window.alert("This space is taken");
    }
    result();
  });

  grid9.addEventListener("click", (e) => {
    e.preventDefault();
    if (g9Access === true) {
      if (change === true) {
        grid9.textContent = player1Marker;
        move = player2Marker;
        switchTurn();
        change = false;
        g9Access = false;
        checkg9 = true;
      } else if (change === false) {
        grid9.textContent = player2Marker;
        move = player1Marker;
        switchTurn();
        change = true;
        g9Access = false;
        checkg9 = false;
      }
    } else if (g9Access === false) {
      window.alert("This space is taken");
    }
    result();
  });
}

function player1Turn() {
  move = player1Marker;
}

function player2Turn() {
  move = player2Marker;
}

function restart() {
  setTimeout(() => {
    location.reload();
  }, 1000);
}

restartBtn.addEventListener("click", () => {
  location.reload();
});

function result() {
  if (
    (checkg1 === true && checkg2 === true && checkg3 === true) ||
    (checkg4 === true && checkg5 === true && checkg6 === true) ||
    (checkg7 === true && checkg8 === true && checkg9 === true) ||
    (checkg1 === true && checkg4 === true && checkg7 === true) ||
    (checkg2 === true && checkg5 === true && checkg8 === true) ||
    (checkg3 === true && checkg6 === true && checkg9 === true) ||
    (checkg1 === true && checkg5 === true && checkg9 === true) ||
    (checkg3 === true && checkg5 === true && checkg7 === true)
  ) {
    turn.textContent = `${name1} is the winner`;
    console.log(`${name1} is the winner`);
    setTimeout(() => {
      alert(`game Over!! ${name1} is the Winner`);
    }, 100);
    restart();
  } else if (
    (checkg1 === false && checkg2 === false && checkg3 === false) ||
    (checkg4 === false && checkg5 === false && checkg6 === false) ||
    (checkg7 === false && checkg8 === false && checkg9 === false) ||
    (checkg1 === false && checkg4 === false && checkg7 === false) ||
    (checkg2 === false && checkg5 === false && checkg8 === false) ||
    (checkg3 === false && checkg6 === false && checkg9 === false) ||
    (checkg1 === false && checkg5 === false && checkg9 === false) ||
    (checkg3 === false && checkg5 === false && checkg7 === false)
  ) {
    turn.textContent = `${name2} is the winner`;
    console.log(`${name2} is the winner`);
    setTimeout(() => {
      alert(`game Over!! ${name2} is the Winner`);
    }, 100);
    restart();
  }
}

function playGame() {
  switchTurn();
  getName();
  addMove();
}

playGame();
