// DOM elements
const homeLink = document.getElementById('homeLink');
const homeNavLink = document.getElementById('homeNavLink');
const brandsLink = document.getElementById('brandsLink');
const homeScreen = document.getElementById('homeScreen');
const miceScreen = document.getElementById('miceScreen');
const keyboardsScreen = document.getElementById('keyboardsScreen');
const headsetsScreen = document.getElementById('headsetsScreen');
const monitorsScreen = document.getElementById('monitorsScreen');
const speakersScreen = document.getElementById('speakersScreen');
const mousepadsScreen = document.getElementById('mousepadsScreen');
const productDetailScreen = document.getElementById('productDetailScreen');
const cartScreen = document.getElementById('cartScreen');
const checkoutScreen = document.getElementById('checkoutScreen');
const confirmationScreen = document.getElementById('confirmationScreen');
const cartIcon = document.getElementById('cartIcon');
const cartCount = document.getElementById('cartCount');
const shopNowBtn = document.getElementById('shopNowBtn');
const categoryLinks = document.querySelectorAll('.dropdown-content a');
const backBtn = document.getElementById('backBtn');
const backToProducts = document.getElementById('backToProducts');
const backToCart = document.getElementById('backToCart');
const checkoutBtn = document.getElementById('checkoutBtn');
const placeOrderBtn = document.getElementById('placeOrderBtn');
const continueShoppingBtn = document.getElementById('continueShoppingBtn');
const paymentMethods = document.querySelectorAll('.payment-method');
// Brand logo mapping
const brandLogos = {
    "Logitech": "img/Logitech.png",
    "Razer": "img/razer.png",
    "SteelSeries": "img/steelseries.png",
    "Asus": "img/asus.png",
    "MSI": "img/msi.png",
    "Gigabyte": "img/gigabyte.png",
    "Samsung": "img/samsung.png",
    "PlayStation": "img/playstation.png",
    "Xbox": "img/xbox.png",
    "HyperX": "img/hyperx.png"
};

// Navigation state
let currentScreen = 'home';
let lastScreen = 'home';
let cart = [];
let selectedPaymentMethod = 'credit';

// Function to switch screens
function switchScreen(screen, brandName = null) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
    });
    
    // Update navigation highlights
    homeNavLink.classList.remove('active');
    brandsLink.classList.remove('active');
    
    // Show selected screen
    if (screen === 'home') {
        homeScreen.classList.add('active');
        homeNavLink.classList.add('active');
        renderProducts('featured', '#featuredProducts');
    } else if (screen === 'mice') {
        miceScreen.classList.add('active');
        renderProducts('mice', '#miceProducts');
    } else if (screen === 'keyboards') {
        keyboardsScreen.classList.add('active');
        renderProducts('keyboards', '#keyboardsProducts');
    } else if (screen === 'headsets') {
        headsetsScreen.classList.add('active');
        renderProducts('headsets', '#headsetsProducts');
    } else if (screen === 'monitors') {
        monitorsScreen.classList.add('active');
        renderProducts('monitors', '#monitorsProducts');
    } else if (screen === 'speakers') {
        speakersScreen.classList.add('active');
        renderProducts('speakers', '#speakersProducts');
    } else if (screen === 'mousepads') {
        mousepadsScreen.classList.add('active');
        renderProducts('mousepads', '#mousepadsProducts');
    } else if (screen === 'productDetail') {
        productDetailScreen.classList.add('active');
    } else if (screen === 'cart') {
        cartScreen.classList.add('active');
        renderCartScreen();
    } else if (screen === 'checkout') {
        checkoutScreen.classList.add('active');
        renderCheckoutScreen();
    } else if (screen === 'confirmation') {
        confirmationScreen.classList.add('active');
    }
      else if (screen === 'controllers') {
    const screenEl = document.getElementById('controllersScreen');
    screenEl.classList.add('active');
    renderProducts('controllers', '#controllersProducts');
    }
      else if (screen === 'brands') {
      document.getElementById('brandsScreen').classList.add('active');
      brandsLink.classList.add('active');     
    } 
     else if (screen === 'brandProducts') {
        brandProductsScreen.classList.add('active');
        if (brandName) {
            renderBrandProducts(brandName);
        }
    }
   

    
    currentScreen = screen;
    
    // Scroll to top
    window.scrollTo(0, 0);
}



