const fallbackImg = 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop';
const PRODUCTS = [
  {id:1,name:"Sorghum–Plantain Flour",short:"Classic blend for blood sugar control & gut health",price:3500,oldPrice:null,weight:"1kg",category:"flour",goals:["gut","diabetes","weight","energy"],tags:["Gluten-Free","Low GI","Gut Health"],badge:"best",emoji:"🌾",bg:"#E8F5EE",packBg:"#1A5C34",packTop:"#0F3D22",rating:4.9,reviews:142,featured:true,newest:false,image:"https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop"},
  {id:2,name:"Unripe Plantain Flour",short:"Resistant starch prebiotic — feeds good gut bacteria",price:3200,oldPrice:null,weight:"1kg",category:"flour",goals:["gut","diabetes","weight","immunity"],tags:["Prebiotic","Low GI","Diabetic"],badge:null,emoji:"🍌",bg:"#FFFBEA",packBg:"#FFFFFF",packTop:"#2D7A4F",packBorder:true,rating:4.8,reviews:98,featured:true,newest:false,image:"https://images.unsplash.com/photo-1600490036275-38f2c44184c5?w=400&h=400&fit=crop"},
  {id:3,name:"SORPLA FemmeGrain",short:"Hormonal balance, gut health & iron for women",price:3800,oldPrice:null,weight:"1kg",category:"flour",goals:["gut","women","weight","immunity","energy"],tags:["Women's Health","Hormone Balance"],badge:"women",emoji:"🌸",bg:"#FDF0F8",packBg:"#B05090",packTop:"#7B2D6E",rating:5.0,reviews:76,featured:true,newest:false,image:"https://images.unsplash.com/photo-1515696955266-4f67e13219e8?w=400&h=400&fit=crop"},
  {id:4,name:"SORPLA AlphaGrain",short:"High-protein performance blend for strength & focus",price:4000,oldPrice:null,weight:"1kg",category:"flour",goals:["gut","men","energy","weight"],tags:["Men's Performance","High Protein"],badge:"men",emoji:"💪",bg:"#EAF0FB",packBg:"#1A3A7B",packTop:"#0F2456",rating:4.9,reviews:53,featured:true,newest:false,image:"https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop"},
  {id:5,name:"OrangeKind™ OFSP",short:"Orange sweet potato flour — beta-carotene & Vitamin A",price:2800,oldPrice:null,weight:"850g",category:"flour",goals:["gut","immunity","energy","kids"],tags:["Vitamin A","Immunity","Beta-Carotene"],badge:null,emoji:"🍠",bg:"#FFF3E8",packBg:"#D45C10",packTop:"#9A3A08",rating:4.7,reviews:41,featured:true,newest:false,image:"https://images.unsplash.com/photo-1596097635121-14b63b7f0c19?w=400&h=400&fit=crop"},
  {id:6,name:"Tapioca Flakes",short:"Gentle, gluten-free cassava starch — family-friendly",price:1800,oldPrice:null,weight:"500g",category:"cereal",goals:["gut","kids","energy"],tags:["Gluten-Free","Easy Digest","Family"],badge:null,emoji:"🫙",bg:"#F0F8F4",packBg:"#F5F0E8",packTop:"#4A9E6B",packBorder:true,rating:4.8,reviews:88,featured:true,newest:false,image:"https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop"},
  {id:7,name:"Sorghum Porridge Mix",short:"Warm, creamy breakfast porridge — slow energy release",price:2600,oldPrice:3000,weight:"800g",category:"cereal",goals:["gut","diabetes","energy","kids"],tags:["Low GI","Breakfast","Gluten-Free"],badge:"sale",emoji:"🥣",bg:"#FFF7ED",packBg:"#4A9E6B",packTop:"#2D7A4F",rating:4.7,reviews:65,featured:false,newest:false,image:fallbackImg},
  {id:8,name:"Sorghum Flatbread Mix",short:"Ready-mix for soft, low-GI flatbread in minutes",price:2900,oldPrice:null,weight:"700g",category:"flour",goals:["diabetes","gut","energy"],tags:["Low GI","Flatbread","Gluten-Free"],badge:null,emoji:"🫓",bg:"#FAF0E0",packBg:"#7A5230",packTop:"#4A2E12",rating:4.6,reviews:34,featured:false,newest:true,image:fallbackImg},
  {id:9,name:"Plantain-Oat Pancake Mix",short:"Fluffy, low-sugar pancakes — perfect weekend breakfast",price:2400,oldPrice:null,weight:"600g",category:"cereal",goals:["gut","diabetes","kids","energy"],tags:["Low Sugar","Breakfast","Kids"],badge:"new",emoji:"🥞",bg:"#FFFBEA",packBg:"#E8A825",packTop:"#9A6010",rating:4.8,reviews:29,featured:false,newest:true,image:"https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=400&fit=crop"},
  {id:10,name:"Sorghum Granola",short:"Crunchy, low-sugar granola with local seeds",price:3100,oldPrice:null,weight:"500g",category:"cereal",goals:["gut","weight","energy","kids"],tags:["Low Sugar","Crunchy","Gluten-Free"],badge:null,emoji:"🌰",bg:"#FDF4E3",packBg:"#C8891A",packTop:"#8A5E10",rating:4.5,reviews:42,featured:false,newest:false,image:fallbackImg},
  {id:11,name:"Tiger Nut Flour",short:"Naturally sweet, high-fibre flour from chufa tubers",price:3400,oldPrice:null,weight:"750g",category:"flour",goals:["gut","diabetes","immunity","energy"],tags:["Prebiotic","Naturally Sweet","Gluten-Free"],badge:null,emoji:"🥜",bg:"#F5F0E0",packBg:"#8B6914",packTop:"#5C4208",rating:4.7,reviews:38,featured:false,newest:false,image:fallbackImg},
  {id:12,name:"Moringa Grain Blend",short:"Sorghum + moringa — iron, protein & antioxidant power",price:4200,oldPrice:null,weight:"600g",category:"supplement",goals:["immunity","women","energy","gut"],tags:["Iron","Antioxidant","Women"],badge:null,emoji:"🌿",bg:"#E8F5EE",packBg:"#0F6B30",packTop:"#08401C",rating:4.9,reviews:57,featured:false,newest:false,image:"https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=400&h=400&fit=crop"},
  {id:13,name:"Baobab Energy Mix",short:"Baobab + sorghum superfood blend for stamina",price:4500,oldPrice:5000,weight:"500g",category:"supplement",goals:["energy","immunity","men","gut"],tags:["Superfood","Stamina","Vitamin C"],badge:"sale",emoji:"🌳",bg:"#E8F5EE",packBg:"#3D7A2A",packTop:"#254F18",rating:4.8,reviews:44,featured:false,newest:false,image:fallbackImg},
  {id:14,name:"Locust Bean Powder",short:"Fermented Iru — gut probiotic & flavour booster",price:1600,oldPrice:null,weight:"200g",category:"supplement",goals:["gut","immunity"],tags:["Probiotic","Fermented","Umami"],badge:null,emoji:"🫘",bg:"#FFF3E8",packBg:"#4A2E12",packTop:"#2C1A08",rating:4.4,reviews:22,featured:false,newest:false,image:fallbackImg},
  {id:15,name:"Zobo Hibiscus Powder",short:"Dried zobo — Vitamin C, antioxidants & heart support",price:1900,oldPrice:null,weight:"250g",category:"supplement",goals:["immunity","women","energy"],tags:["Vitamin C","Antioxidant","Hibiscus"],badge:null,emoji:"🌺",bg:"#FDE8EE",packBg:"#A0254A",packTop:"#6B1530",rating:4.6,reviews:51,featured:false,newest:true,image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop"},
  {id:16,name:"Acha (Fonio) Flour",short:"Ancient African grain — high protein, gluten-free",price:3600,oldPrice:null,weight:"800g",category:"flour",goals:["diabetes","gut","energy","men"],tags:["Ancient Grain","High Protein","Gluten-Free"],badge:"new",emoji:"🌾",bg:"#F8F0E0",packBg:"#6B8C3E",packTop:"#4A6228",rating:4.9,reviews:19,featured:false,newest:true,image:"https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=400&fit=crop"},
  {id:17,name:"Bambara Groundnut Flour",short:"Protein-dense legume flour — muscle support & satiety",price:2800,oldPrice:null,weight:"600g",category:"flour",goals:["men","gut","weight","energy"],tags:["High Protein","Legume","Satiety"],badge:null,emoji:"🥜",bg:"#FAF0E0",packBg:"#8A5228",packTop:"#5C3518",rating:4.5,reviews:26,featured:false,newest:false,image:fallbackImg},
  {id:18,name:"Sweet Potato Porridge Mix",short:"Creamy, vitamin-rich morning porridge for the whole family",price:2500,oldPrice:null,weight:"700g",category:"cereal",goals:["kids","immunity","gut","energy"],tags:["Vitamin A","Kids","Family"],badge:null,emoji:"🥣",bg:"#FFF3E8",packBg:"#D45C10",packTop:"#9A3A08",rating:4.7,reviews:33,featured:false,newest:false,image:fallbackImg},
  {id:19,name:"Sorghum Chin-Chin",short:"Crunchy low-sugar snack baked from whole sorghum",price:1500,oldPrice:null,weight:"300g",category:"snack",goals:["gut","energy","kids"],tags:["Baked","Low Sugar","Crunchy"],badge:null,emoji:"🍪",bg:"#FEF3D0",packBg:"#C8891A",packTop:"#8A5E10",rating:4.6,reviews:78,featured:false,newest:false,image:fallbackImg},
  {id:20,name:"Plantain Chips — Sea Salt",short:"Thinly sliced unripe plantain chips, baked not fried",price:1200,oldPrice:null,weight:"200g",category:"snack",goals:["gut","energy","kids"],tags:["Baked","Low Fat","Gluten-Free"],badge:null,emoji:"🍟",bg:"#FFFBEA",packBg:"#2D7A4F",packTop:"#1A5C34",rating:4.8,reviews:92,featured:false,newest:false,image:"https://images.unsplash.com/photo-1600490036275-38f2c44184c5?w=400&h=400&fit=crop"},
  {id:21,name:"Plantain Chips — Spiced",short:"Baked unripe plantain with suya-spice seasoning",price:1300,oldPrice:null,weight:"200g",category:"snack",goals:["gut","energy"],tags:["Baked","Spiced","Gluten-Free"],badge:null,emoji:"🌶️",bg:"#FFF0E8",packBg:"#C04828",packTop:"#801E0E",rating:4.7,reviews:64,featured:false,newest:false,image:fallbackImg},
  {id:22,name:"Sorghum Energy Balls",short:"Bite-sized snack balls — dates, sorghum & tiger nut",price:2200,oldPrice:null,weight:"250g",category:"snack",goals:["gut","energy","weight","kids"],tags:["No Added Sugar","Energy","Snack"],badge:"new",emoji:"⚽",bg:"#F5F0E0",packBg:"#7A5230",packTop:"#4A2E12",rating:4.9,reviews:47,featured:false,newest:true,image:fallbackImg},
  {id:23,name:"Cassava Crackers",short:"Light, crispy cassava crackers — allergen-friendly",price:1400,oldPrice:null,weight:"200g",category:"snack",goals:["gut","kids","energy"],tags:["Allergen-Free","Crispy","Gluten-Free"],badge:null,emoji:"🍘",bg:"#FAF6EE",packBg:"#9A9587",packTop:"#5E5A50",rating:4.4,reviews:31,featured:false,newest:false,image:fallbackImg},
  {id:24,name:"FemmeGrain Tea Blend",short:"Herbal grain tea for hormonal comfort & cycle ease",price:2600,oldPrice:null,weight:"150g",category:"supplement",goals:["women","immunity","energy"],tags:["Herbal","Women's Wellness","Soothing"],badge:"new",emoji:"🍵",bg:"#FDE8EE",packBg:"#8B3A72",packTop:"#5C2450",rating:4.8,reviews:38,featured:false,newest:true,image:"https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=400&h=400&fit=crop"},
  {id:25,name:"Family Wellness Bundle",short:"Sorghum Flour + Plantain Flour + Tapioca — save 15%",price:7800,oldPrice:9200,weight:"Bundle",category:"bundle",goals:["gut","kids","diabetes","energy","immunity"],tags:["Bundle","Save 15%","Family"],badge:"bundle",emoji:"📦",bg:"#E8F5EE",packBg:"#1A5C34",packTop:"#0F3D22",rating:4.9,reviews:28,featured:false,newest:false,image:fallbackImg},
  {id:26,name:"Gut Reset Bundle",short:"Plantain Flour + Tapioca + Baobab Mix — gut trilogy",price:8500,oldPrice:10500,weight:"Bundle",category:"bundle",goals:["gut","immunity","weight"],tags:["Bundle","Gut Health","Save 19%"],badge:"bundle",emoji:"📦",bg:"#E8F5EE",packBg:"#0F6B30",packTop:"#08401C",rating:4.8,reviews:22,featured:false,newest:false,image:fallbackImg},
  {id:27,name:"His & Hers Combo",short:"AlphaGrain + FemmeGrain — the power couple bundle",price:7200,oldPrice:7800,weight:"Bundle",category:"bundle",goals:["men","women","energy","gut"],tags:["Bundle","Couple","His & Hers"],badge:"limited",emoji:"💑",bg:"#EAF0FB",packBg:"#2A3A6A",packTop:"#1A2A58",rating:5.0,reviews:16,featured:false,newest:true,image:"https://images.unsplash.com/photo-1515696955266-4f67e13219e8?w=400&h=400&fit=crop"},
  {id:28,name:"Sorghum Grain (Raw)",short:"Whole sorghum grain — for grinding, brewing, or cooking",price:1800,oldPrice:null,weight:"1.5kg",category:"cereal",goals:["gut","diabetes","energy"],tags:["Whole Grain","Raw","Versatile"],badge:null,emoji:"🌾",bg:"#FAF0E0",packBg:"#6B8C3E",packTop:"#4A6228",rating:4.5,reviews:19,featured:false,newest:false,image:fallbackImg},
  {id:29,name:"Cacao-Sorghum Blend",short:"Dark cacao + sorghum — antioxidant mood booster",price:3900,oldPrice:null,weight:"500g",category:"flour",goals:["gut","energy","immunity","women"],tags:["Cacao","Antioxidant","Mood"],badge:"new",emoji:"🍫",bg:"#F5EBE8",packBg:"#3D1A0A",packTop:"#220E05",rating:4.8,reviews:23,featured:false,newest:true,image:fallbackImg},
  {id:30,name:"Turmeric Grain Boost",short:"Sorghum + turmeric + ginger — anti-inflammatory power",price:3700,oldPrice:null,weight:"600g",category:"supplement",goals:["immunity","gut","energy","men"],tags:["Anti-Inflammatory","Turmeric","Ginger"],badge:null,emoji:"🟡",bg:"#FFFBEA",packBg:"#C89010",packTop:"#8A5E08",rating:4.7,reviews:35,featured:false,newest:false,image:fallbackImg},
];

function renderPack(p) {
  const border = p.packBorder ? `stroke="${p.packBg === '#FFFFFF' ? '#D8D4C8' : p.packBg}" stroke-width="1.5"` : '';
  const textColor = p.packBg === '#FFFFFF' || p.packBg === '#F5F0E8' ? p.packTop : '#fff';
  const subColor = p.packBg === '#FFFFFF' || p.packBg === '#F5F0E8' ? '#9A9587' : 'rgba(255,255,255,0.65)';
  const nameLines = p.name.length > 16 ? [p.name.split(' ').slice(0,Math.ceil(p.name.split(' ').length/2)).join(' '), p.name.split(' ').slice(Math.ceil(p.name.split(' ').length/2)).join(' ')] : [p.name];
  return `<svg viewBox="0 0 140 180" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${p.name} product pack">
    <rect x="10" y="8" width="120" height="165" rx="14" fill="${p.packBg}" ${border}/>
    <rect x="10" y="8" width="120" height="26" rx="8" fill="${p.packTop}"/>
    <circle cx="70" cy="68" r="22" fill="${p.packBg === '#FFFFFF' || p.packBg === '#F5F0E8' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.12)'}"/>
    <text x="70" y="75" text-anchor="middle" font-size="22">${p.emoji}</text>
    ${nameLines.length === 1
      ? `<text x="70" y="108" text-anchor="middle" font-family="Georgia,serif" font-size="${p.name.length > 14 ? 9 : 10}" font-weight="700" fill="${textColor}">${p.name.toUpperCase()}</text>`
      : `<text x="70" y="102" text-anchor="middle" font-family="Georgia,serif" font-size="9" font-weight="700" fill="${textColor}">${nameLines[0].toUpperCase()}</text>
         <text x="70" y="115" text-anchor="middle" font-family="Georgia,serif" font-size="9" font-weight="700" fill="${textColor}">${nameLines[1].toUpperCase()}</text>`
    }
    <text x="70" y="${nameLines.length === 1 ? 126 : 132}" text-anchor="middle" font-size="7" fill="${subColor}">${p.goals.slice(0,2).join(' · ').toUpperCase()}</text>
    <rect x="30" y="${nameLines.length === 1 ? 136 : 142}" width="80" height="12" rx="6" fill="${p.packBg === '#FFFFFF' || p.packBg === '#F5F0E8' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.12)'}"/>
    <text x="70" y="${nameLines.length === 1 ? 146 : 152}" text-anchor="middle" font-size="6.5" fill="${p.packBg === '#FFFFFF' || p.packBg === '#F5F0E8' ? p.packTop : 'rgba(255,255,255,0.8)'}" font-weight="600">${p.weight.toUpperCase()}</text>
    <text x="15" y="168" font-size="6" fill="${subColor}">TMJ FOODS</text>
    <text x="125" y="168" text-anchor="end" font-size="6" fill="${subColor}">✓ GLUTEN-FREE</text>
  </svg>`;
}

const badgeMap = {
  best:'<span class="product-badge badge-best">Bestseller</span>',
  new:'<span class="product-badge badge-new">New</span>',
  sale:'<span class="product-badge badge-sale">Sale</span>',
  women:'<span class="product-badge badge-women">For Women</span>',
  men:'<span class="product-badge badge-men">For Men</span>',
  bundle:'<span class="product-badge badge-bundle">Bundle</span>',
  limited:'<span class="product-badge badge-limited">Limited</span>',
};
const tagColors = {'Gluten-Free':'ptag-g','Low GI':'ptag-g','Gut Health':'ptag-g','Prebiotic':'ptag-g','Diabetic':'ptag-b','Women\'s Health':'ptag-p','Hormone Balance':'ptag-p','Men\'s Performance':'ptag-b','High Protein':'ptag-b','Vitamin A':'ptag-a','Immunity':'ptag-g','Beta-Carotene':'ptag-a','Easy Digest':'ptag-g','Family':'ptag-g','Low Sugar':'ptag-a','Breakfast':'ptag-a','Kids':'ptag-g','Ancient Grain':'ptag-a','Superfood':'ptag-g','Stamina':'ptag-b','Vitamin C':'ptag-o','Antioxidant':'ptag-o','Herbal':'ptag-p','Bundle':'ptag-a','Save 15%':'ptag-r','Save 19%':'ptag-r','Couple':'ptag-p','His & Hers':'ptag-p','Anti-Inflammatory':'ptag-o','Turmeric':'ptag-a','Ginger':'ptag-a','Cacao':'ptag-r','Mood':'ptag-p','Fermented':'ptag-a','Probiotic':'ptag-g','Umami':'ptag-a','Soothing':'ptag-p','Whole Grain':'ptag-g','Raw':'ptag-a','Versatile':'ptag-g','Baked':'ptag-g','Low Fat':'ptag-g','Spiced':'ptag-o','Crunchy':'ptag-a','Allergen-Free':'ptag-g','Crispy':'ptag-a'};

function tagClass(t){return tagColors[t]||'ptag-g'}

let cart = [];

function cartTotal(){return cart.reduce((s,i)=>s+i.price*i.qty,0)}
function cartCount(){return cart.reduce((s,i)=>s+i.qty,0)}

function updateCartBadge(){
  const b = document.getElementById('cartBadge');
  const c = cartCount();
  b.textContent = c;
  b.style.display = c > 0 ? 'flex' : 'none';
  b.classList.add('pop');
  setTimeout(()=>b.classList.remove('pop'),300);
}

function addToCart(id, btnEl){
  const p = PRODUCTS.find(x=>x.id===id);
  const existing = cart.find(x=>x.id===id);
  if(existing){existing.qty++}else{cart.push({...p,qty:1})}
  updateCartBadge();
  renderCartItems();
  if(btnEl){btnEl.classList.add('adding');setTimeout(()=>btnEl.classList.remove('adding'),300)}
  showToast(`✓ ${p.name} added to cart`,'success');
}

function removeFromCart(id){
  cart = cart.filter(x=>x.id!==id);
  updateCartBadge();
  renderCartItems();
}

function changeQty(id, delta){
  const item = cart.find(x=>x.id===id);
  if(!item)return;
  item.qty += delta;
  if(item.qty <= 0){removeFromCart(id);return}
  updateCartBadge();
  renderCartItems();
}

function renderCartItems(){
  const wrap = document.getElementById('cartItems');
  const totWrap = document.getElementById('cartTotals');
  if(cart.length === 0){
    wrap.innerHTML = `<div class="cart-empty"><div class="icon">🛒</div><h3>Your cart is empty</h3><p>Add some products to get started on your wellness journey.</p></div>`;
    totWrap.innerHTML = '';
    updateShipBar(0);
    return;
  }
  wrap.innerHTML = cart.map(item=>`
    <div class="cart-item">
      <div class="cart-item-img" style="background:${item.bg}">${renderPack(item)}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-variant">${item.weight}</div>
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)" aria-label="Decrease quantity">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
        <span class="cart-item-price">₦${(item.price*item.qty).toLocaleString()}</span>
        <button class="remove-btn" onclick="removeFromCart(${item.id})" aria-label="Remove ${item.name}">✕</button>
      </div>
    </div>
  `).join('');
  const subtotal = cartTotal();
  const delivery = subtotal >= 15000 ? 0 : 1500;
  const total = subtotal + delivery;
  totWrap.innerHTML = `
    <div class="total-row"><span>Subtotal</span><span>₦${subtotal.toLocaleString()}</span></div>
    <div class="total-row"><span>Delivery</span><span>${delivery===0?'<span style="color:var(--forest);font-weight:600">FREE</span>':'₦'+delivery.toLocaleString()}</span></div>
    <div class="total-row grand"><span>Total</span><span>₦${total.toLocaleString()}</span></div>
  `;
  updateShipBar(subtotal);
}

function updateShipBar(subtotal){
  const threshold = 15000;
  const pct = Math.min((subtotal/threshold)*100,100);
  document.getElementById('shipFill').style.width = pct+'%';
  const left = threshold - subtotal;
  if(left <= 0){
    document.getElementById('shipMsg').innerHTML = '🎉 You\'ve unlocked <strong>free delivery!</strong>';
  }else{
    document.getElementById('shipMsg').innerHTML = `Add <strong>₦${left.toLocaleString()}</strong> more for free delivery!`;
  }
}

function openCart(){
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart(){
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
  document.body.style.overflow = '';
}

function applyPromo(){
  const code = document.getElementById('promoInput').value.trim().toUpperCase();
  if(code==='TMJ10'){showToast('🎉 10% discount applied!','success')}
  else if(code==='FIRSTORDER'){showToast('🎉 Free delivery applied!','success')}
  else{showToast('Invalid promo code','error')}
}

function checkout(){
  if(cart.length===0){showToast('Your cart is empty!','error');return}
  showToast('Redirecting to checkout…','info');
  setTimeout(()=>window.location.href='#checkout',1500);
}

let currentPage = 1;
const PER_PAGE = 12;
let wishlist = new Set();
let viewMode = 'grid';

function getActiveCategories(){
  return [...document.querySelectorAll('#catFilters input:checked')].map(x=>x.value);
}
function getActiveGoals(){
  return [...document.querySelectorAll('#goalFilters input:checked')].map(x=>x.value);
}
function getMinRating(){
  const r = document.querySelector('input[name=rating]:checked');
  return r ? parseFloat(r.value) : 0;
}
function getMinPrice(){return parseInt(document.getElementById('minPrice').value)||0}
function getMaxPrice(){return parseInt(document.getElementById('maxPrice').value)||15000}
function getSearch(){return document.getElementById('searchInput').value.trim().toLowerCase()}
function getSort(){return document.getElementById('sortSelect').value}

function applyFilters(){
  currentPage = 1;
  renderGrid();
  renderActiveChips();
}

function renderActiveChips(){
  const chips = [];
  const cats = getActiveCategories();
  const goals = getActiveGoals();
  const minR = getMinRating();
  const search = getSearch();
  cats.forEach(c=>chips.push({label:c,type:'cat'}));
  goals.forEach(g=>chips.push({label:g,type:'goal'}));
  if(minR>0)chips.push({label:`⭐ ${minR}+`,type:'rating'});
  if(search)chips.push({label:`"${search}"`,type:'search'});
  const wrap = document.getElementById('activeFilters');
  wrap.innerHTML = chips.map(c=>`<span class="filter-chip" onclick="removeChip('${c.type}','${c.label}')">${c.label} <span class="x">×</span></span>`).join('');
}

function removeChip(type, label){
  if(type==='cat'){
    document.querySelectorAll('#catFilters input').forEach(x=>{if(x.value===label)x.checked=false});
  } else if(type==='goal'){
    document.querySelectorAll('#goalFilters input').forEach(x=>{if(x.value===label)x.checked=false});
  } else if(type==='rating'){
    document.querySelector('input[name=rating][value="0"]').checked=true;
  } else if(type==='search'){
    document.getElementById('searchInput').value='';
  }
  applyFilters();
}

function clearAllFilters(){
  document.querySelectorAll('#catFilters input, #goalFilters input').forEach(x=>x.checked=false);
  document.querySelector('input[name=rating][value="0"]').checked=true;
  document.getElementById('minPrice').value=0;
  document.getElementById('maxPrice').value=15000;
  document.getElementById('priceSlider').value=15000;
  document.getElementById('searchInput').value='';
  applyFilters();
}

function getFilteredProducts(){
  let list = [...PRODUCTS];
  const cats = getActiveCategories();
  const goals = getActiveGoals();
  const minR = getMinRating();
  const minP = getMinPrice();
  const maxP = getMaxPrice();
  const search = getSearch();
  if(cats.length)list=list.filter(p=>cats.includes(p.category));
  if(goals.length)list=list.filter(p=>goals.some(g=>p.goals.includes(g)));
  if(minR>0)list=list.filter(p=>p.rating>=minR);
  list=list.filter(p=>p.price>=minP && p.price<=maxP);
  if(search)list=list.filter(p=>p.name.toLowerCase().includes(search)||p.short.toLowerCase().includes(search)||p.tags.some(t=>t.toLowerCase().includes(search)));
  const sort = getSort();
  if(sort==='price-asc')list.sort((a,b)=>a.price-b.price);
  else if(sort==='price-desc')list.sort((a,b)=>b.price-a.price);
  else if(sort==='rating')list.sort((a,b)=>b.rating-a.rating);
  else if(sort==='newest')list.sort((a,b)=>b.newest-a.newest);
  else if(sort==='popular')list.sort((a,b)=>b.reviews-a.reviews);
  else list.sort((a,b)=>b.featured-a.featured);
  return list;
}

function renderGrid(){
  const grid = document.getElementById('productsGrid');
  const noR = document.getElementById('noResults');
  const filtered = getFilteredProducts();
  document.getElementById('resultCount').textContent = filtered.length;

  if(filtered.length===0){
    grid.style.display='none';
    noR.style.display='block';
    document.getElementById('pagination').innerHTML='';
    return;
  }
  grid.style.display='grid';
  noR.style.display='none';

  const start = (currentPage-1)*PER_PAGE;
  const page = filtered.slice(start, start+PER_PAGE);

  grid.innerHTML = page.map((p,i)=>{
    const wl = wishlist.has(p.id);
    const tagHTML = p.tags.slice(0,3).map(t=>`<span class="ptag ${tagClass(t)}">${t}</span>`).join('');
    const oldPriceHTML = p.oldPrice ? `<span class="price-old">₦${p.oldPrice.toLocaleString()}</span><span class="price-save">Save ₦${(p.oldPrice-p.price).toLocaleString()}</span>` : '';
    const starsHTML = '★'.repeat(Math.round(p.rating))+'☆'.repeat(5-Math.round(p.rating));
    const isList = viewMode === 'list';
    const tooltipTagsHTML = p.tags.slice(0,4).map(t=>`<span class="tt-pill">${t}</span>`).join('');
    return `
    <article class="product-card reveal" style="animation-delay:${i*0.04}s" data-id="${p.id}" aria-label="${p.name}">
      <div class="product-img" style="background:${p.bg}">
        ${p.badge ? badgeMap[p.badge] : ''}
        <button class="wishlist-btn ${wl?'active':''}" onclick="event.stopPropagation();toggleWishlist(${p.id},this)" aria-label="${wl?'Remove from':'Add to'} wishlist">${wl?'💚':'🤍'}</button>
        <img src="${p.image || fallbackImg}" alt="${p.name}" class="product-real-img">
        ${!isList?`<div class="quick-add">
          <span onclick="event.stopPropagation();openQuickView(${p.id})">👁 Quick View</span>
          <span class="quick-add-divider"></span>
          <span onclick="event.stopPropagation();addToCart(${p.id},null)">+ Add to Cart</span>
        </div>`:''}
        <div class="card-tooltip" role="tooltip">
          <div class="tt-name">${p.name}</div>
          <div class="tt-desc">${p.short}</div>
          <div class="tt-pills">${tooltipTagsHTML}</div>
        </div>
      </div>
      <div class="product-body" onclick="openQuickView(${p.id})">
        <div class="product-tags">${tagHTML}</div>
        <h2 class="product-name">${p.name}</h2>
        <p class="product-desc">${p.short}</p>
        <div class="product-rating">
          <span class="stars" aria-label="${p.rating} stars">${starsHTML}</span>
          <span class="rating-txt">${p.rating} (${p.reviews})</span>
        </div>
        <div class="product-footer">
          <div class="price-wrap">
            <div class="product-price">₦${p.price.toLocaleString()} <span style="font-size:11px;font-weight:400;color:var(--gray-400);font-family:var(--font-body)">/${p.weight}</span></div>
            ${oldPriceHTML}
          </div>
          <button class="atc-btn" onclick="event.stopPropagation();addToCart(${p.id},this)" aria-label="Add ${p.name} to cart">+</button>
        </div>
      </div>
    </article>`;
  }).join('');

  renderPagination(filtered.length);

  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}});
  },{threshold:0.08});
  grid.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}

