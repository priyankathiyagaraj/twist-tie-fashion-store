const cartItems = [
  {
    id: 1,
    name: 'Velvet Rose Scrunchie',
    price: 299,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 2,
    name: 'Pearl Charm Bracelet',
    price: 449,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=80'
  }
];

const cartItemsContainer = document.getElementById('cartItems');
const subtotalElement = document.getElementById('subtotal');
const totalElement = document.getElementById('total');

function calculateTotals(items) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal > 0 ? 80 : 0;
  const total = subtotal + delivery;
  subtotalElement.textContent = `₹${subtotal}`;
  totalElement.textContent = `₹${total}`;
}

function renderCart() {
  if (!cartItemsContainer) return;
  if (!cartItems.length) {
    cartItemsContainer.innerHTML = '<div class="rounded-[1.5rem] border border-dashed border-pink-200 bg-white p-8 text-center text-slate-600">Your cart is empty. Continue shopping to add pieces.</div>';
    calculateTotals([]);
    return;
  }

  cartItemsContainer.innerHTML = cartItems.map((item) => `
    <div class="flex flex-col gap-4 rounded-[1.5rem] border border-pink-100 bg-white p-4 shadow-soft sm:flex-row sm:items-center">
      <img src="${item.image}" alt="${item.name}" class="h-24 w-full rounded-[1rem] object-cover sm:w-24" />
      <div class="flex-1">
        <h3 class="font-display text-lg font-semibold">${item.name}</h3>
        <p class="mt-1 text-sm text-slate-600">₹${item.price} each</p>
      </div>
      <div class="flex items-center gap-2">
        <button class="h-9 w-9 rounded-full border border-pink-200 text-lg">-</button>
        <span class="w-8 text-center text-sm font-semibold">${item.quantity}</span>
        <button class="h-9 w-9 rounded-full border border-pink-200 text-lg">+</button>
      </div>
      <div class="text-right font-semibold text-ink">₹${item.price * item.quantity}</div>
    </div>
  `).join('');
  calculateTotals(cartItems);
}

document.addEventListener('DOMContentLoaded', renderCart);
