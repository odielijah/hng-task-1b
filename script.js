const timeDisplay = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  timeDisplay.textContent = Date.now();
}

setInterval(updateTime, 100);
updateTime();
