// hockey.js

window.onload = () => {
  // Initialize score and event log
  let score = 0;
  const logList = document.querySelector('#log-list');

  // Update the score display
  function updateScoreDisplay() {
      document.querySelector('#score').textContent = score;
  }

  // Add an entry to the event log
  function addToLog(event) {
      const logEntry = document.createElement('li');
      logEntry.textContent = event;
      logList.appendChild(logEntry);
  }

  // Handle button clicks
  document.querySelector('#goal-button').onclick = () => {
      score++;
      updateScoreDisplay();
      addToLog('Goal scored!');
  };

  document.querySelector('#foul-button').onclick = () => {
      addToLog('Foul committed!');
  };

  document.querySelector('#penalty-button').onclick = () => {
      score += 2;
      updateScoreDisplay();
      addToLog('Penalty goal scored!');
  };

  document.querySelector('#reset-button').onclick = () => {
      score = 0;
      updateScoreDisplay();
      logList.innerHTML = ''; // Clear the event log
  };
};
