/* Homepage JavaScript - integrates with shop.js cart system */

/* Product name to ID mapping for homepage product cards */
const HOMEPAGE_PRODUCT_MAP = {
  'Sorghum-Plantain Flour': 1,
  'Unripe Plantain Flour': 2,
  'SORPLA FemmeGrain': 3,
  'SORPLA AlphaGrain': 4,
  'OrangeKind OFSP': 5,
  'Tapioca Flakes': 6
};

/* Sticky nav */
const nav = document.getElementById('mainNav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, {passive:true});
}

/* Mobile menu */
function toggleMenu() {
  const mn = document.getElementById('mobileNav');
  if (!mn) return;
  mn.classList.toggle('open');
  mn.style.display = mn.style.display === 'none' ? 'flex' : (mn.style.display === 'flex' && !mn.classList.contains('open') ? 'none' : 'flex');
}
const mobileNav = document.getElementById('mobileNav');
if (mobileNav) mobileNav.style.display = 'flex';

/* Scroll reveal */
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
  reveals.forEach(el => io.observe(el));
}

/* Product filter */
function filterProducts(btn, cat) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.product-card').forEach(card => {
    if(cat === 'all' || card.dataset.category.includes(cat)){
      card.style.display = 'block';
      card.style.animation = 'fadeUp .4s ease both';
    } else {
      card.style.display = 'none';
    }
  });
}

/* Add to cart - tries shop.js system, falls back to toast */
function addToCart(name) {
  const productId = HOMEPAGE_PRODUCT_MAP[name];
  if (productId && typeof window.addToCartShop === 'function') {
    window.addToCartShop(productId);
  } else {
    showToast('✓ ' + name + ' added to cart');
  }
}

/* Toast - unified function */
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

/* Newsletter */
function submitNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  showToast('🎉 You\'re in! Welcome to the TMJ Foods community.');
  input.value = '';
}
