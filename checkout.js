document.addEventListener('DOMContentLoaded', () => {
  const checkoutForm = document.getElementById('checkoutForm');
  if (!checkoutForm) return;

  checkoutForm.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = 'order-success.html';
  });
});
