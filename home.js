const categoryCards = [
  {
    name: 'Hair Accessories',
    category: 'scrunchies',
    icon: 'fa-scissors',
    copy: 'Soft scrunchies, polished bands and everyday texture.'
  },
  {
    name: 'Statement Clips',
    category: 'clips',
    icon: 'fa-star',
    copy: 'Pretty clips that lift quick hairstyles into styled looks.'
  },
  {
    name: 'Jewellery',
    category: 'bracelets',
    icon: 'fa-gem',
    copy: 'Charm bracelets designed for easy layering and gifting.'
  }
];

const heroSlides = [
  {
    name: 'Golden Halo Clip',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Velvet Rose Scrunchie',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Pearl Charm Bracelet',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80'
  }
];

const testimonials = [
  {
    quote: 'The quality feels premium and the packaging was so elegant. I wore the clip set to a wedding and received so many compliments.',
    name: 'Maya, Bengaluru'
  },
  {
    quote: 'The scrunchies are soft, beautiful and perfect for gifting. I ordered three sets and the delivery was quick.',
    name: 'Aisha, Hyderabad'
  }
];

let activeCategory = 'all';
let heroIndex = 0;

function getCartCount() {
  return Number(localStorage.getItem('twistTieCartCount') || 0);
}

function setCartCount(count) {
  localStorage.setItem('twistTieCartCount', String(count));
  document.querySelectorAll('[data-cart-count]').forEach((element) => {
    element.textContent = count;
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove('hidden');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.add('hidden'), 2200);
}

function renderCategories() {
  const categoryGrid = document.getElementById('categoryGrid');
  if (!categoryGrid) return;

  categoryGrid.innerHTML = categoryCards.map((card) => `
    <article class="rounded-[1.75rem] border border-pink-100 bg-white p-6 shadow-soft">
      <div class="flex h-12 w-12 items-center justify-center rounded-full bg-blush/20 text-xl text-rosegold">
        <i class="fa-solid ${card.icon}"></i>
      </div>
      <h3 class="mt-4 font-display text-xl font-semibold">${card.name}</h3>
      <p class="mt-2 text-sm leading-7 text-slate-600">${card.copy}</p>
      <button class="mt-5 rounded-full border border-pink-200 px-4 py-2 text-sm font-semibold text-ink hover:bg-blush hover:text-white" data-category-pick="${card.category}">
        Explore
      </button>
    </article>
  `).join('');
}

function renderFilters() {
  const filters = document.getElementById('homeFilters');
  if (!filters) return;

  const categories = ['all', ...new Set((window.twistTieProducts || []).map((product) => product.category))];
  filters.innerHTML = categories.map((category) => `
    <button class="rounded-full border px-4 py-3 text-sm font-semibold transition ${activeCategory === category ? 'border-blush bg-blush text-white' : 'border-pink-200 bg-white text-ink'}" data-home-filter="${category}">
      ${category === 'all' ? 'All' : category}
    </button>
  `).join('');
}

function renderHomeProducts() {
  const grid = document.getElementById('homeProductGrid');
  const resultText = document.getElementById('homeResults');
  const searchInput = document.getElementById('homeSearch');
  if (!grid || !resultText) return;

  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
  const products = (window.twistTieProducts || []).filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = !query || product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  resultText.textContent = products.length ? `Showing ${products.length} curated pieces` : 'No products matched your search.';
  grid.innerHTML = products.map((product) => `
    <article class="group overflow-hidden rounded-[1.75rem] border border-pink-100 bg-white shadow-soft">
      <a href="product-details.html" class="block overflow-hidden">
        <img src="${product.image}" alt="${product.name}" class="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
      </a>
      <div class="p-5">
        <div class="flex items-start justify-between gap-3">
          <h3 class="font-display text-lg font-semibold">${product.name}</h3>
          <span class="shrink-0 text-sm font-semibold text-rosegold">Rs. ${product.price}</span>
        </div>
        <p class="mt-2 text-sm leading-6 text-slate-600">${product.description}</p>
        <div class="mt-4 flex items-center justify-between gap-3">
          <span class="rounded-full bg-blush/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-rosegold">${product.stock}</span>
          <button class="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-rosegold" data-add-product="${product.id}">
            Add
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function rotateHero() {
  const image = document.getElementById('heroImage');
  const name = document.getElementById('heroProductName');
  const number = document.getElementById('heroSlideNumber');
  if (!image || !name || !number) return;

  heroIndex = (heroIndex + 1) % heroSlides.length;
  const slide = heroSlides[heroIndex];
  image.src = slide.image;
  name.textContent = slide.name;
  number.textContent = String(heroIndex + 1).padStart(2, '0');
}

function setupCounters() {
  document.querySelectorAll('[data-count-to]').forEach((element) => {
    const target = Number(element.dataset.countTo);
    const isDecimal = !Number.isInteger(target);
    let current = 0;
    const step = target / 40;

    const timer = window.setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        window.clearInterval(timer);
      }
      element.textContent = isDecimal ? current.toFixed(1) : Math.round(current);
    }, 24);
  });
}

function setupScrollAnimation() {
  const animatedItems = document.querySelectorAll('[data-animate]');
  if (!('IntersectionObserver' in window)) {
    animatedItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animatedItems.forEach((item) => observer.observe(item));
}

function setupInteractions() {
  const menuButton = document.getElementById('menuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const searchInput = document.getElementById('homeSearch');
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterMessage = document.getElementById('newsletterMessage');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden', isOpen);
      menuButton.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', renderHomeProducts);
  }

  document.addEventListener('click', (event) => {
    const filterButton = event.target.closest('[data-home-filter]');
    const categoryPick = event.target.closest('[data-category-pick]');
    const addButton = event.target.closest('[data-add-product]');

    if (filterButton) {
      activeCategory = filterButton.dataset.homeFilter;
      renderFilters();
      renderHomeProducts();
    }

    if (categoryPick) {
      activeCategory = categoryPick.dataset.categoryPick;
      renderFilters();
      renderHomeProducts();
      document.getElementById('shopPreview')?.scrollIntoView({ behavior: 'smooth' });
    }

    if (addButton) {
      const product = (window.twistTieProducts || []).find((item) => item.id === Number(addButton.dataset.addProduct));
      setCartCount(getCartCount() + 1);
      showToast(`${product ? product.name : 'Product'} added to cart`);
    }
  });

  if (newsletterForm && newsletterMessage) {
    newsletterForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = document.getElementById('newsletterEmail').value.trim();
      newsletterMessage.textContent = `Thanks! Early-access updates will be sent to ${email}.`;
      newsletterForm.reset();
    });
  }
}

function renderTestimonials() {
  const grid = document.getElementById('testimonialGrid');
  if (!grid) return;

  grid.innerHTML = testimonials.map((item) => `
    <blockquote class="rounded-[1.25rem] border border-pink-100 bg-white p-5">
      <p class="text-sm leading-7 text-slate-600">"${item.quote}"</p>
      <footer class="mt-4 font-semibold text-ink">- ${item.name}</footer>
    </blockquote>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  setCartCount(getCartCount());
  renderCategories();
  renderFilters();
  renderHomeProducts();
  renderTestimonials();
  setupCounters();
  setupScrollAnimation();
  setupInteractions();
  window.setInterval(rotateHero, 4200);
});