// Function to render products for a category
function renderProducts(category, containerId) {
     console.log(`Rendering ${category} products in ${containerId}`);

    const container = document.querySelector(containerId);
     if (!container) {
        console.error(`Container ${containerId} not found!`);
        return;
    }
   
     console.log("All products:", products.map(p => ({
        id: p.id, 
        name: p.name, 
        category: p.category
    })));
    
    
     const filteredProducts = category === 'featured' 
        ? products.filter(product => product.id <= 13)
        : products.filter(product => {
            const match = product.category && 
                product.category.toLowerCase() === category.toLowerCase();
            console.log(`Checking Product ${product.id}:(${product.category}) vs ${category} =  ${match}`);
            return match;
              });

                console.log(`Found ${filteredProducts.length} products for ${category}`); // Debug log
    
    if (filteredProducts.length === 0) {
        container.innerHTML = `
            <div class="no-products">
                <i class="fas fa-gamepad"></i>
                <h3>No controllers found</h3>
                <p>We couldn't find any products in this category.</p>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-id', product.id);
        
        productCard.innerHTML = `
            <div class="product-img">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <img src="${product.images[0] || 'img/products/default-product.png'}" 
                alt="${product.name}"  loading="lazy"
                 onerror="this.src='img/products/default-product.png'">>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description.substring(0, 100)}...</p>
                <div class="price">
                    <span>$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(productCard);
    });

    // Then call it after rendering:
     setupProductCardEvents(containerId);


function setupProductCardEvents(containerSelector) {
    // 2. Use event delegation for better performance
    document.querySelector(containerSelector).addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if (!card) return;
        
        // 3. More precise add-to-cart button detection
        if (e.target.closest('.add-to-cart')) {
            e.stopPropagation();
            const productId = card.getAttribute('data-id');
            addToCart(productId, 1);
            return;
        }
        
        // 4. Handle product card click
        const productId = card.getAttribute('data-id');
        showProductDetail(productId);
    });
}

    
    // Add event listeners to add to cart buttons
    const addToCartButtons = document.querySelectorAll(`${containerId} .add-to-cart`);
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering the product card click
            const card = e.target.closest('.product-card');
            const productId = card.getAttribute('data-id');
            addToCart(productId, 1);
        });
    });
}

// Function to show product details
function showProductDetail(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) return;

     // Set main image with fallback
    const mainImg = document.getElementById('detailMainImage');
    mainImg.src = product.images[0] || 'img/products/default-product.png';
    mainImg.onerror = function() {
        this.src = 'img/products/default-product.png';
    };

    // Set thumbnail (since you're using just one image now)
    const thumb = document.getElementById('thumb1');
    thumb.src = product.images[0] || 'img/products/default-product.png';
    
    // Set last screen before showing detail
    lastScreen = currentScreen;
    
    // Update product detail screen
    document.getElementById('detailTitle').textContent = product.name;
    document.getElementById('detailPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('detailDescription').textContent = product.description;
    
    // Set badge
    const detailBadge = document.getElementById('detailBadge');
    if (product.badge) {
        detailBadge.textContent = product.badge;
        detailBadge.style.display = 'inline-block';
    } else {
        detailBadge.style.display = 'none';
    }
    
    // Set features
    const featuresList = document.getElementById('featuresList');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check-circle"></i> ${feature}`;
        featuresList.appendChild(li);
    });
    
    // Set specs
    document.getElementById('specBrand').textContent = product.specs.brand;
    document.getElementById('specModel').textContent = product.specs.model;
    document.getElementById('specConnectivity').textContent = product.specs.connectivity;
    document.getElementById('specDimensions').textContent = product.specs.dimensions;
    document.getElementById('specWeight').textContent = product.specs.weight;
    
    // Set images
    document.getElementById('detailMainImage').src = product.images;
    document.getElementById('thumb1').src = product.images;
    
    
    // Store product ID for adding to cart
    document.getElementById('detailAddToCart').setAttribute('data-id', product.id);
    
    // Switch to product detail screen
    switchScreen('productDetail');
}

