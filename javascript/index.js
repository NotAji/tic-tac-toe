const urlParams = new URLSearchParams(window.location.search);

const name1 = urlParams.get("name1");
const name2 = urlParams.get("name2");

const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

player1.textContent = `${name1}: X`;
player2.textContent = `${name2}: O`;
