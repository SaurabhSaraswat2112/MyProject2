// script.js
function updateClock() {
  // Get the current time
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Determine AM/PM
  let ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // Display 12 instead of 0

  // Add leading zeros
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Combine into time string
  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

  // Display time
  document.getElementById('clock').innerText = timeString;
}

// Update every second
setInterval(updateClock, 1000);

// Initialize immediately
updateClock();