function renderPagination(total){
  const pages = Math.ceil(total/PER_PAGE);
  const pg = document.getElementById('pagination');
  if(pages <= 1){pg.innerHTML='';return}
  let html = '';
  html += `<button class="pg-btn ${currentPage===1?'disabled':''}" onclick="goPage(${currentPage-1})" aria-label="Previous page">‹</button>`;
  for(let i=1;i<=pages;i++){
    if(i===1||i===pages||Math.abs(i-currentPage)<=1){
      html += `<button class="pg-btn ${i===currentPage?'active':''}" onclick="goPage(${i})" aria-label="Page ${i}">${i}</button>`;
    } else if(Math.abs(i-currentPage)===2){
      html += `<span class="pg-ellipsis">…</span>`;
    }
  }
  html += `<button class="pg-btn ${currentPage===pages?'disabled':''}" onclick="goPage(${currentPage+1})" aria-label="Next page">›</button>`;
  pg.innerHTML = html;
}

function goPage(n){
  const filtered = getFilteredProducts();
  const pages = Math.ceil(filtered.length/PER_PAGE);
  if(n<1||n>pages)return;
  currentPage=n;
  renderGrid();
  document.getElementById('shopLayout').scrollIntoView({behavior:'smooth',block:'start'});
}

function toggleWishlist(id, btn){
  if(wishlist.has(id)){
    wishlist.delete(id);
    btn.textContent='🤍';
    btn.classList.remove('active');
    showToast('Removed from wishlist','info');
  } else {
    wishlist.add(id);
    btn.textContent='💚';
    btn.classList.add('active');
    showToast('Added to wishlist 💚','success');
  }
}

