/* Cotel Hocholat e-commerce front end — vanilla JS, DOM manipulation only. No frameworks/libraries. */

const CART_KEY = "delicio-cart";

/* ---------- cart storage helpers ---------- */

function getCart() {
  const raw = localStorage.getItem(CART_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, qty) {
  qty = qty || 1;
  const cart = getCart();
  const existing = cart.find((line) => line.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty: qty });
  }
  saveCart(cart);
}

function removeFromCart(productId) {
  const cart = getCart().filter((line) => line.id !== productId);
  saveCart(cart);
}

function changeQty(productId, newQty) {
  const cart = getCart();
  const line = cart.find((l) => l.id === productId);
  if (!line) return;
  if (newQty < 1) {
    removeFromCart(productId);
    return;
  }
  line.qty = newQty;
  saveCart(cart);
}

function cartItemCount() {
  return getCart().reduce((sum, line) => sum + line.qty, 0);
}

function updateCartBadge() {
  const badge = document.getElementById("cart-count");
  if (badge) badge.textContent = cartItemCount();
}

/* ---------- shared helpers ---------- */

function formatPrice(amount) {
  return "£" + amount.toFixed(2);
}

function findProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}

/* ---------- navigation (mobile hamburger, replaces Bootstrap collapse) ---------- */

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("primary-nav");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

/* ---------- home page: featured products ---------- */

function renderFeatured() {
  const mount = document.getElementById("featured-products");
  if (!mount) return;
  const featured = PRODUCTS.filter((p) => p.featured);
  mount.innerHTML = featured.map(productCardHtml).join("");
}

/* ---------- products listing page ---------- */

function productCardHtml(product) {
  return `
    <article class="product-card">
      <a href="product-detail.html?id=${product.id}" class="product-card__link">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-card__body">
          <p class="product-card__category">${product.category}</p>
          <h3 class="product-card__name">${product.name}</h3>
          <p class="product-card__price">${formatPrice(product.price)}</p>
        </div>
      </a>
      <button type="button" class="btn btn--primary add-to-cart-btn" data-id="${product.id}">
        Add to Cart
      </button>
    </article>
  `;
}

function renderProductGrid(activeCategory) {
  const mount = document.getElementById("product-grid");
  if (!mount) return;
  const list = activeCategory && activeCategory !== "all"
    ? PRODUCTS.filter((p) => p.category === activeCategory)
    : PRODUCTS;
  mount.innerHTML = list.length
    ? list.map(productCardHtml).join("")
    : `<p class="empty-state">No products in this category yet.</p>`;
}

function initCategoryFilter() {
  const filterBar = document.getElementById("category-filter");
  if (!filterBar) return;

  const categories = ["all", ...new Set(PRODUCTS.map((p) => p.category))];
  filterBar.innerHTML = categories
    .map((cat, i) => `
      <button type="button" class="filter-btn ${i === 0 ? "is-active" : ""}" data-category="${cat}">
        ${cat === "all" ? "All Products" : cat}
      </button>
    `)
    .join("");

  filterBar.addEventListener("click", (event) => {
    const btn = event.target.closest(".filter-btn");
    if (!btn) return;
    filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderProductGrid(btn.dataset.category);
  });
}

/* ---------- delegated Add to Cart click handling (works on any page with cards) ---------- */

function initAddToCartDelegation() {
  document.addEventListener("click", (event) => {
    const btn = event.target.closest(".add-to-cart-btn");
    if (!btn) return;
    const id = Number(btn.dataset.id);
    const qtyInput = document.getElementById("detail-qty");
    const qty = qtyInput ? Number(qtyInput.value) || 1 : 1;
    addToCart(id, qty);

    const original = btn.textContent;
    btn.textContent = "Added!";
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
    }, 900);
  });
}

/* ---------- product detail page ---------- */

