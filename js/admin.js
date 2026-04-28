const STORAGE_KEYS = {
  ORDERS: 'tmj_orders',
  PRODUCTS: 'tmj_products',
  CUSTOMERS: 'tmj_customers'
};

let orders = JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS)) || [];
let products = JSON.parse(localStorage.getItem(STORAGE_KEYS.PRODUCTS)) || null;

if (!products) {
  products = getDefaultProducts();
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
}

function validateProduct(p) {
  if (!p) return false;
  if (!p.name || typeof p.name !== 'string') return false;
  if (typeof p.price !== 'number' || p.price <= 0) return false;
  if (!p.category) return false;
  if (!Array.isArray(p.goals) || p.goals.length === 0) return false;
  return true;
}

function getDefaultProducts() {
  return [
    {id:1,name:"Sorghum–Plantain Flour",short:"Classic blend for blood sugar control & gut health",price:3500,oldPrice:null,weight:"1kg",category:"flour",goals:["gut","diabetes","weight","energy"],tags:["Gluten-Free","Low GI","Gut Health"],badge:"best",emoji:"🌾",bg:"#E8F5EE",packBg:"#1A5C34",packTop:"#0F3D22",rating:4.9,reviews:142,featured:true,newest:false,stock:100},
    {id:2,name:"Unripe Plantain Flour",short:"Resistant starch prebiotic — feeds good gut bacteria",price:3200,oldPrice:null,weight:"1kg",category:"flour",goals:["gut","diabetes","weight","immunity"],tags:["Prebiotic","Low GI","Diabetic"],badge:null,emoji:"🍌",bg:"#FFFBEA",packBg:"#FFFFFF",packTop:"#2D7A4F",packBorder:true,rating:4.8,reviews:98,featured:true,newest:false,stock:100},
    {id:3,name:"SORPLA FemmeGrain",short:"Hormonal balance, gut health & iron for women",price:3800,oldPrice:null,weight:"1kg",category:"flour",goals:["gut","women","weight","immunity","energy"],tags:["Women's Health","Hormone Balance"],badge:"women",emoji:"🌸",bg:"#FDF0F8",packBg:"#B05090",packTop:"#7B2D6E",rating:5.0,reviews:76,featured:true,newest:false,stock:100},
    {id:4,name:"SORPLA AlphaGrain",short:"High-protein performance blend for strength & focus",price:4000,oldPrice:null,weight:"1kg",category:"flour",goals:["gut","men","energy","weight"],tags:["Men's Performance","High Protein"],badge:"men",emoji:"💪",bg:"#EAF0FB",packBg:"#1A3A7B",packTop:"#0F2456",rating:4.9,reviews:53,featured:true,newest:false,stock:100},
    {id:5,name:"OrangeKind™ OFSP",short:"Orange sweet potato flour — beta-carotene & Vitamin A",price:2800,oldPrice:null,weight:"850g",category:"flour",goals:["gut","immunity","energy","kids"],tags:["Vitamin A","Immunity","Beta-Carotene"],badge:null,emoji:"🍠",bg:"#FFF3E8",packBg:"#D45C10",packTop:"#9A3A08",rating:4.7,reviews:41,featured:true,newest:false,stock:100},
    {id:6,name:"Tapioca Flakes",short:"Gentle, gluten-free cassava starch — family-friendly",price:1800,oldPrice:null,weight:"500g",category:"cereal",goals:["gut","kids","energy"],tags:["Gluten-Free","Easy Digest","Family"],badge:null,emoji:"🫙",bg:"#F0F8F4",packBg:"#F5F0E8",packTop:"#4A9E6B",packBorder:true,rating:4.8,reviews:88,featured:true,newest:false,stock:100},
    {id:7,name:"Sorghum Porridge Mix",short:"Warm, creamy breakfast porridge — slow energy release",price:2600,oldPrice:3000,weight:"800g",category:"cereal",goals:["gut","diabetes","energy","kids"],tags:["Low GI","Breakfast","Gluten-Free"],badge:"sale",emoji:"🥣",bg:"#FFF7ED",packBg:"#4A9E6B",packTop:"#2D7A4F",rating:4.7,reviews:65,featured:false,newest:false,stock:100},
    {id:8,name:"Sorghum Flatbread Mix",short:"Ready-mix for soft, low-GI flatbread in minutes",price:2900,oldPrice:null,weight:"700g",category:"flour",goals:["diabetes","gut","energy"],tags:["Low GI","Flatbread","Gluten-Free"],badge:null,emoji:"🫓",bg:"#FAF0E0",packBg:"#7A5230",packTop:"#4A2E12",rating:4.6,reviews:34,featured:false,newest:true,stock:100},
    {id:9,name:"Plantain-Oat Pancake Mix",short:"Fluffy, low-sugar pancakes — perfect weekend breakfast",price:2400,oldPrice:null,weight:"600g",category:"cereal",goals:["gut","diabetes","kids","energy"],tags:["Low Sugar","Breakfast","Kids"],badge:"new",emoji:"🥞",bg:"#FFFBEA",packBg:"#E8A825",packTop:"#9A6010",rating:4.8,reviews:29,featured:false,newest:true,stock:100},
    {id:10,name:"Sorghum Granola",short:"Crunchy, low-sugar granola with local seeds",price:3100,oldPrice:null,weight:"500g",category:"cereal",goals:["gut","weight","energy","kids"],tags:["Low Sugar","Crunchy","Gluten-Free"],badge:null,emoji:"🌰",bg:"#FDF4E3",packBg:"#C8891A",packTop:"#8A5E10",rating:4.5,reviews:42,featured:false,newest:false,stock:100},
    {id:11,name:"Tiger Nut Flour",short:"Naturally sweet, high-fibre flour from chufa tubers",price:3400,oldPrice:null,weight:"750g",category:"flour",goals:["gut","diabetes","immunity","energy"],tags:["Prebiotic","Naturally Sweet","Gluten-Free"],badge:null,emoji:"🥜",bg:"#F5F0E0",packBg:"#8B6914",packTop:"#5C4208",rating:4.7,reviews:38,featured:false,newest:false,stock:100},
    {id:12,name:"Moringa Grain Blend",short:"Sorghum + moringa — iron, protein & antioxidant power",price:4200,oldPrice:null,weight:"600g",category:"supplement",goals:["immunity","women","energy","gut"],tags:["Iron","Antioxidant","Women"],badge:null,emoji:"🌿",bg:"#E8F5EE",packBg:"#0F6B30",packTop:"#08401C",rating:4.9,reviews:57,featured:false,newest:false,stock:100},
    {id:13,name:"Baobab Energy Mix",short:"Baobab + sorghum superfood blend for stamina",price:4500,oldPrice:5000,weight:"500g",category:"supplement",goals:["energy","immunity","men","gut"],tags:["Superfood","Stamina","Vitamin C"],badge:"sale",emoji:"🌳",bg:"#E8F5EE",packBg:"#3D7A2A",packTop:"#254F18",rating:4.8,reviews:44,featured:false,newest:false,stock:100},
    {id:14,name:"Locust Bean Powder",short:"Fermented Iru — gut probiotic & flavour booster",price:1600,oldPrice:null,weight:"200g",category:"supplement",goals:["gut","immunity"],tags:["Probiotic","Fermented","Umami"],badge:null,emoji:"🫘",bg:"#FFF3E8",packBg:"#4A2E12",packTop:"#2C1A08",rating:4.4,reviews:22,featured:false,newest:false,stock:100},
    {id:15,name:"Zobo Hibiscus Powder",short:"Dried zobo — Vitamin C, antioxidants & heart support",price:1900,oldPrice:null,weight:"250g",category:"supplement",goals:["immunity","women","energy"],tags:["Vitamin C","Antioxidant","Hibiscus"],badge:null,emoji:"🌺",bg:"#FDE8EE",packBg:"#A0254A",packTop:"#6B1530",rating:4.6,reviews:51,featured:false,newest:true,stock:100},
    {id:16,name:"Acha (Fonio) Flour",short:"Ancient African grain — high protein, gluten-free",price:3600,oldPrice:null,weight:"800g",category:"flour",goals:["diabetes","gut","energy","men"],tags:["Ancient Grain","High Protein","Gluten-Free"],badge:"new",emoji:"🌾",bg:"#F8F0E0",packBg:"#6B8C3E",packTop:"#4A6228",rating:4.9,reviews:19,featured:false,newest:true,stock:100},
    {id:17,name:"Bambara Groundnut Flour",short:"Protein-dense legume flour — muscle support & satiety",price:2800,oldPrice:null,weight:"600g",category:"flour",goals:["men","gut","weight","energy"],tags:["High Protein","Legume","Satiety"],badge:null,emoji:"🥜",bg:"#FAF0E0",packBg:"#8A5228",packTop:"#5C3518",rating:4.5,reviews:26,featured:false,newest:false,stock:100},
    {id:18,name:"Sweet Potato Porridge Mix",short:"Creamy, vitamin-rich morning porridge for the whole family",price:2500,oldPrice:null,weight:"700g",category:"cereal",goals:["kids","immunity","gut","energy"],tags:["Vitamin A","Kids","Family"],badge:null,emoji:"🥣",bg:"#FFF3E8",packBg:"#D45C10",packTop:"#9A3A08",rating:4.7,reviews:33,featured:false,newest:false,stock:100},
    {id:19,name:"Sorghum Chin-Chin",short:"Crunchy low-sugar snack baked from whole sorghum",price:1500,oldPrice:null,weight:"300g",category:"snack",goals:["gut","energy","kids"],tags:["Baked","Low Sugar","Crunchy"],badge:null,emoji:"🍪",bg:"#FEF3D0",packBg:"#C8891A",packTop:"#8A5E10",rating:4.6,reviews:78,featured:false,newest:false,stock:100},
    {id:20,name:"Plantain Chips — Sea Salt",short:"Thinly sliced unripe plantain chips, baked not fried",price:1200,oldPrice:null,weight:"200g",category:"snack",goals:["gut","energy","kids"],tags:["Baked","Low Fat","Gluten-Free"],badge:null,emoji:"🍟",bg:"#FFFBEA",packBg:"#2D7A4F",packTop:"#1A5C34",rating:4.8,reviews:92,featured:false,newest:false,stock:100},
    {id:21,name:"Plantain Chips — Spiced",short:"Baked unripe plantain with suya-spice seasoning",price:1300,oldPrice:null,weight:"200g",category:"snack",goals:["gut","energy"],tags:["Baked","Spiced","Gluten-Free"],badge:null,emoji:"🌶️",bg:"#FFF0E8",packBg:"#C04828",packTop:"#801E0E",rating:4.7,reviews:64,featured:false,newest:false,stock:100},
    {id:22,name:"Sorghum Energy Balls",short:"Bite-sized snack balls — dates, sorghum & tiger nut",price:2200,oldPrice:null,weight:"250g",category:"snack",goals:["gut","energy","weight","kids"],tags:["No Added Sugar","Energy","Snack"],badge:"new",emoji:"⚽",bg:"#F5F0E0",packBg:"#7A5230",packTop:"#4A2E12",rating:4.9,reviews:47,featured:false,newest:true,stock:100},
    {id:23,name:"Cassava Crackers",short:"Light, crispy cassava crackers — allergen-friendly",price:1400,oldPrice:null,weight:"200g",category:"snack",goals:["gut","kids","energy"],tags:["Allergen-Free","Crispy","Gluten-Free"],badge:null,emoji:"🍘",bg:"#FAF6EE",packBg:"#9A9587",packTop:"#5E5A50",rating:4.4,reviews:31,featured:false,newest:false,stock:100},
    {id:24,name:"FemmeGrain Tea Blend",short:"Herbal grain tea for hormonal comfort & cycle ease",price:2600,oldPrice:null,weight:"150g",category:"supplement",goals:["women","immunity","energy"],tags:["Herbal","Women's Wellness","Soothing"],badge:"new",emoji:"🍵",bg:"#FDE8EE",packBg:"#8B3A72",packTop:"#5C2450",rating:4.8,reviews:38,featured:false,newest:true,stock:100},
    {id:25,name:"Family Wellness Bundle",short:"Sorghum Flour + Plantain Flour + Tapioca — save 15%",price:7800,oldPrice:9200,weight:"Bundle",category:"bundle",goals:["gut","kids","diabetes","energy","immunity"],tags:["Bundle","Save 15%","Family"],badge:"bundle",emoji:"📦",bg:"#E8F5EE",packBg:"#1A5C34",packTop:"#0F3D22",rating:4.9,reviews:28,featured:false,newest:false,stock:50},
    {id:26,name:"Gut Reset Bundle",short:"Plantain Flour + Tapioca + Baobab Mix — gut trilogy",price:8500,oldPrice:10500,weight:"Bundle",category:"bundle",goals:["gut","immunity","weight"],tags:["Bundle","Gut Health","Save 19%"],badge:"bundle",emoji:"📦",bg:"#E8F5EE",packBg:"#0F6B30",packTop:"#08401C",rating:4.8,reviews:22,featured:false,newest:false,stock:50},
    {id:27,name:"His & Hers Combo",short:"AlphaGrain + FemmeGrain — the power couple bundle",price:7200,oldPrice:7800,weight:"Bundle",category:"bundle",goals:["men","women","energy","gut"],tags:["Bundle","Couple","His & Hers"],badge:"limited",emoji:"💑",bg:"#EAF0FB",packBg:"#2A3A6A",packTop:"#1A2A58",rating:5.0,reviews:16,featured:false,newest:true,stock:30},
    {id:28,name:"Sorghum Grain (Raw)",short:"Whole sorghum grain — for grinding, brewing, or cooking",price:1800,oldPrice:null,weight:"1.5kg",category:"cereal",goals:["gut","diabetes","energy"],tags:["Whole Grain","Raw","Versatile"],badge:null,emoji:"🌾",bg:"#FAF0E0",packBg:"#6B8C3E",packTop:"#4A6228",rating:4.5,reviews:19,featured:false,newest:false,stock:100},
    {id:29,name:"Cacao-Sorghum Blend",short:"Dark cacao + sorghum — antioxidant mood booster",price:3900,oldPrice:null,weight:"500g",category:"flour",goals:["gut","energy","immunity","women"],tags:["Cacao","Antioxidant","Mood"],badge:"new",emoji:"🍫",bg:"#F5EBE8",packBg:"#3D1A0A",packTop:"#220E05",rating:4.8,reviews:23,featured:false,newest:true,stock:100},
    {id:30,name:"Turmeric Grain Boost",short:"Sorghum + turmeric + ginger — anti-inflammatory power",price:3700,oldPrice:null,weight:"600g",category:"supplement",goals:["immunity","gut","energy","men"],tags:["Anti-Inflammatory","Turmeric","Ginger"],badge:null,emoji:"🟡",bg:"#FFFBEA",packBg:"#C89010",packTop:"#8A5E08",rating:4.7,reviews:35,featured:false,newest:false,stock:100}
  ];
}

