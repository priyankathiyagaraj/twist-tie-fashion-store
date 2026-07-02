document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = form.querySelector('input[type="email"]');
    if (input && input.value.trim()) {
      alert('Thank you for subscribing to twist_.tie!');
      form.reset();
    }
  });
});
