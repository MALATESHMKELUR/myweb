// cart.js

// Retrieve cart data from local storage
function getCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
}

// Save cart data to local storage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add item to cart
function addToCart(productName, productPrice) {
    const cart = getCart();
    const existingProductIndex = cart.findIndex(item => item.name === productName);

    if (existingProductIndex >= 0) {
        // Update quantity if item already in cart
        cart[existingProductIndex].quantity += 1;
    } else {
        // Add new item to cart
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    saveCart(cart);
    updateCartDisplay();
}

// Remove item from cart
function removeFromCart(productName) {
    let cart = getCart();
    cart = cart.filter(item => item.name !== productName);
    saveCart(cart);
    updateCartDisplay();
}

// Update quantity of an item in the cart
function updateQuantity(productName, quantity) {
    const cart = getCart();
    const productIndex = cart.findIndex(item => item.name === productName);

    if (productIndex >= 0 && quantity > 0) {
        cart[productIndex].quantity = quantity;
    } else if (quantity <= 0) {
        // Remove item if quantity is zero or negative
        cart.splice(productIndex, 1);
    }

    saveCart(cart);
    updateCartDisplay();
}

// Calculate total price
function calculateTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Update the cart display
function updateCartDisplay() {
    const cart = getCart();
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItemsContainer.innerHTML = ''; // Clear existing items
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <p>${item.name} - ₹${item.price} x ${item.quantity}</p>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
            <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.name}', this.value)">
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    cartTotal.textContent = calculateTotal().toFixed(2);
}

// Initialize cart display on page load
document.addEventListener('DOMContentLoaded', updateCartDisplay);

// Example function call for testing (can be triggered by UI events)
function testCart() {
    addToCart('Stylish Glasses 1', 1000);
    addToCart('Stylish Glasses 2', 1200);
    removeFromCart('Stylish Glasses 1');
}

// Uncomment below line to run testCart function on page load for testing
// testCart();