function saveData() {
  localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
}

function updateTime() {
  const now = new Date();
  document.getElementById('adminTime').textContent = now.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
}

function switchTab(tabId) {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.getElementById(`tab-${tabId}`).classList.add('active');
  
  document.getElementById('productCount').textContent = products.length;
  
  if (tabId === 'dashboard') renderDashboard();
  else if (tabId === 'orders') renderOrders();
  else if (tabId === 'products') renderProducts();
}

let chartInstances = {};

function destroyChart(canvasId) {
  if (chartInstances[canvasId]) {
    chartInstances[canvasId].destroy();
    delete chartInstances[canvasId];
  }
}

function getWeekRange() {
  const now = new Date();
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay());
  startOfWeek.setHours(0, 0, 0, 0);
  return { start: startOfWeek, end: now };
}

function getMonthRange() {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  return { start: startOfMonth, end: now };
}

function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

function renderDashboard() {
  const totalRevenue = orders.reduce((s, o) => s + (o.status === 'paid' || o.status === 'processing' || o.status === 'shipped' || o.status === 'delivered' ? o.total : 0), 0);
  const uniqueCustomers = new Set(orders.map(o => o.customer.email)).size;

  const { start: weekStart } = getWeekRange();
  const { start: monthStart } = getMonthRange();

  const weekOrders = orders.filter(o => new Date(o.date) >= weekStart);
  const monthOrders = orders.filter(o => new Date(o.date) >= monthStart);

  const weekRevenue = weekOrders.reduce((s, o) => s + (o.status === 'paid' || o.status === 'processing' || o.status === 'shipped' || o.status === 'delivered' ? o.total : 0), 0);
  const monthRevenue = monthOrders.reduce((s, o) => s + (o.status === 'paid' || o.status === 'processing' || o.status === 'shipped' || o.status === 'delivered' ? o.total : 0), 0);

  document.getElementById('statRevenue').textContent = '₦' + totalRevenue.toLocaleString();
  document.getElementById('statOrders').textContent = orders.length;
  document.getElementById('statCustomers').textContent = uniqueCustomers;
  document.getElementById('statWeekRevenue').textContent = '₦' + weekRevenue.toLocaleString();
  document.getElementById('statMonthRevenue').textContent = '₦' + monthRevenue.toLocaleString();
  document.getElementById('statWeekOrders').textContent = weekOrders.length;

  renderRecentOrders();
  renderTopProductsAllTime();
  renderWeeklyRevenueChart(weekOrders);
  renderMonthlyRevenueChart(monthOrders);
  renderWeeklyProductsChart(weekOrders);
  renderMonthlyProductsChart(monthOrders);
  renderCategorySalesChart();
  renderStatusChart();
  renderWeekTopProduct(weekOrders);
  renderMonthTopProduct(monthOrders);
  renderSalesInsights(weekOrders, monthOrders, weekRevenue, monthRevenue);
  renderMarketingTips(weekOrders, monthOrders);
}

