function register() {
  const username = document.getElementById('newUsername').value;
  const password = document.getElementById('newPassword').value;
  const message = document.getElementById('message');

  if (username && password) {
    if (localStorage.getItem(username)) {
      message.innerText = 'Username already exists!';
    } else {
      localStorage.setItem(username, password);
      message.innerText = 'Registered successfully! Go to login.';
    }
  } else {
    message.innerText = 'Please fill in all fields.';
  }
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');
  const storedPassword = localStorage.getItem(username);

  if (storedPassword === password) {
    localStorage.setItem('loggedInUser', username);
    window.location.href = 'dashboard.html';
  } else {
    message.innerText = 'Invalid username or password.';
  }
}
