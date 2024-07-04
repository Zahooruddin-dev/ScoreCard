let scoreCard1 = 0;
let scoreCard2 = 0;
let currentPlayer = 1;
let timer;

document.getElementById("homesc").textContent = scoreCard1;
document.getElementById("guestsc").textContent = scoreCard2;

function updateScore(points) {
  if (currentPlayer === 1) {
    scoreCard1 += points;
    document.getElementById("homesc").textContent = scoreCard1;
  } else {
    scoreCard2 += points;
    document.getElementById("guestsc").textContent = scoreCard2;
  }
  console.log("Player " + currentPlayer + " score: " + (currentPlayer === 1 ? scoreCard1 : scoreCard2));

  // Switch player
  currentPlayer = currentPlayer === 1 ? 2 : 1;

  // Reset & start the timer for the next player
  clearTimeout(timer);
  timer = setTimeout(checkWinner, 30000); // 30 seconds timer
}

function singlePoint() {
  updateScore(1);
}

function doublePoint() {
  updateScore(2);
}

function triplePoint() {
  updateScore(3);
}

function checkWinner() {
  if (scoreCard1 > scoreCard2) {
    alert("Home wins!");
    document.getElementById("homesc").style.backgroundColor = "green";
  } else if (scoreCard2 > scoreCard1) {
    alert("Guest wins!");
    document.getElementById("guestsc").style.backgroundColor = "green";
  } else {
    alert("It's a tie!");
  }
}
if (scoreCard1 >= 1 || scoreCard2 >=1){
  // Initial timer start and also checking if the players have started playing or not if not thant the timer won't initate 
timer = setTimeout(checkWinner, 30000); // 30 seconds timer
console.log("Timer worked");
}