function renderProductDetail() {
  const mount = document.getElementById("product-detail");
  if (!mount) return;

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const product = findProduct(id);

  if (!product) {
    mount.innerHTML = `<p class="empty-state">We couldn't find that product. <a href="products.html">Back to all products</a>.</p>`;
    return;
  }

  document.title = `${product.name} — Cotel Hocholat`;

  mount.innerHTML = `
    <div class="product-detail__image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="product-detail__info">
      <p class="product-card__category">${product.category}</p>
      <h1>${product.name}</h1>
      <p class="product-detail__price">${formatPrice(product.price)}</p>
      <p class="product-detail__description">${product.description}</p>
      <div class="qty-control">
        <label for="detail-qty">Quantity</label>
        <button type="button" class="qty-btn" id="qty-minus" aria-label="Decrease quantity">&minus;</button>
        <input type="number" id="detail-qty" class="qty" value="1" min="1" inputmode="numeric">
        <button type="button" class="qty-btn" id="qty-plus" aria-label="Increase quantity">&plus;</button>
      </div>
      <button type="button" class="btn btn--primary add-to-cart-btn" data-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;

  const qtyInput = document.getElementById("detail-qty");
  document.getElementById("qty-minus").addEventListener("click", () => {
    qtyInput.value = Math.max(1, Number(qtyInput.value) - 1);
  });
  document.getElementById("qty-plus").addEventListener("click", () => {
    qtyInput.value = Number(qtyInput.value) + 1;
  });
}

/* ---------- cart page ---------- */

function cartRowHtml(product, qty) {
  const lineTotal = product.price * qty;
  return `
    <tr data-id="${product.id}">
      <td class="cart-table__image">
        <img src="${product.image}" alt="${product.name}">
      </td>
      <td class="cart-table__name">
        <a href="product-detail.html?id=${product.id}">${product.name}</a>
      </td>
      <td>${formatPrice(product.price)}</td>
      <td>
        <div class="qty-control">
          <button type="button" class="qty-btn cart-qty-minus" aria-label="Decrease quantity of ${product.name}">&minus;</button>
          <input type="number" class="qty cart-qty-input" value="${qty}" min="1" inputmode="numeric" aria-label="Quantity of ${product.name}">
          <button type="button" class="qty-btn cart-qty-plus" aria-label="Increase quantity of ${product.name}">&plus;</button>
        </div>
      </td>
      <td class="cart-table__line-total">${formatPrice(lineTotal)}</td>
      <td>
        <button type="button" class="cart-remove-btn" aria-label="Remove ${product.name} from cart">&times;</button>
      </td>
    </tr>
  `;
}

function renderCart() {
  const mount = document.getElementById("cart-items");
  if (!mount) return;

  const cart = getCart();
  const emptyState = document.getElementById("cart-empty");
  const cartTable = document.getElementById("cart-table-wrapper");
  const summary = document.getElementById("cart-summary");

  if (cart.length === 0) {
    if (emptyState) emptyState.hidden = false;
    if (cartTable) cartTable.hidden = true;
    if (summary) summary.hidden = true;
    return;
  }

  if (emptyState) emptyState.hidden = true;
  if (cartTable) cartTable.hidden = false;
  if (summary) summary.hidden = false;

  let subtotal = 0;
  mount.innerHTML = cart
    .map((line) => {
      const product = findProduct(line.id);
      if (!product) return "";
      subtotal += product.price * line.qty;
      return cartRowHtml(product, line.qty);
    })
    .join("");

  const subtotalEl = document.getElementById("cart-subtotal");
  const totalEl = document.getElementById("cart-total");
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (totalEl) totalEl.textContent = formatPrice(subtotal);
}

function initCartInteractions() {
  const mount = document.getElementById("cart-items");
  if (!mount) return;

  mount.addEventListener("click", (event) => {
    const row = event.target.closest("tr[data-id]");
    if (!row) return;
    const id = Number(row.dataset.id);
    const cart = getCart();
    const line = cart.find((l) => l.id === id);
    if (!line) return;

    if (event.target.closest(".cart-remove-btn")) {
      removeFromCart(id);
      renderCart();
    } else if (event.target.closest(".cart-qty-plus")) {
      changeQty(id, line.qty + 1);
      renderCart();
    } else if (event.target.closest(".cart-qty-minus")) {
      changeQty(id, line.qty - 1);
      renderCart();
    }
  });

  mount.addEventListener("change", (event) => {
    const input = event.target.closest(".cart-qty-input");
    if (!input) return;
    const row = event.target.closest("tr[data-id]");
    const id = Number(row.dataset.id);
    const newQty = Math.max(1, Number(input.value) || 1);
    changeQty(id, newQty);
    renderCart();
  });
}

/* ---------- contact form validation ---------- */

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const successMessage = document.getElementById("form-success");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(field, message) {
    const errorEl = document.getElementById(`${field.id}-error`);
    if (errorEl) errorEl.textContent = message;
    field.setAttribute("aria-invalid", message ? "true" : "false");
  }

  function validateField(field) {
    if (field.hasAttribute("required") && field.value.trim() === "") {
      setError(field, `${field.dataset.label || "This field"} is required.`);
      return false;
    }
    if (field.type === "email" && !emailPattern.test(field.value.trim())) {
      setError(field, "Enter a valid email address.");
      return false;
    }
    setError(field, "");
    return true;
  }

  form.querySelectorAll("input, textarea").forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fields = Array.from(form.querySelectorAll("input, textarea"));
    const allValid = fields.map(validateField).every(Boolean);

    if (allValid) {
      form.hidden = true;
      if (successMessage) {
        successMessage.hidden = false;
        successMessage.focus();
      }
    }
  });
}

/* ---------- boot ---------- */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  updateCartBadge();
  initAddToCartDelegation();
  renderFeatured();
  initCategoryFilter();
  renderProductGrid("all");
  renderProductDetail();
  renderCart();
  initCartInteractions();
  initContactForm();
});
