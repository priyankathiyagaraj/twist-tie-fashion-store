const productDetail = document.getElementById('productDetail');

const product = {
  id: 1,
  name: 'Velvet Rose Scrunchie',
  price: 299,
  category: 'scrunchies',
  image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=700&q=80',
  description: 'Soft velvet finish in a romantic rose hue with handmade detailing and a premium touch.',
  rating: 4.9,
  stock: 'In stock',
  colors: ['Rose', 'Blush', 'Cream'],
  details: ['Handcrafted premium fabric', 'Gentle and comfortable hold', 'Perfect for gifting']
};

function renderProductDetail() {
  if (!productDetail) return;
  productDetail.innerHTML = `
    <div>
      <img src="${product.image}" alt="${product.name}" class="h-[420px] w-full rounded-[1.5rem] object-cover" />
    </div>
    <div class="flex flex-col justify-center">
      <p class="text-sm font-semibold uppercase tracking-[0.3em] text-rosegold">${product.category}</p>
      <h1 class="mt-3 font-display text-3xl font-semibold text-ink">${product.name}</h1>
      <p class="mt-4 text-base leading-8 text-slate-600">${product.description}</p>
      <div class="mt-4 flex items-center gap-3 text-sm text-slate-600">
        <span class="rounded-full bg-blush/15 px-3 py-1 font-semibold text-rosegold"><i class="fa-solid fa-star mr-1"></i>${product.rating}</span>
        <span class="rounded-full bg-cream px-3 py-1 font-semibold">${product.stock}</span>
      </div>
      <div class="mt-6 text-3xl font-semibold text-ink">₹${product.price}</div>
      <div class="mt-6">
        <p class="text-sm font-semibold text-ink">Available colors</p>
        <div class="mt-3 flex flex-wrap gap-3">
          ${product.colors.map((color) => `<span class="rounded-full border border-pink-200 px-3 py-2 text-sm">${color}</span>`).join('')}
        </div>
      </div>
      <div class="mt-6">
        <p class="text-sm font-semibold text-ink">Why you’ll love it</p>
        <ul class="mt-3 space-y-2 text-sm text-slate-600">
          ${product.details.map((detail) => `<li><i class="fa-solid fa-check-circle mr-2 text-rosegold"></i>${detail}</li>`).join('')}
        </ul>
      </div>
      <div class="mt-8 flex flex-wrap gap-3">
        <a href="cart.html" class="rounded-full bg-blush px-6 py-3 font-semibold text-white transition hover:bg-rosegold">Add to Cart</a>
        <a href="checkout.html" class="rounded-full border border-ink/10 bg-white px-6 py-3 font-semibold text-ink transition hover:border-blush hover:text-rosegold">Buy Now</a>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', renderProductDetail);