function renderRecentOrders() {
  const recentOrders = orders.slice(-5).reverse();
  const recentEl = document.getElementById('recentOrders');
  if (recentOrders.length === 0) {
    recentEl.innerHTML = '<p class="empty-state">No orders yet</p>';
  } else {
    recentEl.innerHTML = recentOrders.map(o => `
      <div class="recent-order-item">
        <span class="order-id">#${o.id}</span>
        <span class="order-status status-${o.status}">${o.status}</span>
        <span class="order-total">₦${o.total.toLocaleString()}</span>
      </div>
    `).join('');
  }
}

function renderTopProductsAllTime() {
  const productSales = {};
  orders.forEach(o => {
    o.items.forEach(item => {
      if (!productSales[item.id]) productSales[item.id] = 0;
      productSales[item.id] += item.qty;
    });
  });

  const topProducts = Object.entries(productSales)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([id, qty]) => {
      const p = products.find(p => p.id === parseInt(id));
      return { name: p ? p.name : 'Unknown', qty };
    });

  const topEl = document.getElementById('topProducts');
  if (topProducts.length === 0) {
    topEl.innerHTML = '<p class="empty-state">No data yet</p>';
  } else {
    topEl.innerHTML = topProducts.map((p, i) => `
      <div class="top-product-item">
        <span class="rank">${i + 1}</span>
        <span class="name">${p.name}</span>
        <span class="qty">${p.qty} sold</span>
      </div>
    `).join('');
  }
}

