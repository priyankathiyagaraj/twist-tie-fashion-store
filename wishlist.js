document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.rounded-\[1rem\]');
  items.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('border-blush');
    });
  });
});