// Function to add to cart
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id == productId);
    if (!product) return;
    
    // Check if product is already in cart
    const existingItem = cart.find(item => item.id == productId);
    
    if (existingItem) {
        // Update quantity
        existingItem.quantity += quantity;
    } else {
        // Add new item
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity: quantity
        });
    }
    
    // Update cart count
    updateCartCount();
    
    // Show success notification
    showNotification(`${quantity} ${product.name} added to cart!`);
    
    // If we're on the cart screen, update it
    if (currentScreen === 'cart') {
        renderCartScreen();
    }
}

// Function to remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id != productId);
    updateCartCount();
    renderCartScreen();
    showNotification('Item removed from cart');
}

// Function to update item quantity in cart
function updateCartItemQuantity(productId, newQuantity) {
    if (newQuantity < 1) return;
    
    const item = cart.find(item => item.id == productId);
    if (item) {
        item.quantity = parseInt(newQuantity);
        renderCartScreen();
    }
}

// Function to calculate cart totals
function calculateCartTotals() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 4.99;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;
    
    return {
        subtotal: subtotal.toFixed(2),
        shipping: shipping.toFixed(2),
        tax: tax.toFixed(2),
        total: total.toFixed(2)
    };
}

// Function to update cart count in header
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Function to render cart screen
function renderCartScreen() {
    const cartItemsList = document.getElementById('cartItemsList');
    
    if (cart.length === 0) {
        cartItemsList.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Looks like you haven't added anything to your cart yet</p>
                <button class="btn" id="emptyCartShopBtn">Continue Shopping</button>
            </div>
        `;
        
        document.getElementById('emptyCartShopBtn').addEventListener('click', () => {
            switchScreen('home');
        });
        
        // Update summary to show $0.00
        document.getElementById('cartSubtotal').textContent = '$0.00';
        document.getElementById('cartShipping').textContent = '$0.00';
        document.getElementById('cartTax').textContent = '$0.00';
        document.getElementById('cartTotal').textContent = '$0.00';
        
        return;
    }
    
    // Render cart items
    cartItemsList.innerHTML = '';
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.image || 'img/products/default-product.png'}" alt="${item.name}
                onerror="this.src='img/products/default-product.png'">
            </div>
            <div class="cart-item-info">
                <h3 class="cart-item-title">${item.name}</h3>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-actions">
                    <div class="item-quantity">
                        <button class="item-quantity-btn minus" data-id="${item.id}">-</button>
                        <input type="number" class="item-quantity-input" value="${item.quantity}" min="1" max="10" data-id="${item.id}">
                        <button class="item-quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                    <div class="remove-item" data-id="${item.id}">Remove</div>
                </div>
            </div>
        `;
        cartItemsList.appendChild(cartItemElement);
    });
    
    // Add event listeners for quantity changes
    document.querySelectorAll('.item-quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            const input = document.querySelector(`.item-quantity-input[data-id="${id}"]`);
            const newQuantity = parseInt(input.value) - 1;
            if (newQuantity >= 1) {
                input.value = newQuantity;
                updateCartItemQuantity(id, newQuantity);
            }
        });
    });
    
    document.querySelectorAll('.item-quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            const input = document.querySelector(`.item-quantity-input[data-id="${id}"]`);
            const newQuantity = parseInt(input.value) + 1;
            input.value = newQuantity;
            updateCartItemQuantity(id, newQuantity);
        });
    });
    
    document.querySelectorAll('.item-quantity-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const id = e.target.getAttribute('data-id');
            updateCartItemQuantity(id, parseInt(e.target.value));
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            removeFromCart(id);
        });
    });
    
    // Update cart summary
    const totals = calculateCartTotals();
    document.getElementById('cartSubtotal').textContent = `$${totals.subtotal}`;
    document.getElementById('cartShipping').textContent = `$${totals.shipping}`;
    document.getElementById('cartTax').textContent = `$${totals.tax}`;
    document.getElementById('cartTotal').textContent = `$${totals.total}`;
}