function renderWeeklyRevenueChart(weekOrders) {
  destroyChart('weeklyRevenueChart');
  const { start: weekStart } = getWeekRange();
  const dailyRevenue = {};
  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  for (let i = 0; i < 7; i++) {
    const day = new Date(weekStart);
    day.setDate(weekStart.getDate() + i);
    const dayKey = day.toISOString().split('T')[0];
    dailyRevenue[dayKey] = 0;
  }

  weekOrders.forEach(o => {
    const dayKey = new Date(o.date).toISOString().split('T')[0];
    if (dailyRevenue[dayKey] !== undefined) {
      dailyRevenue[dayKey] += (o.status === 'paid' || o.status === 'processing' || o.status === 'shipped' || o.status === 'delivered') ? o.total : 0;
    }
  });

  const ctx = document.getElementById('weeklyRevenueChart').getContext('2d');
  chartInstances['weeklyRevenueChart'] = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dayLabels,
      datasets: [{
        label: 'Revenue (₦)',
        data: Object.values(dailyRevenue),
        borderColor: '#1A5C34',
        backgroundColor: 'rgba(26, 92, 52, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, ticks: { callback: v => '₦' + v.toLocaleString() } }
      }
    }
  });
}

function renderMonthlyRevenueChart(monthOrders) {
  destroyChart('monthlyRevenueChart');
  const { start: monthStart } = getMonthRange();
  const now = new Date();
  const weeksInMonth = [];
  const weeklyData = {};

  let currentWeekStart = new Date(monthStart);
  let weekNum = 1;

  while (currentWeekStart <= now) {
    const weekKey = `Week ${weekNum}`;
    weeksInMonth.push(weekKey);
    weeklyData[weekKey] = 0;
    currentWeekStart.setDate(currentWeekStart.getDate() + 7);
    weekNum++;
  }

  monthOrders.forEach(o => {
    const orderDate = new Date(o.date);
    const weekOfMonth = Math.ceil((orderDate.getDate() - monthStart.getDate() + 1) / 7);
    const weekKey = `Week ${weekOfMonth}`;
    if (weeklyData[weekKey] !== undefined) {
      weeklyData[weekKey] += (o.status === 'paid' || o.status === 'processing' || o.status === 'shipped' || o.status === 'delivered') ? o.total : 0;
    }
  });

  const ctx = document.getElementById('monthlyRevenueChart').getContext('2d');
  chartInstances['monthlyRevenueChart'] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: weeksInMonth,
      datasets: [{
        label: 'Revenue (₦)',
        data: Object.values(weeklyData),
        backgroundColor: '#2D7A4F',
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, ticks: { callback: v => '₦' + v.toLocaleString() } }
      }
    }
  });
}

function getProductSalesForPeriod(periodOrders) {
  const productSales = {};
  periodOrders.forEach(o => {
    o.items.forEach(item => {
      if (!productSales[item.id]) productSales[item.id] = 0;
      productSales[item.id] += item.qty;
    });
  });
  return productSales;
}

