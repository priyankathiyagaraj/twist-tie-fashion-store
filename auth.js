const USER_STORAGE_KEY = 'twisttie-user';

function saveUser(user) {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
}

function getStoredUser() {
  const raw = localStorage.getItem(USER_STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
}

function clearStoredUser() {
  localStorage.removeItem(USER_STORAGE_KEY);
}

function registerUser(name, email, password) {
  const user = { name, email, password };
  saveUser(user);
  return user;
}

function loginUser(email, password) {
  const storedUser = getStoredUser();
  if (!storedUser) return null;
  if (storedUser.email === email && storedUser.password === password) {
    return storedUser;
  }
  return null;
}

function logoutUser() {
  clearStoredUser();
}

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('form');
  if (!loginForm) return;

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = loginForm.querySelector('input[type="email"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');
    const user = loginUser(emailInput.value, passwordInput.value);
    if (user) {
      window.location.href = 'dashboard.html';
    } else {
      alert('Please use the demo credentials or register an account first.');
    }
  });
});