// Function to render checkout screen
function renderCheckoutScreen() {
    // Render order summary
    const checkoutItems = document.getElementById('checkoutItems');
    checkoutItems.innerHTML = '';
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'summary-item';
        itemElement.innerHTML = `
            <div class="item-info">
                <div class="item-img">
                    <img src="${item.image || 'img/products/default-product.png'}" 
                    alt="${item.name}  onerror="this.src='img/products/default-product.png'">
                </div>
                <div class="item-details">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">$${item.price.toFixed(2)} × ${item.quantity}</div>
                </div>
            </div>
            <div class="item-total">$${(item.price * item.quantity).toFixed(2)}</div>
        `;
        checkoutItems.appendChild(itemElement);
    });
    
    // Update order total
    const totals = calculateCartTotals();
    document.getElementById('checkoutTotal').textContent = `$${totals.total}`;
    
    // Set current date for order confirmation
    const now = new Date();
    document.getElementById('orderDate').textContent = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Generate random order number
    document.getElementById('orderNumber').textContent = `#TGP-${now.getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    document.getElementById('orderTotal').textContent = `$${totals.total}`;
}

// Function to show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.innerHTML = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#4ecca3';
    notification.style.color = 'white';
    notification.style.padding = '15px 25px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    notification.style.zIndex = '1000';
    notification.style.transform = 'translateY(100px)';
    notification.style.opacity = '0';
    notification.style.transition = 'all 0.4s ease';
    
    document.body.appendChild(notification);
    
    // Animate notification in
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    }, 10);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 400);
    }, 3000);
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    switchScreen('home');
    
    // Event listeners
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        switchScreen('home');
    });
    
    homeNavLink.addEventListener('click', (e) => {
        e.preventDefault();
        switchScreen('home');
    });
    
    brandsLink.addEventListener('click', (e) => {
    e.preventDefault();
    switchScreen('brands');
});

    
    shopNowBtn.addEventListener('click', () => {
        switchScreen('home');
    });
    
    // Category link click
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            switchScreen(category);
        });
    });
    
    // Back button
    backBtn.addEventListener('click', () => {
        switchScreen(lastScreen);
    });
    
    // Cart icon click
    cartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        switchScreen('cart');
    });
    
    // Thumbnail click
    document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            // Update main image
            const mainImage = document.getElementById('detailMainImage');
            const thumbImg = thumb.querySelector('img');
            mainImage.src = thumbImg.src;
            
            // Update active thumbnail
            document.querySelectorAll('.thumbnail').forEach(t => {
                t.classList.remove('active');
            });
            thumb.classList.add('active');
        });
    });
    
    // Quantity buttons in detail view
    document.querySelector('.quantity-btn.plus').addEventListener('click', () => {
        const input = document.querySelector('.quantity-input');
        if (input.value < 10) input.value = parseInt(input.value) + 1;
    });
    
    document.querySelector('.quantity-btn.minus').addEventListener('click', () => {
        const input = document.querySelector('.quantity-input');
        if (input.value > 1) input.value = parseInt(input.value) - 1;
    });
    
    // Add to cart from product detail
    document.getElementById('detailAddToCart').addEventListener('click', () => {
        const productId = document.getElementById('detailAddToCart').getAttribute('data-id');
        const quantity = parseInt(document.querySelector('.quantity-input').value);
        addToCart(productId, quantity);
    });
    
    // Back to products from cart
    backToProducts.addEventListener('click', () => {
        switchScreen('home');
    });
    
    // Back to cart from checkout
    backToCart.addEventListener('click', () => {
        switchScreen('cart');
    });
    
    // Proceed to checkout
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('Your cart is empty!');
            return;
        }
        switchScreen('checkout');
    });
    
    // Place order
    placeOrderBtn.addEventListener('click', () => {
        // Simple form validation
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const zip = document.getElementById('zip').value;
        const country = document.getElementById('country').value;
        
        if (!firstName || !lastName || !email || !address || !city || !zip || !country) {
            showNotification('Please fill in all required fields');
            return;
        }
        
        // Set payment method for confirmation
        document.getElementById('paymentMethod').textContent = 
            selectedPaymentMethod === 'credit' ? 'Credit Card' : 'PayPal';
        
        // Clear cart
        cart = [];
        updateCartCount();
        
        // Show confirmation screen
        switchScreen('confirmation');
    });
    
    // Continue shopping from confirmation
    continueShoppingBtn.addEventListener('click', () => {
        switchScreen('home');
    });
    
    // Payment method selection
    paymentMethods.forEach(method => {
        method.addEventListener('click', () => {
            // Remove active class from all
            paymentMethods.forEach(m => m.classList.remove('active'));
            // Add active class to clicked
            method.classList.add('active');
            
            // Update selected payment method
            selectedPaymentMethod = method.getAttribute('data-method');
            
            // Show corresponding payment details
            document.getElementById('creditCardDetails').style.display = 
                selectedPaymentMethod === 'credit' ? 'block' : 'none';
            document.getElementById('paypalDetails').style.display = 
                selectedPaymentMethod === 'paypal' ? 'block' : 'none';
        });
    });
});



    /* Login and Signup Modals */
    let currentUser = null;

const loginLink = document.getElementById('loginLink');
const signupLink = document.getElementById('signupLink');
const logoutLink = document.getElementById('logoutLink');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');

loginLink.onclick = () => {
    loginModal.style.display = 'flex';
};

signupLink.onclick = () => {
    signupModal.style.display = 'flex';
};

function closeModal() {
    loginModal.style.display = 'none';
    signupModal.style.display = 'none';
}

// Simulated login
document.getElementById('submitLogin').onclick = () => {
    const user = document.getElementById('loginUsername').value;
    currentUser = user;
    updateAuthUI();
    closeModal();
};

// Simulated signup
document.getElementById('submitSignup').onclick = () => {
    const user = document.getElementById('signupUsername').value;
    currentUser = user;
    updateAuthUI();
    closeModal();
};

// Logout
logoutLink.onclick = () => {
    currentUser = null;
    updateAuthUI();
};

// Update header based on auth state
function updateAuthUI() {
    if (currentUser) {
        loginLink.style.display = 'none';
        signupLink.style.display = 'none';
        logoutLink.style.display = 'inline';
    } else {
        loginLink.style.display = 'inline';
        signupLink.style.display = 'inline';
        logoutLink.style.display = 'none';
    }
}

// Initial state
updateAuthUI();

// Function to render products by brand
function renderBrandProducts(brandName) {
    const brandProductsGrid = document.getElementById('brandProductsGrid');
    brandProductsGrid.innerHTML = '';
    
    // Update the brand title
    document.getElementById('brandTitle').textContent = `${brandName} Products`;
    const brandLogo = document.getElementById('brandLogo');
      const brandLogoContainer = document.querySelector('.brand-logo-container');

     // Set the brand logo if available
    if (brandLogos[brandName]) {
        brandLogo.src = brandLogos[brandName];
        brandLogo.onerror = function() {
            this.style.display = 'none';
            brandLogoContainer.style.display = 'none';
        };
        brandLogo.style.display = 'block';
        // Add white background container for the logo
        brandLogo.parentElement.style.display = 'flex'; // Show the container
    } else {
        brandLogo.style.display = 'none';
        brandLogo.parentElement.style.display = 'none'; // Hide the container
    }
    
    // Filter products by brand
    const filteredProducts = products.filter(product => {
        return product.specs && 
               product.specs.brand && 
               product.specs.brand.toLowerCase() === brandName.toLowerCase();
    });
    
    if (filteredProducts.length === 0) {
        brandProductsGrid.innerHTML = '<p>No products available for this brand.</p>';
        return;
    }
    
    // Render each product
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-id', product.id);
        
        productCard.innerHTML = `
            <div class="product-img">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <img src="${product.images[0] || 'img/products/default-product.png'}" 
                alt="${product.name}"
                    loading="lazy"
                     onerror="this..onerror=null;this.src='img/products/default-product.png'">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description.substring(0, 100)}...</p>
                <div class="price">
                    <span>$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        
        brandProductsGrid.appendChild(productCard);
    });

    // Setup click events for product cards
     setupBrandProductCardEvents();
    
    // Add click event to product cards
    const productCards = document.querySelectorAll('#brandProductsGrid .product-card');
    productCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.add-to-cart')) return;
            const productId = card.getAttribute('data-id');
            showProductDetail(productId);
        });
    });
    
    // Add event to add to cart buttons
    const addToCartButtons = document.querySelectorAll('#brandProductsGrid .add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = e.target.closest('.product-card');
            const productId = card.getAttribute('data-id');
            addToCart(productId, 1);
        });
    });

   
}