function renderWeeklyProductsChart(weekOrders) {
  destroyChart('weeklyProductsChart');
  const productSales = getProductSalesForPeriod(weekOrders);
  const topProducts = Object.entries(productSales)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const labels = topProducts.map(([id]) => {
    const p = products.find(p => p.id === parseInt(id));
    return p ? p.name : 'Unknown';
  });
  const data = topProducts.map(([, qty]) => qty);

  const ctx = document.getElementById('weeklyProductsChart').getContext('2d');
  chartInstances['weeklyProductsChart'] = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: ['#1A5C34', '#2D7A4F', '#4A9E6B', '#7BC89E', '#B0DEC4']
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom' } }
    }
  });
}

function renderMonthlyProductsChart(monthOrders) {
  destroyChart('monthlyProductsChart');
  const productSales = getProductSalesForPeriod(monthOrders);
  const topProducts = Object.entries(productSales)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const labels = topProducts.map(([id]) => {
    const p = products.find(p => p.id === parseInt(id));
    return p ? p.name : 'Unknown';
  });
  const data = topProducts.map(([, qty]) => qty);

  const ctx = document.getElementById('monthlyProductsChart').getContext('2d');
  chartInstances['monthlyProductsChart'] = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: ['#0F3D22', '#1A5C34', '#2D7A4F', '#4A9E6B', '#7BC89E']
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom' } }
    }
  });
}

function renderCategorySalesChart() {
  destroyChart('categorySalesChart');
  const categorySales = {};
  orders.forEach(o => {
    o.items.forEach(item => {
      const p = products.find(p => p.id === item.id);
      const cat = p ? p.category : 'unknown';
      if (!categorySales[cat]) categorySales[cat] = 0;
      categorySales[cat] += item.qty;
    });
  });

  const labels = Object.keys(categorySales);
  const data = Object.values(categorySales);
  const colors = ['#1A5C34', '#2D7A4F', '#4A9E6B', '#7BC89E', '#B0DEC4'];

  const ctx = document.getElementById('categorySalesChart').getContext('2d');
  chartInstances['categorySalesChart'] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Units Sold',
        data: data,
        backgroundColor: colors.slice(0, labels.length),
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });
}

function renderStatusChart() {
  destroyChart('statusChart');
  const statusCounts = { pending: 0, paid: 0, processing: 0, shipped: 0, delivered: 0 };
  orders.forEach(o => { if (statusCounts[o.status] !== undefined) statusCounts[o.status]++; });

  const ctx = document.getElementById('statusChart').getContext('2d');
  chartInstances['statusChart'] = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(statusCounts),
      datasets: [{
        data: Object.values(statusCounts),
        backgroundColor: ['#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#059669']
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom' } }
    }
  });
}

function renderWeekTopProduct(weekOrders) {
  const el = document.getElementById('weekTopProduct');
  const productSales = getProductSalesForPeriod(weekOrders);
  const topEntry = Object.entries(productSales).sort((a, b) => b[1] - a[1])[0];

  if (!topEntry) {
    el.innerHTML = '<p>No sales this week</p>';
    return;
  }

  const p = products.find(p => p.id === parseInt(topEntry[0]));
  const qty = topEntry[1];
  const revenue = weekOrders
    .filter(o => o.items.some(i => i.id === parseInt(topEntry[0])))
    .reduce((sum, o) => sum + (o.status === 'paid' || o.status === 'processing' || o.status === 'shipped' || o.status === 'delivered' ? o.total : 0), 0);

  el.innerHTML = `
    <div class="top-product-card">
      <div class="top-product-emoji">${p ? p.emoji : '📦'}</div>
      <div class="top-product-info">
        <div class="top-product-name">${p ? p.name : 'Unknown'}</div>
        <div class="top-product-stats">
          <span>${qty} units sold</span>
          <span>₦${revenue.toLocaleString()} revenue</span>
        </div>
      </div>
    </div>
  `;
}

function renderMonthTopProduct(monthOrders) {
  const el = document.getElementById('monthTopProduct');
  const productSales = getProductSalesForPeriod(monthOrders);
  const topEntry = Object.entries(productSales).sort((a, b) => b[1] - a[1])[0];

  if (!topEntry) {
    el.innerHTML = '<p>No sales this month</p>';
    return;
  }

  const p = products.find(p => p.id === parseInt(topEntry[0]));
  const qty = topEntry[1];
  const revenue = monthOrders
    .filter(o => o.items.some(i => i.id === parseInt(topEntry[0])))
    .reduce((sum, o) => sum + (o.status === 'paid' || o.status === 'processing' || o.status === 'shipped' || o.status === 'delivered' ? o.total : 0), 0);

  el.innerHTML = `
    <div class="top-product-card">
      <div class="top-product-emoji">${p ? p.emoji : '📦'}</div>
      <div class="top-product-info">
        <div class="top-product-name">${p ? p.name : 'Unknown'}</div>
        <div class="top-product-stats">
          <span>${qty} units sold</span>
          <span>₦${revenue.toLocaleString()} revenue</span>
        </div>
      </div>
    </div>
  `;
}

function renderSalesInsights(weekOrders, monthOrders, weekRevenue, monthRevenue) {
  const el = document.getElementById('salesInsights');
  if (orders.length === 0) {
    el.innerHTML = '<p>No sales data available yet</p>';
    return;
  }

  const avgOrderValue = weekOrders.length > 0
    ? weekRevenue / weekOrders.length
    : 0;

  const categorySales = {};
  weekOrders.forEach(o => {
    o.items.forEach(item => {
      const p = products.find(p => p.id === item.id);
      const cat = p ? p.category : 'unknown';
      if (!categorySales[cat]) categorySales[cat] = 0;
      categorySales[cat] += item.qty;
    });
  });

  const topCategory = Object.entries(categorySales).sort((a, b) => b[1] - a[1])[0];

  el.innerHTML = `
    <ul class="insights-list">
      <li>📊 Average order value this week: <strong>₦${avgOrderValue.toLocaleString(undefined, {maximumFractionDigits: 0})}</strong></li>
      <li>📈 Total orders this week: <strong>${weekOrders.length}</strong></li>
      <li>📈 Total orders this month: <strong>${monthOrders.length}</strong></li>
      <li>🏷️ Best category this week: <strong>${topCategory ? topCategory[0] : 'N/A'}</strong> (${topCategory ? topCategory[1] : 0} units)</li>
      <li>💰 Month's revenue: <strong>₦${monthRevenue.toLocaleString()}</strong></li>
    </ul>
  `;
}

