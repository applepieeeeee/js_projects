let currentTime = null;

async function fetchTime() {
    try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/Etc/UTC'); // Use HTTPS
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        if (!data.datetime) throw new Error("Invalid API response");

        currentTime = new Date(data.datetime);
    } catch (error) {
        console.error('Error fetching time:', error);
        document.getElementById('clock').innerHTML = '<strong>Current Time:</strong> Error fetching time';
    }
}

function updateClock() {
    if (currentTime) {
        currentTime.setSeconds(currentTime.getSeconds() + 1);
        document.getElementById('clock').innerHTML = `<strong>Current Time:</strong> ${currentTime.toLocaleTimeString()}`;
    }
}

fetchTime();
setInterval(fetchTime, 60000);

setInterval(updateClock, 1000);
