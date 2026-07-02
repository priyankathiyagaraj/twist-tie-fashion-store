function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}

function showValidationError(input, message) {
  const errorElement = document.createElement('p');
  errorElement.className = 'mt-2 text-sm text-rose-500';
  errorElement.textContent = message;
  input.parentNode.appendChild(errorElement);
}

function clearValidationErrors(form) {
  form.querySelectorAll('.text-rose-500').forEach((element) => element.remove());
}

function validateForm(form) {
  clearValidationErrors(form);
  let isValid = true;
  const emailInput = form.querySelector('input[type="email"]');
  const passwordInput = form.querySelector('input[type="password"]');

  if (emailInput && !validateEmail(emailInput.value)) {
    showValidationError(emailInput, 'Please enter a valid email address.');
    isValid = false;
  }

  if (passwordInput && !validatePassword(passwordInput.value)) {
    showValidationError(passwordInput, 'Password should be at least 6 characters.');
    isValid = false;
  }

  return isValid;
}