function renderMarketingTips(weekOrders, monthOrders) {
  const el = document.getElementById('marketingTips');
  if (orders.length === 0) {
    el.innerHTML = '<p>Add more products and start getting sales to see marketing recommendations</p>';
    return;
  }

  const productSales = getProductSalesForPeriod(monthOrders);
  const sortedProducts = Object.entries(productSales).sort((a, b) => b[1] - a[1]);

  const tips = [];

  if (sortedProducts.length > 0) {
    const topProduct = products.find(p => p.id === parseInt(sortedProducts[0][0]));
    if (topProduct) {
      tips.push(`🎯 Promote <strong>${topProduct.name}</strong> more — it's your top seller!`);
    }
  }

  const lowSelling = products.filter(p => {
    const sales = productSales[p.id] || 0;
    return sales === 0;
  });

  if (lowSelling.length > 0) {
    tips.push(`📢 Consider discounts or bundles for: <strong>${lowSelling.slice(0, 2).map(p => p.name).join(', ')}</strong>`);
  }

  if (weekOrders.length < 5) {
    tips.push(`🚀 Boost social media ads — only <strong>${weekOrders.length}</strong> orders this week`);
  }

  const categorySales = {};
  monthOrders.forEach(o => {
    o.items.forEach(item => {
      const p = products.find(p => p.id === item.id);
      const cat = p ? p.category : 'unknown';
      if (!categorySales[cat]) categorySales[cat] = 0;
      categorySales[cat] += item.qty;
    });
  });

  const weakCategory = Object.entries(categorySales).sort((a, b) => a[1] - b[1])[0];
  if (weakCategory && weakCategory[1] < 5) {
    tips.push(`📉 <strong>${weakCategory[0]}</strong> category needs attention — lowest sales this month`);
  }

  el.innerHTML = tips.length > 0
    ? `<ul class="insights-list">${tips.map(t => `<li>${t}</li>`).join('')}</ul>`
    : '<p>Keep up the great work! 🎉</p>';
}

function renderOrders() {
  const search = document.getElementById('orderSearch').value.toLowerCase();
  const status = document.getElementById('orderFilter').value;
  
  let filtered = orders;
  if (status !== 'all') filtered = filtered.filter(o => o.status === status);
  if (search) filtered = filtered.filter(o => 
    o.id.toString().includes(search) || 
    o.customer.name.toLowerCase().includes(search) ||
    o.customer.email.toLowerCase().includes(search)
  );
  
  const tbody = document.getElementById('ordersTableBody');
  const noOrders = document.getElementById('noOrders');
  
  if (filtered.length === 0) {
    tbody.innerHTML = '';
    noOrders.style.display = 'block';
    return;
  }
  
  noOrders.style.display = 'none';
  tbody.innerHTML = filtered.slice().reverse().map(o => `
    <tr>
      <td class="order-id">#${o.id}</td>
      <td>${new Date(o.date).toLocaleDateString()}</td>
      <td class="customer-name">${o.customer.name}<br><small style="color:var(--gray-400)">${o.customer.email}</small></td>
      <td class="items-count">${o.items.length} item${o.items.length > 1 ? 's' : ''}</td>
      <td class="qty">${o.items.reduce((sum, item) => sum + item.qty, 0)}</td>
      <td class="price">${o.items.every((item, _, arr) => item.price === arr[0].price) ? '₦' + o.items[0].price.toLocaleString() : 'Varies'}</td>
      <td class="order-total">₦${o.total.toLocaleString()}</td>
      <td><span class="status-badge status-${o.status}" onclick="cycleStatus(${o.id})">${o.status}</span></td>
      <td class="action-btns">
        <button class="view-btn" onclick="viewOrder(${o.id})">View</button>
        <button class="status-btn" onclick="cycleStatus(${o.id})">Next</button>
        <button class="delete-btn" onclick="deleteOrder(${o.id})">Del</button>
      </td>
    </tr>
  `).join('');
}

function filterOrders() {
  renderOrders();
}

