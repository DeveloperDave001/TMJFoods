/* Sticky nav */
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, {passive:true});

/* Mobile menu */
function toggleMenu() {
  const mn = document.getElementById('mobileNav');
  mn.classList.toggle('open');
  mn.style.display = mn.style.display === 'none' ? 'flex' : (mn.style.display === 'flex' && !mn.classList.contains('open') ? 'none' : 'flex');
}
document.getElementById('mobileNav').style.display = 'flex';

/* Scroll reveal */
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
reveals.forEach(el => io.observe(el));

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

/* Add to cart */
let cartCount = 2;
function addToCart(name) {
  cartCount++;
  document.querySelector('.nav-cart-badge').textContent = cartCount;
  showToast('✓ ' + name + ' added to cart');
}

/* Toast */
function showToast(msg) {
  const t = document.getElementById('toast');
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
