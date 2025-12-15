// Complete categories and products data for Flavour coffee shop
const categories = [
     {
        id: 'waffle',
        name: 'Waffle',
        icon: '🧇',
        products: [
            { id: 1, name: 'Chocolate Waffle', price: '35 EGP', image: 'N.jpg', isNew: true },
            { id: 2, name: 'Carmel Waffle', price: '40 EGP', image: 'C.jpeg', isNew: true },
            { id: 3, name: 'Lotus Waffle', price: '45 EGP', image: 'L.webp', isNew: true },
            { id: 4, name: 'Pistachio Waffle', price: '70 EGP', image: 'P.webp', isNew: true },
            { id: 5, name: 'Tart Waffle', price: '110 EGP', image: 't.jpg', isNew: true },
            { id: 4, name: 'Hohos Waffle', price: '45 EGP', image: 'H.jpeg', isNew: true },
            { id: 4, name: 'Mix Waffle', price: '70 EGP', image: 'm.jpg', isNew: true },
            { id: 4, name: 'fatta Waffle', price: '75 EGP', image: 'F.jpg', isNew: true },
            { id: 1, name: 'kinder Waffle', price: '70 EGP', image: 'images (3).jpeg', isNew: true }
        ]
    },
    {
        id: 'hot-drinks',
        name: 'Hot Drinks',
        icon: '☕',
        products: [
            { id: 1, name: 'Con Panna Espresso', price: '60 EGP', image: '61.jpg' },
            { id: 2, name: 'Cappuccino', price: '70 EGP', image: '62.png' },
            { id: 3, name: 'Café Latte', price: '65 EGP', image: '63.jpg' },
            { id: 4, name: 'Flat White', price: '70 EGP', image: '64.png' },
            { id: 5, name: 'Matcha Latte', price: '65 EGP', image: '65.jpg' },
            { id: 6, name: 'Cortado', price: '60 EGP', image: '66.png' },
            { id: 7, name: 'Espresso', price: '40 EGP', image: '67.jpg' },
            { id: 8, name: 'Hot Chocolate', price: '50 EGP', image: '68.jpg' },
            { id: 9, name: 'Mocha Coffee', price: '70 EGP', image: '69.png' },
            { id: 10, name: 'White Mocha', price: '70 EGP', image: '70.png' },
            { id: 11, name: 'Spanish Latte', price: '80 EGP', image: '71.png' },
            { id: 12, name: 'Caramel Latte', price: '70 EGP', image: '72.png' },
            { id: 13, name: 'Turkish Coffee', price: '20 EGP', image: '73.jpg' },
            { id: 14, name: 'French Coffee', price: '30 EGP', image: '74.jpg' },
            { id: 15, name: 'Nescafe', price: '35 EGP', image: '75.jpg' },
            { id: 16, name: 'Tea', price: '15 EGP', image: '76.jpg' },
            { id: 17, name: 'Milk Tea', price: '20 EGP', image: '78.jpg' },
            { id: 18, name: 'Karak Tea', price: '35 EGP', image: '79.jpg' },
            { id: 19, name: 'Green Tea', price: '15 EGP', image: '80.png' },
            { id: 20, name: 'Herbal Tea', price: '15 EGP', image: '81.jpg' },
            { id: 21, name: 'Macchiato', price: '45 EGP', image: '82.jpg' },
            { id: 22, name: 'Red Velvet Hot Chocolate', price: '60 EGP', image: '83.jpg' }
        ]
    },
     {
        id: 'iced-drinks',
        name: 'Iced Drinks',
        icon: '☕️🧊',
        products: [
            { id: 1, name: 'Iced Coffee', price: '65 EGP', image: '22.jpeg' },
            { id: 2, name: 'Iced Latte', price: '75 EGP', image: '23.png' },
            { id: 3, name: 'Iced Caramel Latte', price: '75 EGP', image: '24.png' },
            { id: 4, name: 'Iced Mocha', price: '75 EGP', image: '25.png' },
            { id: 5, name: 'Iced White Mocha', price: '80 EGP', image: '26.jpg' },
            { id: 6, name: 'White Mocha with Extra Cream', price: '100 EGP', image: '27.png' },
            { id: 7, name: 'Iced Spanish Latte', price: '90 EGP', image: '28.jpg' },
            { id: 8, name: 'Iced Matcha', price: '75 EGP', image: '29.jpg' },
            { id: 8, name: 'Iced Matcha Strawberry', price: '85 EGP', image: 'strawberry-matcha.jpg' },
            { id: 9, name: 'Iced Pistachio Latte', price: '95 EGP', image: 'تصميم بدون عنوان.png' }
        ]
    },
     {
        id: 'frappe',
        name: 'Frappe',
        icon: '🍧',
        products: [
            { id: 1, name: 'Matcha Frappe', price: '65 EGP', image: '57.jpg' },
            { id: 2, name: 'Caramel Frappe', price: '65 EGP', image: '55.png' },
            { id: 3, name: 'Vanilla Frappe', price: '55 EGP', image: '58.png' },
            { id: 4, name: 'Mocha Frappe', price: '65 EGP', image: '56.png' },
            { id: 5, name: 'Coffee Frappe', price: '60 EGP', image: '60.png' },
            { id: 6, name: 'frappetiono', price: '90 EGP', image: '55.png' },
            { id: 7, name: 'White Mocha Frappe', price: '70 EGP', image: '59.png' }
        ]
    },
     {
        id: 'fresh-juice',
        name: 'Fresh Juice',
        icon: '🍹',
        products: [
            { id: 83, name: 'Kiwi', price: '70 EGP', image: '84.png' },
            { id: 84, name: 'Banana with Milk', price: '45 EGP', image: '85.png' },
            { id: 85, name: 'Watermelon', price: '40 EGP', image: '86.png' },
            { id: 86, name: 'Mango', price: '40 EGP', image: '87.png' },
            { id: 87, name: 'Strawberry', price: '40 EGP', image: '88.png' },
            { id: 88, name: 'Guava', price: '40 EGP', image: '89.png' },
            { id: 89, name: 'Lemon with Mint', price: '40 EGP', image: '90.png' },
            { id: 90, name: 'Peach', price: '60 EGP', image: '91.png' },
            { id: 91, name: 'Orange', price: '35 EGP', image: '92.png' }
        ]
    },
      {
        id: 'smoothies',
        name: 'Smoothies',
        icon: '🥤',
        products: [
            { id: 1, name: 'Blueberry Smoothie', price: '60 EGP', image: '30.jpg' },
            { id: 2, name: 'Passion Fruit Smoothie', price: '65 EGP', image: '31.jpg' },
            { id: 3, name: 'Peach Smoothie', price: '65 EGP', image: '32.jpg' },
            { id: 4, name: 'Kiwi Smoothie', price: '80 EGP', image: '33.jpg' },
            { id: 5, name: 'Strawberry Smoothie', price: '45 EGP', image: '34.jpg' },
            { id: 6, name: 'Mango Smoothie', price: '45 EGP', image: '35.jpg' },
            { id: 7, name: 'Lemon Mint Smoothie', price: '45 EGP', image: '36.png' },
            { id: 6, name: 'watermelon Smoothie', price: '45 EGP', image: '86.png' }
        ]
    },
    {
        id: 'Summer-drinks',
        name: 'Summer Drinks',
        icon: '🍷',
        products: [
             { id: 9, name: 'Kiwi and green apple', price: '70 EGP', image: 'images (2).jpeg', description: 'Ingredients: Kiwi , greenapple'},
            { id: 10, name: 'Power Drink', price: '110 EGP', image: 'from36.png', description: 'Ingredients: Avocado, cashew, pistachio, banana, honey' },
            { id: 11, name: 'Paradis', price: '70 EGP', image: 'from37.jpg', description: 'Ingredients: Mango, banana, strawberry, kiwi, ice cream' },
            { id: 12, name: 'Mango Beach', price: '70 EGP', image: 'from30.jpg', description: 'Ingredients: Mango, vanilla, peach' },
            { id: 13, name: 'Mango Kiwi', price: '70 EGP', image: 'from31.jpg', description: 'Ingredients: Mango, kiwi, ice cream' },
            { id: 14, name: 'Isfahani', price: '80 EGP', image: 'from32.jpg', description: 'Ingredients: Mango, avocado, nuts' },
            { id: 15, name: 'Power Cashew', price: '80 EGP', image: 'from33.png', description: 'Ingredients: Dates, cashew' },
            { id: 16, name: 'Fruit Salad', price: '50 EGP', image: 'from34.jpg', description: 'A mix of fresh fruits' },
            { id: 17, name: 'Colorts', price: '60 EGP', image: 'from35.jpg', description: 'Ingredients: Kiwi, lemon, mint' }
        ]
    },
    {
        id: 'milk-shake',
        name: 'Milk Shake',
        icon: '🥛',
        products: [
            { id: 1, name: 'Passion Fruit', price: '65 EGP', image: '37.png' },
            { id: 2, name: 'Blueberry', price: '65 EGP', image: '38.png' },
            { id: 3, name: 'Mixed Berry', price: '70 EGP', image: '39.png' },
            { id: 4, name: 'Kiwi', price: '70 EGP', image: '40.png' },
            { id: 5, name: 'Peach', price: '65 EGP', image: '41.png' },
            { id: 6, name: 'Watermelon', price: '55 EGP', image: '42.png' },
            { id: 7, name: 'Mango', price: '55 EGP', image: '43.png' },
            { id: 8, name: 'Strawberry', price: '55 EGP', image: '44.png' },
            { id: 9, name: 'Marshmallow', price: '65 EGP', image: '45.png' },
            { id: 10, name: 'Vanilla', price: '50 EGP', image: '46.png' },
            { id: 11, name: 'Chocolate', price: '55 EGP', image: '47.png' },
            { id: 12, name: 'Lotus', price: '70 EGP', image: '48.png' },
            { id: 13, name: 'Oreo', price: '60 EGP', image: '49.png' },
            { id: 14, name: 'Pistachio', price: '75 EGP', image: '50.webp' },
            { id: 15, name: 'Lagoon', price: '60 EGP', image: '51.png' },
            { id: 16, name: 'Lemon', price: '50 EGP', image: '52.jpg' },
            { id: 17, name: 'Pineapple', price: '60 EGP', image: '53.png' },
            { id: 18, name: 'Pineapple Mango', price: '70 EGP', image: '54.jpg' }
        ]
    },
    {
        id: 'cold-drinks',
        name: 'Cold Drinks',
        icon: '🥃',
        products: [
            { id: 1, name: 'Redbull', price: '60 EGP', image: '6.jpeg', description: 'Redbull' },
            { id: 2, name: 'Fayrouz', price: '25 EGP', image: '7.jpeg', description: 'Fayrouz' },
            { id: 3, name: 'V Cola', price: '23 EGP', image: '8.jpeg', description: 'V Cola' },
            { id: 4, name: '7 Up', price: '23 EGP', image: '9.jpeg', description: '7 Up' },
            { id: 5, name: 'Schweppes', price: '23 EGP', image: '1.jpeg', description: 'Schweppes' },
            { id: 6, name: 'Miranda', price: '23 EGP', image: '2.jpeg', description: 'Miranda' },
            { id: 7, name: 'Small Water', price: '10 EGP', image: '3.jpeg', description: 'Small Water' },
            { id: 8, name: 'Sting', price: '23 EGP', image: '4.jpeg', description: 'Sting' },
            { id: 9, name: 'Birell', price: '27 EGP', image: '5.jpeg', description: 'Birell' }
        ]
    },
    {
        id: 'mocktails',
        name: 'Mocktails',
        icon: '🍸',
        products: [
            { id: 10, name: 'Lavender', price: '45 EGP', image: '11.png', description: 'Ingredients: Lemon juice, lavender' },
            { id: 11, name: 'Sun Shine', price: '55 EGP', image: '12.png', description: 'Ingredients: Strawberry, lemon, soda' },
            { id: 12, name: 'Sun Set', price: '60 EGP', image: '13.png', description: 'Ingredients: Strawberry, orange, lemon, soda' },
            { id: 13, name: 'Blue Sky', price: '55 EGP', image: '14.png', description: 'Ingredients: Blue Curacao, lemon, soda' },
            { id: 14, name: 'Skutch Mint', price: '55 EGP', image: '15.png', description: 'Ingredients: Mint, lemon, soda' },
            { id: 15, name: 'Blue Passion', price: '70 EGP', image: '16.png', description: 'Ingredients: Passion fruit, Blue Curacao, lemon, soda' },
            { id: 16, name: 'Peach Mojito', price: '55 EGP', image: '17.png', description: 'Ingredients: Peach, lemon, soda' },
            { id: 17, name: 'Blue Power', price: '95 EGP', image: '18.png', description: 'Ingredients: Red Bull, Blue Curacao, lemon, soda' },
            { id: 18, name: 'Passion Fruit Mojito', price: '60 EGP', image: '19.png', description: 'Ingredients: Passion fruit, lemon, soda' },
            { id: 19, name: 'Gum', price: '50 EGP', image: '20.png', description: 'Gum' },
            { id: 20, name: 'watermelon', price: '60 EGP', image: 'WhatsApp Image 2025-04-26 at 21.30.52_29528aec.jpg', description: 'watermelon, soda, lemon, mint' },
            { id: 21, name: 'Apple Mint', price: '65 EGP', image: '21.png', description: 'Ingredients: Apple, mint' }
        ]
    },
    {
        id: 'winter-corner',
        name: 'Winter Corner',
        icon: '❄️',
        products: [
            { id: 1, name: 'Hot Cider', price: '40 EGP', description: 'Hot Cider' },
            { id: 2, name: 'Sahlab', price: '30 EGP', description: 'Sahlab' },
            { id: 3, name: 'Sahlab with Nuts', price: '50 EGP', description: 'Sahlab with Nuts' },
            { id: 4, name: 'Sahlab with Fruits', price: '50 EGP', description: 'Sahlab with Fruits' },
            { id: 5, name: 'Sahlab Chocolate', price: '35 EGP', description: 'Sahlab Chocolate' },
            { id: 6, name: 'Sahlab Chocolate with Nuts', price: '55 EGP', description: 'Sahlab Chocolate with Nuts' },
            { id: 7, name: 'Hot Oreo', price: '55 EGP', description: 'Hot Oreo' }
        ]
    },
     {
        id: 'ice-cream',
        name: 'Ice Cream',
        icon: '🍦',
        products: [
            { id: 1, name: 'One Bowl Ice-cream', price: '15 EGP', image: 'delicious-ice-cream-with-topping.jpg' },
{ id: 1, name: 'Two bowl of ice cream', price: '25 EGP', image: 'delicious-ice-cream-with-topping.jpg' }
        ]
    },
];