function viewOrder(id) {
  const o = orders.find(x => x.id === id);
  if (!o) return;
  
  const itemsHTML = o.items.map(item => `
    <div class="order-item-row">
      <span class="item-name">${item.name}</span>
      <span class="item-qty">×${item.qty}</span>
      <span class="item-price">₦${(item.price * item.qty).toLocaleString()}</span>
    </div>
  `).join('');
  
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
    <h2>Order #${o.id}</h2>
    <div class="order-detail-item"><span>Date</span><span>${new Date(o.date).toLocaleString()}</span></div>
    <div class="order-detail-item"><span>Status</span><span>${o.status}</span></div>
    <h3 style="margin:16px 0 8px;font-size:14px;">Items</h3>
    <div class="order-items-list">${itemsHTML}</div>
    <div class="order-detail-item"><span>Subtotal</span><span>₦${o.subtotal.toLocaleString()}</span></div>
    <div class="order-detail-item"><span>Delivery</span><span>₦${o.delivery.toLocaleString()}</span></div>
    <div class="order-detail-item" style="font-weight:700;font-size:16px"><span>Total</span><span>₦${o.total.toLocaleString()}</span></div>
    <h3 style="margin:16px 0 8px;font-size:14px;">Customer</h3>
    <div class="order-detail-item"><span>Name</span><span>${o.customer.name}</span></div>
    <div class="order-detail-item"><span>Email</span><span>${o.customer.email}</span></div>
    <div class="order-detail-item"><span>Phone</span><span>${o.customer.phone}</span></div>
    <div class="order-detail-item"><span>Address</span><span>${o.customer.address}</span></div>
    <div class="form-actions">
      <button class="btn-primary" onclick="closeModal();switchTab('orders')">Close</button>
    </div>
  `;
  
  document.getElementById('modalOverlay').classList.add('open');
}

function cycleStatus(id) {
  const o = orders.find(x => x.id === id);
  if (!o) return;
  
  const statuses = ['pending', 'paid', 'processing', 'shipped', 'delivered'];
  const idx = statuses.indexOf(o.status);
  o.status = idx < statuses.length - 1 ? statuses[idx + 1] : 'delivered';
  
  saveData();
  renderOrders();
  showToast(`Order #${id} marked as ${o.status}`, 'success');
}

function deleteOrder(id) {
  if (!confirm('Delete this order?')) return;
  orders = orders.filter(x => x.id !== id);
  saveData();
  renderOrders();
  showToast('Order deleted', 'info');
}

function renderProducts() {
  const search = document.getElementById('productSearch').value.toLowerCase();
  const category = document.getElementById('categoryFilter').value;
  
  let filtered = products;
  if (category !== 'all') filtered = filtered.filter(p => p.category === category);
  if (search) filtered = filtered.filter(p => 
    p.name.toLowerCase().includes(search) ||
    p.tags.some(t => t.toLowerCase().includes(search))
  );
  
  document.getElementById('productsSectionCount').textContent = filtered.length;
  
  const grid = document.getElementById('adminProductsGrid');
  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="product-card-header">
        <div class="product-card-img">${p.emoji}</div>
        <div class="product-card-info">
          <div class="product-card-name">${p.name}</div>
          <div class="product-card-category">${p.category}</div>
        </div>
      </div>
      <div class="product-card-body">
        <div class="product-card-price">₦${p.price.toLocaleString()}</div>
        <div class="product-card-stock">${p.stock || 100} in stock</div>
      </div>
      <div class="product-card-footer">
        <button class="edit-btn" onclick="editProduct(${p.id})">Edit</button>
        <button class="delete-btn" onclick="deleteProduct(${p.id})">Delete</button>
      </div>
    </div>
  `).join('');
}

function filterProducts() {
  renderProducts();
}

function addProduct() {
  const maxId = Math.max(...products.map(p => p.id));
  const newProduct = {
    id: maxId + 1,
    name: "New Product",
    short: "Product description",
    price: 2500,
    oldPrice: null,
    weight: "500g",
    category: "flour",
    goals: ["gut", "energy"],
    tags: ["Gluten-Free"],
    badge: null,
    emoji: "📦",
    img: null,
    bg: "#E8F5EE",
    packBg: "#1A5C34",
    packTop: "#0F3D22",
    rating: 4.5,
    reviews: 0,
    featured: false,
    newest: true,
    stock: 100
  };
  
  products.push(newProduct);
  saveData();
  document.getElementById('productCount').textContent = products.length;
  editProduct(newProduct.id);
}

function editProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  
  const goalsOptions = ['gut', 'diabetes', 'weight', 'women', 'men', 'immunity', 'energy', 'kids'];
  
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
    <h2>Edit Product</h2>
    <form onsubmit="event.preventDefault();saveProduct(${p.id})">
      <div class="form-group">
        <label>Name</label>
        <input type="text" id="editName" value="${p.name}"/>
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea id="editShort" rows="2">${p.short}</textarea>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Price (₦)</label>
          <input type="number" id="editPrice" value="${p.price}"/>
        </div>
        <div class="form-group">
          <label>Old Price (₦)</label>
          <input type="number" id="editOldPrice" value="${p.oldPrice || ''}"/>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Weight</label>
          <input type="text" id="editWeight" value="${p.weight}"/>
        </div>
        <div class="form-group">
          <label>Category</label>
          <select id="editCategory">
            <option value="flour" ${p.category === 'flour' ? 'selected' : ''}>Flour</option>
            <option value="snack" ${p.category === 'snack' ? 'selected' : ''}>Snack</option>
            <option value="cereal" ${p.category === 'cereal' ? 'selected' : ''}>Cereal</option>
            <option value="supplement" ${p.category === 'supplement' ? 'selected' : ''}>Supplement</option>
            <option value="bundle" ${p.category === 'bundle' ? 'selected' : ''}>Bundle</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Health Goals</label>
        <select id="editGoals" multiple style="height:80px">
          ${goalsOptions.map(g => `<option value="${g}" ${p.goals.includes(g) ? 'selected' : ''}>${g}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label>Tags (comma-separated)</label>
        <input type="text" id="editTags" value="${p.tags.join(', ')}"/>
      </div>
      <div class="form-group">
        <label>Emoji</label>
        <input type="text" id="editEmoji" value="${p.emoji}" style="width:60px"/>
      </div>
      <div class="form-group">
        <label>Product Image</label>
        <input type="file" id="editImage" accept="image/*"/>
        ${p.img ? `<p style="margin-top:4px;font-size:12px;color:var(--gray-400)">Current: ${p.img}</p>` : ''}
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Stock</label>
          <input type="number" id="editStock" value="${p.stock || 100}"/>
        </div>
        <div class="form-group">
          <label>Rating</label>
          <input type="number" step="0.1" max="5" id="editRating" value="${p.rating}"/>
        </div>
      </div>
      <div class="form-actions">
        <button type="button" class="btn-secondary" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn-primary">Save Product</button>
      </div>
    </form>
  `;
  
  document.getElementById('modalOverlay').classList.add('open');
}

function saveProduct(id) {
  const idx = products.findIndex(x => x.id === id);
  if (idx === -1) return;
  
  const nameVal = document.getElementById('editName').value.trim();
  const priceVal = parseInt(document.getElementById('editPrice').value);
  const oldPriceVal = document.getElementById('editOldPrice').value.trim();
  const categoryVal = document.getElementById('editCategory').value;
  const goalsSelect = document.getElementById('editGoals');
  let selectedGoals = [...goalsSelect.selectedOptions].map(o => o.value);
  
  // FORCE at least one goal if none selected
  if (selectedGoals.length === 0) {
    selectedGoals = ["gut", "energy"];
  }
  
  // Validate required fields
  if (!nameVal || !priceVal || priceVal <= 0 || !categoryVal) {
    showToast('Please fill in Name, Price, and Category', 'error');
    return;
  }
  
  // Preserve original values for fields not in the form
  const original = products[idx];
  
  const newProduct = {
    id: id,
    name: nameVal,
    short: document.getElementById('editShort').value.trim() || nameVal,
    price: priceVal,
    oldPrice: oldPriceVal ? parseInt(oldPriceVal) : null,
    weight: document.getElementById('editWeight').value.trim() || "500g",
    category: categoryVal,
    goals: selectedGoals,
    tags: document.getElementById('editTags').value.split(',').map(t => t.trim()).filter(t => t),
    badge: original.badge || null,
    emoji: document.getElementById('editEmoji').value.trim() || "📦",
    img: document.getElementById('editImage').files[0] ? document.getElementById('editImage').files[0].name : (original.img || null),
    bg: original.bg || "#E8F5EE",
    packBg: original.packBg || "#1A5C34",
    packTop: original.packTop || "#0F3D22",
    packBorder: original.packBorder || false,
    rating: parseFloat(document.getElementById('editRating').value) || 4.5,
    reviews: original.reviews || 0,
    featured: original.featured || false,
    newest: original.newest || false,
    stock: parseInt(document.getElementById('editStock').value) || 100
  };
  
  console.log('Saving product:', JSON.stringify(newProduct));
  
  products[idx] = newProduct;
  
  saveData();
  closeModal();
  document.getElementById('productCount').textContent = products.length;
  renderProducts();
  renderDashboard();
  showToast('Product saved!', 'success');
}

function deleteProduct(id) {
  if (!confirm('Delete this product?')) return;
  products = products.filter(x => x.id !== id);
  saveData();
  document.getElementById('productCount').textContent = products.length;
  renderProducts();
  renderDashboard();
  showToast('Product deleted', 'info');
}

function exportOrders() {
  let csv = 'Order ID,Date,Customer Name,Customer Email,Phone,Address,Items,Subtotal,Delivery,Total,Status\n';
  
  orders.forEach(o => {
    const items = o.items.map(i => `${i.name} x${i.qty}`).join('; ');
    csv += `${o.id},${o.date},${o.customer.name},${o.customer.email},${o.customer.phone},"${o.customer.address}","${items}",${o.subtotal},${o.delivery},${o.total},${o.status}\n`;
  });
  
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `tmj-orders-${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Orders exported!', 'success');
}

function clearAllData() {
  if (!confirm('Clear ALL orders and reset products? This cannot be undone!')) return;
  if (!confirm('Are you really sure?')) return;
  
  orders = [];
  products = getDefaultProducts();
  saveData();
  renderDashboard();
  renderOrders();
  renderProducts();
  showToast('All data cleared', 'info');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

/* Toast */
function showToast(msg, type = 'info') {
  const stack = document.getElementById('toastStack');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  t.innerHTML = `<span class="t-icon">${icons[type] || 'ℹ️'}</span>${msg}`;
  stack.appendChild(t);
  requestAnimationFrame(() => { requestAnimationFrame(() => t.classList.add('show')) });
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400) }, 3000);
}

