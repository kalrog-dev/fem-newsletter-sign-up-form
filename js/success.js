// Success message variables
const dismissBtn = document.getElementById('success-dismiss-btn');
const emailInsertPosition = document.getElementById('user-email');

// Add user's email to the Success message
emailInsertPosition.textContent = localStorage.getItem('email');