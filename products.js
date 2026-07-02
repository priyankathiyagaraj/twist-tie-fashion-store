const products = [
  {
    id: 1,
    name: 'Velvet Rose Scrunchie',
    price: 299,
    category: 'scrunchies',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=700&q=80',
    description: 'Soft velvet finish in a romantic rose hue.',
    featured: true,
    stock: 'In stock'
  },
  {
    id: 2,
    name: 'Pearl Charm Bracelet',
    price: 449,
    category: 'bracelets',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=80',
    description: 'Layered elegance with a polished charm detail.',
    featured: false,
    stock: 'In stock'
  },
  {
    id: 3,
    name: 'Luxe Clip Set',
    price: 599,
    category: 'clips',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80',
    description: 'A statement-worthy set for elevated styling.',
    featured: true,
    stock: 'New'
  },
  {
    id: 4,
    name: 'Silk Hair Band',
    price: 249,
    category: 'bands',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80',
    description: 'Smooth silk texture that feels like a luxury treat.',
    featured: false,
    stock: 'Low stock'
  },
  {
    id: 5,
    name: 'Golden Halo Clip',
    price: 699,
    category: 'clips',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=80',
    description: 'A luminous accessory for bridal and brunch looks.',
    featured: true,
    stock: 'In stock'
  },
  {
    id: 6,
    name: 'Blush Lace Scrunchie',
    price: 329,
    category: 'scrunchies',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80',
    description: 'Delicate lace detailing for soft, feminine styling.',
    featured: false,
    stock: 'In stock'
  }
];

const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const priceValue = document.getElementById('priceValue');
const sortSelect = document.getElementById('sortSelect');
const resultsCount = document.getElementById('resultsCount');

window.twistTieProducts = products;

function renderProducts(items) {
  if (!productGrid) return;
  productGrid.innerHTML = '';
  if (resultsCount) {
    resultsCount.textContent = `Showing ${items.length} products`;
  }

  if (!items.length) {
    productGrid.innerHTML = '<div class="col-span-full rounded-[1.5rem] border border-dashed border-pink-200 bg-white p-8 text-center text-slate-600">No products matched your filters.</div>';
    return;
  }

  const fragment = document.createDocumentFragment();
  items.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'overflow-hidden rounded-[1.75rem] border border-pink-100 bg-white shadow-soft';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="h-56 w-full object-cover" />
      <div class="p-5">
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="font-display text-lg font-semibold">${product.name}</h3>
            <p class="mt-2 text-sm text-slate-600">${product.description}</p>
          </div>
          <span class="text-sm font-semibold text-rosegold">₹${product.price}</span>
        </div>
        <div class="mt-4 flex items-center justify-between">
          <span class="rounded-full bg-blush/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-rosegold">${product.stock}</span>
          <a href="product-details.html" class="text-sm font-semibold text-ink transition hover:text-rosegold">View details</a>
        </div>
      </div>
    `;
    fragment.appendChild(card);
  });

  productGrid.appendChild(fragment);
}

function getFilteredProducts() {
  if (!searchInput || !categoryFilter || !priceFilter || !sortSelect) {
    return products;
  }

  const searchTerm = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const maxPrice = Number(priceFilter.value);
  let filtered = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
    const matchesCategory = category === 'all' || product.category === category;
    const matchesPrice = product.price <= maxPrice;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortValue = sortSelect.value;
  if (sortValue === 'price-low') {
    filtered = filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === 'price-high') {
    filtered = filtered.sort((a, b) => b.price - a.price);
  } else if (sortValue === 'latest') {
    filtered = filtered.sort((a, b) => b.id - a.id);
  }

  return filtered;
}

function setupProductFilters() {
  if (!searchInput || !categoryFilter || !priceFilter || !priceValue || !sortSelect) {
    return;
  }

  [searchInput, categoryFilter, priceFilter, sortSelect].forEach((element) => {
    element.addEventListener('input', () => {
      priceValue.textContent = `Up to ₹${priceFilter.value}`;
      renderProducts(getFilteredProducts());
    });
    element.addEventListener('change', () => {
      priceValue.textContent = `Up to ₹${priceFilter.value}`;
      renderProducts(getFilteredProducts());
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupProductFilters();
  renderProducts(products);
});