function setView(mode){
  viewMode = mode;
  const grid = document.getElementById('productsGrid');
  grid.classList.toggle('list-view', mode==='list');
  document.getElementById('gridViewBtn').classList.toggle('active',mode==='grid');
  document.getElementById('listViewBtn').classList.toggle('active',mode==='list');
  renderGrid();
}

function toggleGroup(label){
  const list = label.nextElementSibling;
  label.classList.toggle('collapsed');
  list.style.display = label.classList.contains('collapsed') ? 'none' : '';
}

function toggleSidebar(){
  document.getElementById('sidebar').classList.toggle('mobile-open');
}

function showToast(msg, type='info'){
  const stack = document.getElementById('toastStack');
  const t = document.createElement('div');
  t.className = 'toast';
  const icons = {success:'✅',error:'❌',info:'ℹ️'};
  t.innerHTML = `<span class="t-icon">${icons[type]||'ℹ️'}</span>${msg}`;
  stack.appendChild(t);
  requestAnimationFrame(()=>{requestAnimationFrame(()=>t.classList.add('show'))});
  setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),400)},3000);
}

window.addEventListener('scroll',()=>{
  document.getElementById('mainNav').classList.toggle('scrolled',window.scrollY>40);
},{passive:true});

function toggleMobileNav(){
  const mn = document.getElementById('mobileNav');
  mn.classList.toggle('open');
}

