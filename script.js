// Get elements
const shopLink = document.getElementById('shopLink');
const shopMenu = document.getElementById('shopMenu');
const phonesLink = document.getElementById('phonesLink');
const phoneBrands = document.getElementById('phoneBrands');

// Show the shop menu when the "Shop" navbar link is clicked
shopLink.addEventListener('click', () => {
  shopMenu.classList.toggle('active');
});

// Show phone brands when "Phones" is clicked
phonesLink.addEventListener('click', () => {
  phoneBrands.style.display = 'block';
  phoneBrands.classList.add('active');
});

// Optional: Close the menu when clicking outside of the shop menu
document.addEventListener('click', function (e) {
  if (!shopMenu.contains(e.target) && !shopLink.contains(e.target)) {
    shopMenu.classList.remove('active');
    phoneBrands.style.display = 'none'; // Hide phone brands when closing menu
  }
});
// Initialize cart as an empty array
let cart = []; 

// Get the DOM elements for cart count and cart details
let cartCount = document.getElementById('cartCount');
let cartSidebar = document.getElementById('cartSidebar');
let closeCart = document.getElementById('closeCart');
let cartItems = document.getElementById('cartItems');
let totalPrice = document.getElementById('totalPrice');

// Function to open the cart sidebar
document.getElementById('cartIcon').onclick = function() {
  cartSidebar.style.display = 'block';
  updateCart();
}

// Function to close the cart sidebar
closeCart.onclick = function() {
  cartSidebar.style.display = 'none';
}

// Function to add an item to the cart
function addToCart(product) {
  // Add the product to the cart array
  cart.push(product);
  updateCart(); // Update the cart display
}

// Function to update the cart sidebar
function updateCart() {
  // Check if the cart is empty
  if (cart.length === 0) {
    cartItems.innerHTML = '<p>No items in the cart</p>';
  } else {
    cartItems.innerHTML = ''; // Clear the previous cart items
    let total = 0;
    cart.forEach(item => {
      // Display each product in the cart
      let cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <p>${item.name} - $${item.price}</p>
        <button onclick="removeFromCart('${item.name}')">Remove</button>
      `;
      cartItems.appendChild(cartItem);

      total += item.price; // Add the price to the total
    });
    totalPrice.innerText = `$${total}`; // Update the total price
    cartCount.innerText = cart.length; // Update the cart item count
  }
}

// Function to remove an item from the cart
function removeFromCart(itemName) {
  // Filter the cart array to remove the item
  cart = cart.filter(item => item.name !== itemName);
  updateCart(); // Update the cart after removal
}