// Setup event handlers for brand product cards
function setupBrandProductCardEvents() {
    const container = document.getElementById('brandProductsGrid');
    
    container.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if (!card) return;
        
        // Handle add to cart button click
        if (e.target.closest('.add-to-cart')) {
            e.stopPropagation();
            const productId = card.getAttribute('data-id');
            addToCart(productId, 1);
            return;
        }
        
        // Handle product card click (show details)
        const productId = card.getAttribute('data-id');
        showProductDetail(productId);
    });
}

// Inside DOMContentLoaded event listener
const brandCards = document.querySelectorAll('.brand-card');
brandCards.forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault();
        const brandName = card.getAttribute('data-brand');
        console.log(`Loading products for brand: ${brandName}`);
        console.log(`Logo path: ${brandLogos[brandName]}`);
        switchScreen('brandProducts', brandName);
    });
});


function setupBrandProductCardEvents() {
    document.getElementById('brandProductsGrid').addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if (!card) return;
        
        // Handle add to cart button
        if (e.target.closest('.add-to-cart')) {
            e.stopPropagation();
            const productId = card.getAttribute('data-id');
            addToCart(productId, 1);
            return;
        }
        
        // Handle product click
        const productId = card.getAttribute('data-id');
        showProductDetail(productId);
    });
}

// Mobile menu toggle
const mobileToggle = document.getElementById('mobileMenuToggle');
const nav = document.getElementById('mainNav');

mobileToggle?.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileToggle.innerHTML = nav.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            nav.classList.remove('active');
            mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Mobile dropdowns
document.querySelectorAll('.dropdown > a').forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.parentElement.classList.toggle('active');
            
            // Close other dropdowns
            document.querySelectorAll('.dropdown').forEach(otherDropdown => {
                if (otherDropdown !== this.parentElement) {
                    otherDropdown.classList.remove('active');
                }
            });
        }
    });
});

// Make product cards more touch-friendly
function setupProductCardEvents(containerSelector) {
    document.querySelector(containerSelector).addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if (!card) return;
        
        // Handle add to cart button
        if (e.target.closest('.add-to-cart')) {
            e.stopPropagation();
            const productId = card.getAttribute('data-id');
            addToCart(productId, 1);
            
            // Visual feedback for mobile
            if (window.innerWidth <= 768) {
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 200);
            }
            return;
        }
        
        // Handle product click
        const productId = card.getAttribute('data-id');
        showProductDetail(productId);
    });
}


 