const QV_EXTENDED = {
  1:{category:"Flour Blends",benefits:["Regulates blood sugar with slow-digesting sorghum + resistant starch from unripe plantain","Rich in prebiotic fibre that feeds good gut bacteria and reduces bloating","Delivers clean, long-lasting energy — no spikes or crashes","Packed with B-vitamins, iron, and magnesium for daily vitality","High satiety fibre helps you feel fuller longer, supporting weight management","100% gluten-free — safe for celiac and gluten-sensitive individuals","Rich in polyphenols — powerful antioxidants that fight chronic inflammation"],nutrition:{calories:348,protein:9,carbs:71,fibre:6,fat:3,sugar:2},usage:"Mix with warm water or milk to make swallow, pap, pancakes, or porridge. Works as a 1:1 substitute for wheat flour in most recipes.",steps:["Add 2 cups of flour to a bowl","Gradually pour in 1.5 cups of warm water or milk, stirring continuously","Mix to a smooth, lump-free consistency","Cook over medium heat, stirring until the desired texture is reached","Serve with your favourite soup or stew"],reviews:[{name:"Adaeze B.",loc:"Lagos",rating:5,text:"My doctor told me to reduce wheat because of my blood sugar. This flour changed my life — I still eat swallow every day without guilt.",date:"Mar 2025",verified:true},{name:"Mrs. Okafor",loc:"Enugu",rating:5,text:"My diabetic husband has been using this for 3 months and his glucose readings have improved significantly. Highly recommended.",date:"Feb 2025",verified:true},{name:"Tolu A.",loc:"Abuja",rating:5,text:"The taste is fantastic. My whole family switched and nobody even noticed — they just thought I changed my recipe.",date:"Jan 2025",verified:true}]},
  2:{category:"Flour Blends",benefits:["Rich in resistant starch — acts as a powerful prebiotic that feeds beneficial gut bacteria","Stabilises blood sugar and insulin response — ideal for diabetics and pre-diabetics","High potassium content supports healthy blood pressure and heart function","Promotes regular bowel movement and relieves chronic constipation","Supports healthy weight management through prolonged satiety","Boosts immune function by supporting gut microbiome health","Gentle on the digestive system — suitable for children, adults, and the elderly"],nutrition:{calories:332,protein:3,carbs:79,fibre:8,fat:1,sugar:4},usage:"An extremely versatile flour that works beautifully for swallow, soups, pancakes, and pastries. Mild, slightly sweet flavour.",steps:["Sift flour before use for a smoother texture","For swallow: add to boiling water gradually while stirring","For pancakes: combine with eggs and liquid, let batter rest 5 min","Store in a cool, dry place away from moisture","Best consumed within 6 months of opening"],reviews:[{name:"Dr. Funke O.",loc:"Ibadan",rating:5,text:"As a nutritionist, I now recommend this to all my patients managing type 2 diabetes. The resistant starch content is exceptional.",date:"Mar 2025",verified:true},{name:"Emeka C.",loc:"Port Harcourt",rating:4,text:"Great product. Took a week to get used to the texture difference but now I genuinely prefer it over regular flour.",date:"Feb 2025",verified:true}]},
  3:{category:"Women's Wellness",benefits:["Supports hormonal balance — nutrient blend helps with mood stability and cycle comfort","Rich in iron to support healthy blood levels and fight period-related fatigue","Gut-friendly fibre reduces bloating and supports digestive comfort throughout the month","Contains antioxidants that promote clear, radiant skin from within","Mood-supporting nutrients help reduce stress impact and enhance emotional balance","Helps with healthy weight management while satisfying cravings naturally","Crafted specifically for the total wellness of the African woman"],nutrition:{calories:355,protein:10,carbs:68,fibre:7,fat:4,sugar:3},usage:"Designed to replace your everyday flour for all meals. Best results when used consistently as part of a balanced diet.",steps:["Use as you would regular flour for swallow, soups, or baking","For best hormonal support, aim for daily consumption","Works great in smoothies — add 2 tbsp for a nutrition boost","Pair with iron-rich foods (beans, leafy greens) for best results","Store sealed in a cool, dry place"],reviews:[{name:"Chisom N.",loc:"London, UK",rating:5,text:"I've tried many 'women's wellness' products and most are gimmicks. FemmeGrain is different — real ingredients, real results. My cycle symptoms have noticeably reduced.",date:"Mar 2025",verified:true},{name:"Amaka I.",loc:"Lagos",rating:5,text:"My skin has cleared up dramatically since I started using this consistently. The bloating I used to have every month is almost gone.",date:"Feb 2025",verified:true}]},
  4:{category:"Men's Performance",benefits:["High-protein mineral-rich blend supports muscle repair, body strength, and physical performance","Low glycemic formulation delivers steady energy without spikes — ideal pre and post workout","Rich in fibre and prebiotics that improve digestion and gut health","Supports mental clarity and focus through steady brain fuel","Whole-grain nutrients help maintain healthy cholesterol and circulation","Antioxidants and micronutrients strengthen the body's immune defence system","100% clean — no additives, fillers, or artificial anything"],nutrition:{calories:372,protein:16,carbs:65,fibre:7,fat:5,sugar:2},usage:"Engineered for performance. Use as your primary flour for all meals or mix into post-workout shakes.",steps:["Use as a direct flour substitute for all cooking","For a performance shake: blend 3 tbsp with banana, milk, and peanut butter","Ideal before training for slow-release energy","After training: mix with protein-rich foods for muscle recovery","Best results with consistent daily use"],reviews:[{name:"Kunle O.",loc:"Abuja",rating:5,text:"I've been using AlphaGrain for 4 months. My energy during gym sessions is noticeably better and I've gained lean muscle without the usual bloating from regular supplements.",date:"Mar 2025",verified:true},{name:"Seun A.",loc:"Lagos",rating:5,text:"Clean ingredients, great taste, and I can actually feel the sustained energy. Replaced my imported protein powder with this.",date:"Jan 2025",verified:true}]},
  5:{category:"Flour Blends",benefits:["Exceptionally rich in beta-carotene — the body converts it to Vitamin A for eye health","Supports strong immunity — Vitamin A is critical for the immune system's front-line defence","High fibre content promotes smooth digestion and feeds good gut bacteria","Rich in potassium and antioxidants that support healthy blood pressure","Anti-inflammatory compounds help reduce chronic inflammation","Supports brain health, focus, and memory through key micronutrients","Naturally sweet flavour makes it family-friendly without added sugar"],nutrition:{calories:320,protein:4,carbs:74,fibre:5,fat:1,sugar:11},usage:"Mild, naturally sweet flavour that works beautifully in porridge, pancakes, baked goods, and soups.",steps:["Mix with water or milk for a naturally sweet porridge","Use in baking as a partial wheat flour substitute (up to 40%)","Blend into smoothies for a Vitamin A boost","Makes excellent baby food when mixed with breast milk or formula","Delicious in chin-chin and pastry recipes"],reviews:[{name:"Mrs. Eze",loc:"Onitsha",rating:5,text:"My children actually ask for this now. The natural sweetness means I need less sugar in everything I make.",date:"Feb 2025",verified:true}]},
};
for(let p of PRODUCTS){
  if(!QV_EXTENDED[p.id]){
    QV_EXTENDED[p.id]={
      category: p.category.charAt(0).toUpperCase()+p.category.slice(1),
      benefits: p.goals.map(g=>({gut:"Supports gut health through fibre and prebiotics",diabetes:"Helps regulate blood sugar levels naturally",weight:"High satiety value supports healthy weight management",women:"Specially formulated for women's hormonal and nutritional needs",men:"Supports male performance, strength, and energy",immunity:"Boosts natural immune defence through key micronutrients",energy:"Delivers clean, sustained energy without spikes or crashes",kids:"Gentle, nutritious, and suitable for the whole family"}[g]||`Supports ${g} naturally`)),
      nutrition:{calories:Math.round(300+Math.random()*80),protein:Math.round(4+Math.random()*12),carbs:Math.round(55+Math.random()*25),fibre:Math.round(4+Math.random()*6),fat:Math.round(1+Math.random()*6),sugar:Math.round(1+Math.random()*8)},
      usage:`Use ${p.name} as directed on the packaging. Suitable as a daily functional food addition to your diet.`,
      steps:["Measure the required amount","Combine with water, milk, or as per your recipe","Cook or prepare according to your preferred method","Serve and enjoy as part of a balanced meal","Store sealed in a cool, dry place after opening"],
      reviews:[{name:"Happy Customer",loc:"Nigeria",rating:p.rating,text:`I've been using ${p.name} for a while now and the quality is consistently excellent. A trusted brand.`,date:"2025",verified:true}]
    };
  }
}

