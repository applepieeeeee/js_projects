let stopwatchTime = 0;
let stopwatchInterval = null;

function startStopwatch() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            updateStopwatchDisplay();
        }, 1000);
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch() {
    stopStopwatch();
    stopwatchTime = 0;
    updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
    const minutes = Math.floor(stopwatchTime / 60).toString().padStart(2, '0');
    const seconds = (stopwatchTime % 60).toString().padStart(2, '0');
    document.getElementById('stopwatch').innerHTML = `<strong>Stopwatch:</strong> ${minutes}:${seconds}`;
}

document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('stop').addEventListener('click', stopStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);

updateStopwatchDisplay();