// Function to create product card
function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price}</p>
                ${product.description ? `<p class="product-description">${product.description}</p>` : ''}
            </div>
        </div>
    `;
}

// Function to display products
function displayProducts(productsToShow) {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
}

// Function to filter products by category
function filterProducts(category) {
    if (category === 'all') {
        return categories.flatMap(cat => cat.products);
    }
    const foundCategory = categories.find(cat => cat.id === category);
    return foundCategory ? foundCategory. products : [];
}

// Function to search products
function searchProducts(searchTerm) {
    searchTerm = searchTerm. toLowerCase();
    return categories. flatMap(category => 
        category.products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            (product.description && product.description.toLowerCase().includes(searchTerm))
        )
    );
}

// Welcome Modal functionality
function showWelcomeModal() {
    const modal = document.getElementById('welcomeModal');
    const closeBtn = document.querySelector('.close');
    const closeModalBtn = document.getElementById('closeModal');
    
    // Show modal
    modal.style.display = 'block';
    
    // Close modal when clicking X
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }
    
    // Close modal when clicking "تصفح المنيو" button
    closeModalBtn.onclick = function() {
        modal.style.display = 'none';
    }
    
    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Show welcome modal first
    showWelcomeModal();
    
    // Display all products initially
    displayProducts(categories. flatMap(cat => cat. products));
 
    // Add click event listeners to categories
    const categoriesElements = document.querySelectorAll('.category');
    categoriesElements.forEach(category => {
        category.addEventListener('click', () => {
            // Remove active class from all categories
            categoriesElements.forEach(c => c.classList.remove('active'));
            // Add active class to clicked category
            category.classList.add('active');
            // Filter and display products
            const selectedCategory = category.getAttribute('data-category');
            const filteredProducts = filterProducts(selectedCategory);
            displayProducts(filteredProducts);
        });
    });

    // Add search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value;
        const searchResults = searchProducts(searchTerm);
        displayProducts(searchResults);
    });

    // Scroll to top button functionality
    const scrollTopBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});







