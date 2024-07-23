// script.js
let userData = [];

// Load existing data from JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => userData = data);

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // Check if user exists in data
  const user = userData.find((user) => user.username === username && user.password === password);
  if (user) {
    console.log('Login successful!');
    // Redirect to dashboard or other page
  } else {
    console.log('Invalid username or password');
  }
});

// Handle signup form submission
document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  if (password === confirmPassword) {
    const newUser = { username, email, password };
    userData.push(newUser);
    // Save data to JSON file
    fetch('data.json', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    console.log('Sign up successful!');
    // Redirect to login page or other page
  } else {
    console.log('Passwords do not match');
  }
});