let score = 0;
const scoreDisplay = document.getElementById("score");
const logList = document.getElementById("log-list");

document.getElementById("two-point-button").addEventListener("click", () => {
    score += 2;
    updateScore();
    logEvent("2-Point Shot: +2 points");
});

document.getElementById("three-point-button").addEventListener("click", () => {
    score += 3;
    updateScore();
    logEvent("3-Point Shot: +3 points");
});

document.getElementById("foul-button").addEventListener("click", () => {
    score -= 1;
    updateScore();
    logEvent("Foul: -1 point");
});

document.getElementById("reset-button").addEventListener("click", () => {
    score = 0;
    updateScore();
    clearLog();
});

function updateScore() {
    scoreDisplay.innerText = score;
}

function logEvent(event) {
    const logItem = document.createElement("li");
    logItem.innerText = event;
    logList.appendChild(logItem);
}

function clearLog() {
    logList.innerHTML = "";
}
