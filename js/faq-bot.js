const faqData = [
  {q:"Are all your products really gluten-free?", a:"Yes, every single TMJ Foods product is 100% gluten-free. We use no wheat, barley, or rye in any of our products. Our processing facility follows strict protocols to prevent cross-contamination, and each batch is independently tested for gluten content."},
  {q:"Can diabetics use your products safely?", a:"Our products — particularly the Sorghum-Plantain Flour, Unripe Plantain Flour, and Acha Flour — are specifically formulated to be low-glycemic, which means they release glucose slowly and help manage blood sugar spikes. However, we always recommend consulting your doctor or dietitian before making significant dietary changes, especially if you are on diabetes medication."},
  {q:"What payment methods do you accept?", a:"We accept all major payment methods via Paystack: debit and credit cards (Visa, Mastercard, Verve), bank transfer, USSD, and mobile money. All payments are fully secured and encrypted. We do not store your card information."},
  {q:"What is your return policy?", a:"We offer a 7-day return policy for unopened, undamaged products. If you receive a damaged or incorrect item, please contact us within 48 hours with a photo and we will arrange a replacement or full refund — no questions asked. Returns initiated for other reasons will receive a store credit."},
  {q:"How should I store your products?", a:"Store all TMJ Foods products in a cool, dry place away from direct sunlight. Once opened, reseal the pouch tightly or transfer to an airtight container. Most products have a shelf life of 6–12 months when stored properly. Avoid exposure to moisture as this can affect quality and shelf life."},
  {q:"Are your products safe for children and the elderly?", a:"Absolutely. Many of our products — especially the Tapioca Flakes, Unripe Plantain Flour, and Orange-Fleshed Sweet Potato Flour — are gentle on the digestive system and ideal for children and elderly family members. They are free from additives, preservatives, and allergens. Always check the specific product page for age-specific guidance."},
  {q:"Do you offer bulk or wholesale pricing?", a:"Yes! We have a dedicated wholesale programme for retailers, restaurants, hospitals, and corporate buyers. Use the Wholesale tab in our contact form to submit your enquiry. We offer tiered pricing based on volume, flexible payment terms, and dedicated account support for wholesale customers."},
  {q:"How do I track my order?", a:"Once your order ships, you will receive a tracking number by email. You can use this number to track your package directly on the courier's website. For Lagos deliveries, our riders will contact you via phone before arrival. If you have not received a tracking update within 2 business days of ordering, please contact us."},
  {q:"Do you ship internationally?", a:"Yes, we ship to the UK, USA, Canada, and select European countries. International shipping costs are calculated at checkout based on your location and order weight. We use trusted international couriers to ensure safe and timely delivery."},
  {q:"How do I view my orders?", a:"Click the 'View My Orders' link in the navigation menu to access the order tracking page. You can look up your order using your order ID and email address."},
  {q:"How long does delivery take?", a:"Lagos deliveries typically take 24–48 hours. Other states in Nigeria take 2–5 business days. International orders take 7–21 business days depending on the destination and customs processing."},
  {q:"Is WhatsApp the fastest way to reach you?", a:"Yes! WhatsApp is the fastest way to get a response from our team. We typically reply within a few hours during business hours. You can also email us at tmjfoodsng@gmail.com."}
];

function toggleFaqBot(){
  const win = document.getElementById('faqBotWindow');
  const btn = document.getElementById('faqBotToggle');
  win.classList.toggle('open');
  btn.classList.toggle('active');
  if(win.classList.contains('open')){
    document.getElementById('faqBotSearch').focus();
  }
}

function filterFaq(){
  const term = document.getElementById('faqBotSearch').value.toLowerCase();
  const items = document.querySelectorAll('.faq-bot-item');
  items.forEach(item=>{
    const q = item.getAttribute('data-q').toLowerCase();
    item.style.display = q.includes(term) ? 'block' : 'none';
  });
}

function toggleFaqItem(el){
  el.classList.toggle('open');
}

function openWhatsApp(){
  window.open('https://wa.me/2348068018054?text=' + encodeURIComponent('Hello TMJ Foods, I have a question that is not in your FAQ.'), '_blank');
}

document.addEventListener('click', function(e){
  const bot = document.getElementById('faqBotWindow');
  const toggle = document.getElementById('faqBotToggle');
  if(bot && bot.classList.contains('open') && !bot.contains(e.target) && e.target !== toggle && !toggle.contains(e.target)){
    bot.classList.remove('open');
    toggle.classList.remove('active');
  }
});
