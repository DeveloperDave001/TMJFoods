function lookupOrders() {
  const email = document.getElementById('emailInput').value.trim().toLowerCase();
  const ordersSection = document.getElementById('ordersSection');
  const ordersList = document.getElementById('ordersList');
  const emptyState = document.getElementById('emptyState');

  if (!email) {
    alert('Please enter your email address');
    return;
  }

  const orders = JSON.parse(localStorage.getItem('tmj_orders')) || [];
  const customerOrders = orders.filter(o => o.customer.email.toLowerCase() === email);

  ordersSection.style.display = 'none';
  emptyState.style.display = 'none';

  if (customerOrders.length === 0) {
    emptyState.style.display = 'block';
    return;
  }

  ordersSection.style.display = 'block';
  ordersList.innerHTML = customerOrders.slice().reverse().map(o => `
    <div class="order-card" onclick="toggleDetails(${o.id})">
      <div class="order-header">
        <div>
          <div class="order-id">#${o.id}</div>
          <div class="order-date">${new Date(o.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
        </div>
        <span class="order-status status-${o.status}">${o.status}</span>
      </div>
      <div class="order-items">${o.items.length} item${o.items.length > 1 ? 's' : ''}</div>
      <div class="order-total">₦${o.total.toLocaleString()}</div>
      <div class="order-details" id="details-${o.id}">
        <div class="detail-row">
          <span>Order ID</span>
          <span>#${o.id}</span>
        </div>
        <div class="detail-row">
          <span>Date</span>
          <span>${new Date(o.date).toLocaleString()}</span>
        </div>
        <div class="detail-row">
          <span>Status</span>
          <span>${o.status}</span>
        </div>
        <div class="detail-row">
          <span>Delivery Address</span>
          <span>${o.customer.address}</span>
        </div>
        <h4 style="margin:16px 0 8px;font-size:14px;color:#1F2937;">Items</h4>
        ${o.items.map(item => `
          <div class="item-row">
            <span>${item.name} × ${item.qty}</span>
            <span>₦${(item.price * item.qty).toLocaleString()}</span>
          </div>
        `).join('')}
        <div class="detail-row" style="margin-top:12px;">
          <span>Subtotal</span>
          <span>₦${o.subtotal.toLocaleString()}</span>
        </div>
        <div class="detail-row">
          <span>Delivery</span>
          <span>₦${o.delivery.toLocaleString()}</span>
        </div>
        <div class="detail-row" style="font-weight:700;font-size:16px;">
          <span>Total</span>
          <span>₦${o.total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleDetails(orderId) {
  const details = document.getElementById(`details-${orderId}`);
  details.classList.toggle('show');
}