function loadFromStorage() {
  const stored = localStorage.getItem('tmj_products');
  if (!stored) {
    showToast('No products in localStorage', 'info');
    return;
  }
  try {
    const parsed = JSON.parse(stored);
    products = parsed;
    saveData();
    document.getElementById('productCount').textContent = products.length;
    renderProducts();
    renderDashboard();
    showToast(`Reloaded ${products.length} products from storage`, 'success');
  } catch (e) {
    showToast('Error reading storage: ' + e.message, 'error');
  }
}

function viewProductData() {
  const stored = localStorage.getItem('tmj_products');
  if (!stored) {
    showToast('No products in localStorage', 'info');
    return;
  }
  try {
    const parsed = JSON.parse(stored);
    const first = parsed[0];
    const debugInfo = `
      <h2>Debug: Stored Products</h2>
      <p><strong>Total products:</strong> ${parsed.length}</p>
      <hr style="margin:12px 0">
      <p><strong>First product:</strong></p>
      <pre style="background:#f3f4f6;padding:12px;border-radius:6px;font-size:11px;overflow-x:auto">${JSON.stringify(first, null, 2)}</pre>
      <div class="form-actions">
        <button class="btn-primary" onclick="closeModal()">Close</button>
      </div>
    `;
    document.getElementById('modalBody').innerHTML = debugInfo;
    document.getElementById('modalOverlay').classList.add('open');
  } catch (e) {
    showToast('Error: ' + e.message, 'error');
  }
}

setInterval(updateTime, 1000);
updateTime();
document.getElementById('productCount').textContent = products.length;
renderDashboard();
renderOrders();
renderProducts();