// Function to parse a time string like "7:50 PM"
function parseTime(timeString) {
    const timeParts = timeString.match(/(\d+):(\d+) (\w+)/);
    let hours = parseInt(timeParts[1]);
    const minutes = parseInt(timeParts[2]);
    const period = timeParts[3].toUpperCase(); // AM or PM
  
    // Convert to 24-hour format
    if (period === "PM" && hours !== 12) {
      hours += 12;
    } else if (period === "AM" && hours === 12) {
      hours = 0; // Midnight case
    }
  
    return new Date().setHours(hours, minutes, 0, 0); // Set hours and minutes of today's date
  }
  
  // Set the target time (e.g., "7:50 PM")
  const targetTimeString = "6:30 PM"; // Change this to any time you want
  const targetTime = parseTime(targetTimeString);
  
  // Function to update the countdown
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetTime - now;
  
    if (distance <= 0) {
      document.getElementById('countdown').innerHTML = "Time's up!";
      document.getElementById('join-container').style.display = "block";
      clearInterval(interval); // Stop the countdown
    } else {
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById('countdown').innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    }
  }
  
  // Update countdown every second
  const interval = setInterval(updateCountdown, 1000);
  
  // Initial call to display the countdown
  updateCountdown();
  