let qvCurrentId = null;
let qvQty = 1;

function openQuickView(id){
  const p = PRODUCTS.find(x=>x.id===id);
  const ext = QV_EXTENDED[id];
  if(!p||!ext) return;
  qvCurrentId = id;
  qvQty = 1;

  document.getElementById('qvLeft').style.background = p.bg || 'var(--gray-50)';

  const badgeEl = document.getElementById('qvBadge');
  badgeEl.innerHTML = p.badge ? `<span class="qv-badge ${({best:'badge-best',new:'badge-new',sale:'badge-sale',women:'badge-women',men:'badge-men',bundle:'badge-bundle',limited:'badge-limited'})[p.badge]}">${({best:'Bestseller',new:'New',sale:'Sale',women:'For Women',men:'For Men',bundle:'Bundle',limited:'Limited'})[p.badge]}</span>` : '';

  document.getElementById('qvPackWrap').innerHTML = renderPack(p);

  document.getElementById('qvCategory').textContent = ext.category;
  document.getElementById('qvModalName').textContent = p.name;
  document.getElementById('qvStars').textContent = '★'.repeat(Math.round(p.rating))+'☆'.repeat(5-Math.round(p.rating));
  document.getElementById('qvRatingNum').textContent = p.rating;
  document.getElementById('qvReviews').textContent = `(${p.reviews} reviews)`;
  document.getElementById('qvPrice').textContent = '₦'+p.price.toLocaleString();
  document.getElementById('qvWeight').textContent = '/ '+p.weight;

  const oldEl = document.getElementById('qvOldPrice');
  const saveEl = document.getElementById('qvSave');
  if(p.oldPrice){
    oldEl.textContent='₦'+p.oldPrice.toLocaleString();
    oldEl.style.display='inline';
    saveEl.textContent='Save ₦'+(p.oldPrice-p.price).toLocaleString();
    saveEl.style.display='inline';
  }else{
    oldEl.style.display='none';
    saveEl.style.display='none';
  }

  document.getElementById('qvDesc').textContent = p.short;

  document.getElementById('qvBenefits').innerHTML = ext.benefits.map(b=>`
    <div class="qv-benefit">
      <div class="dot">✓</div>
      <span>${b}</span>
    </div>`).join('');

  const n = ext.nutrition;
  document.getElementById('qvNutrition').innerHTML = [
    {v:n.calories,l:'Calories',u:'kcal'},
    {v:n.protein+'g',l:'Protein',u:''},
    {v:n.carbs+'g',l:'Carbohydrates',u:''},
    {v:n.fibre+'g',l:'Dietary Fibre',u:''},
    {v:n.fat+'g',l:'Total Fat',u:''},
    {v:n.sugar+'g',l:'Sugars',u:''},
    {v:'0g',l:'Gluten',u:''},
    {v:'Natural',l:'Additives',u:''},
  ].map(cell=>`
    <div class="qv-nut-cell">
      <div class="qv-nut-val">${cell.v}${cell.u}</div>
      <div class="qv-nut-lbl">${cell.l}</div>
    </div>`).join('');

  document.getElementById('qvUsage').textContent = ext.usage;
  document.getElementById('qvUsageSteps').innerHTML = ext.steps.map((s,i)=>`
    <li><span class="step-n">${i+1}</span><span>${s}</span></li>`).join('');

  const bars=[65,20,10,3,2];
  document.getElementById('qvReviewSummary').innerHTML = `
    <div style="text-align:center">
      <div class="qv-big-rating">${p.rating}</div>
      <div style="color:var(--amber);font-size:18px;margin:4px 0">${'★'.repeat(Math.round(p.rating))}</div>
      <div style="font-size:11px;color:var(--gray-400)">${p.reviews} reviews</div>
    </div>
    <div class="qv-rating-bars">
      ${[5,4,3,2,1].map((s,i)=>`
        <div class="qv-rbar-row">
          <span class="qv-rbar-lbl">${s}</span>
          <div class="qv-rbar-track"><div class="qv-rbar-fill" style="width:${bars[i]}%"></div></div>
          <span class="qv-rbar-cnt">${bars[i]}%</span>
        </div>`).join('')}
    </div>`;

  document.getElementById('qvReviewCards').innerHTML = ext.reviews.map(r=>`
    <div class="qv-review-card">
      <div class="qv-review-head">
        <div class="qv-rev-avatar">${r.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
        <div>
          <div class="qv-rev-name">${r.name}</div>
          <div style="font-size:11px;color:var(--gray-400)">${r.loc}</div>
        </div>
        <div class="qv-rev-stars">${'★'.repeat(r.rating)}</div>
        ${r.verified?'<span class="qv-rev-badge">✓ Verified</span>':''}
        <span class="qv-rev-date">${r.date}</span>
      </div>
      <p class="qv-rev-text">${r.text}</p>
    </div>`).join('');

  document.getElementById('qvQtyNum').textContent = 1;

  const wlBtn = document.getElementById('qvWishlistBtn');
  wlBtn.textContent = wishlist.has(id) ? '💚' : '🤍';
  wlBtn.classList.toggle('active', wishlist.has(id));

  document.querySelectorAll('.qv-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.qv-tab-content').forEach(c=>c.classList.remove('active'));
  document.querySelector('.qv-tab').classList.add('active');
  document.getElementById('tab-benefits').classList.add('active');

  const related = PRODUCTS.filter(x=>x.id!==id && (x.category===p.category || x.goals.some(g=>p.goals.includes(g)))).slice(0,5);
  const existing = document.getElementById('qvRelatedInner');
  if(existing) existing.remove();
  if(related.length){
    const relDiv = document.createElement('div');
    relDiv.id='qvRelatedInner';
    relDiv.style.cssText='margin-top:18px;padding-top:16px;border-top:1px solid var(--gray-100)';
    relDiv.innerHTML=`<h4 style="font-family:var(--font-serif);font-size:15px;font-weight:700;color:var(--gray-700);margin-bottom:12px">You might also like</h4>
      <div class="qv-related-grid">${related.map(r=>`
        <div class="qv-rel-card" onclick="openQuickView(${r.id})">
          <div class="rel-emoji">${r.emoji}</div>
          <div class="rel-name">${r.name}</div>
          <div class="rel-price">₦${r.price.toLocaleString()}</div>
        </div>`).join('')}
      </div>`;
    document.getElementById('qvRight').appendChild(relDiv);
  }

  document.getElementById('qvOverlay').classList.add('open');
  document.body.style.overflow='hidden';
  document.getElementById('qvRight').scrollTop=0;
}

function closeQuickView(){
  document.getElementById('qvOverlay').classList.remove('open');
  document.body.style.overflow='';
  qvCurrentId=null;
}

function handleQvOverlayClick(e){
  if(e.target===document.getElementById('qvOverlay')) closeQuickView();
}

function qvSwitchTab(btn, tabId){
  document.querySelectorAll('.qv-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.qv-tab-content').forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-'+tabId).classList.add('active');
}

function qvDot(dot, idx){
  document.querySelectorAll('.qv-dot').forEach(d=>d.classList.remove('active'));
  dot.classList.add('active');
}

function changeQvQty(delta){
  qvQty = Math.max(1, Math.min(12, qvQty + delta));
  document.getElementById('qvQtyNum').textContent = qvQty;
}

function qvAddToCart(){
  if(!qvCurrentId) return;
  const p = PRODUCTS.find(x=>x.id===qvCurrentId);
  const existing = cart.find(x=>x.id===qvCurrentId);
  if(existing){ existing.qty += qvQty; }
  else { cart.push({...p, qty:qvQty}); }
  updateCartBadge();
  renderCartItems();
  const btn = document.getElementById('qvAtcBtn');
  btn.innerHTML='✓ Added!';
  btn.style.background='var(--moss)';
  setTimeout(()=>{btn.innerHTML='🛒 Add to Cart';btn.style.background='';},1800);
  showToast(`✓ ${p.name} ×${qvQty} added to cart`,'success');
}

function qvToggleWishlist(){
  if(!qvCurrentId) return;
  const btn = document.getElementById('qvWishlistBtn');
  if(wishlist.has(qvCurrentId)){
    wishlist.delete(qvCurrentId);
    btn.textContent='🤍';
    btn.classList.remove('active');
    showToast('Removed from wishlist','info');
  } else {
    wishlist.add(qvCurrentId);
    btn.textContent='💚';
    btn.classList.add('active');
    showToast('Added to wishlist 💚','success');
  }
  renderGrid();
}

document.addEventListener('keydown', e=>{
  if(e.key==='Escape'){
    if(document.getElementById('qvOverlay').classList.contains('open')) closeQuickView();
    else if(document.getElementById('cartOverlay').classList.contains('open')) closeCart();
  }
});

renderCartItems();
renderGrid();
updateCartBadge();
