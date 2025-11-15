// Product data - Easy to modify and expand
// To add products: Edit this array with your own images and affiliate links
const products = [
    {
        title: "MSI PRO MP223 21.45 Inch Full HD Office LCD Monitor - 1920 X 1080, 100 Hz, Eye-Friendly Screen",
        image: "images/monitor.jpg", // Upload your image to images folder
        affiliateLink: "https://amzn.to/3IcrBx0"
    },    
    {
        title: "Echo Dot (5th Gen) | Smart speaker with Bigger sound, Motion Detection, Temperature Sensor",
        image: "images/alexa.jpg", // Upload your image to images folder
        affiliateLink: "https://amzn.to/41IZeNE"
    },    
    {
        title: "Logitech G G213 Prodigy USB Gaming Keyboard",
        image: "images/Keyboard.jpg", // Upload your image to images folder
        affiliateLink: "https://amzn.to/4lYiJsF"
    },    
    {
        title: "Crucial P3 Plus 1TB PCIe 4.0 3D NAND NVMe M.2 SSD, up to 5000MB",
        image: "images/nvme.jpg", // Upload your image to images folder
        affiliateLink: "https://amzn.to/4ggfFqT"
    },    
    {
        title: "Logitech G102 USB Light Sync Gaming Mouse with Customizable RGB ",
        image: "images/mouse.webp", // Upload your image to images folder
        affiliateLink: "https://amzn.to/45T7a1j"
    },
    {
        title: "Jaspo Polyurethane Hurricane Ollie Spiral Fiber Composite Skateboard",
        image: "images/skateboard1.jpg", // Upload your image to images folder
        affiliateLink: "https://amzn.to/468dktd"
    },
    {
        title: "Crucial BX500 500GB 2.5-inch SATA 3D NAND Internal SSD Upto 550 MB/s",
        image: "images/ssd.jpg", // Upload your image to images folder
        affiliateLink: "https://amzn.to/4g8w7co"
    },
    {
        title: "TAJNAN World Map Printed Black Inner Colour Ceramic Coffee Mug",
        image: "images/mug.jpg", // Upload your image to images folder
        affiliateLink: "https://amzn.to/47Q7rDJ"
    },
    {
        title: "WZATCO Yuva Go Android 13.0 Smart Projector",
        image: "images/projector.jpg", // Upload your image to images folder
        affiliateLink: "https://amzn.to/41JVqvD"
    },
    {
        title: "InstaCuppa Automatic Touchless Motion Sensor Dustbin",
        image: "images/dustbin.jpg", // Upload your image to images folder
        affiliateLink: "https://amzn.to/45UbH3B"
    },
    {
        title: "Peter England Men's Regular Fit Insignia Half Sleeve Polo T-Shirt ",
        image: "images/tshirt.jpg", // Upload your image to images folder
        affiliateLink: "https://amzn.to/47ruXGO"
    },
    {
        title: "Amazon Brand - Solimo Ivory Sheet, A4 Size, 210 GSM, 25 Sheets Per Pack ",
        image: "images/paper.jpg", // Upload your image to images folder
        affiliateLink: "https://amzn.to/4gbEXGB"
    },
    {
        title: "JACK & JONES Men's Cotton Solid Classic Fit T-Shirt",
        image: "images/tshirt2.jpg", // Upload your image to images folder
        affiliateLink: "https://amzn.to/4mQewZg"
    },
    {
        title: "Woodland Men's Suede Casual Shoes",
        image: "images/shoe.jpg", // Upload your image to images folder
        affiliateLink: "https://amzn.to/4m71k1g"
    },
    {
        title: "areflection||Coding/Programming Sticker Decals - Pack of 16",
        image: "images/sticker.jpg", // Upload your image to images folder
        affiliateLink: "https://amzn.to/3IbptFL"
    },
    {
        title: "Zonixon Hip Hop Cotton Caps For Men",
        image: "images/cafe.jpg", // Upload your image to images folder
        affiliateLink: "https://amzn.to/3JXD7wN"
    },
    {
        title: "Crucial RAM 8GB DDR4 3200MHz CL22",
        image: "images/ram.jpg", // Upload your image to images folder
        affiliateLink: "https://amzn.to/4nklrdc"
    },
    {
        title: "Mi Redmi Note 12 Pro Plus 5G Back cover",
        image: "images/cover12.jpg", // Upload your image to images folder
        affiliateLink: "https://amzn.to/4gcZEBT"
    },
    {
        title: "Ant Esports VS400L NonModular High Efficiency Gaming Power Supply",
        image: "images/psu.jpg", // Upload your image to images folder
        affiliateLink: "https://amzn.to/4oKKveC"
    }
];

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const themeToggle = document.getElementById('themeToggle');
const noResults = document.getElementById('noResults');

// Theme management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
}

function updateThemeButton(theme) {
    themeToggle.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
}

// Product rendering
function renderProducts(productsToRender = products) {
    if (productsToRender.length === 0) {
        productsGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    productsGrid.style.display = 'grid';
    noResults.style.display = 'none';

    productsGrid.innerHTML = productsToRender.map(product => `
        <article class="product-card">
            <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
            <h2 class="product-title">${product.title}</h2>
            <a href="${product.affiliateLink}" 
               class="buy-button" 
               target="_blank" 
               rel="noopener noreferrer">
                🛒 Buy on Amazon
            </a>
        </article>
    `).join('');
}

// Search functionality
function filterProducts(searchTerm) {
    const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderProducts(filtered);
}

// Event listeners
themeToggle.addEventListener('click', toggleTheme);

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.trim();
    if (searchTerm === '') {
        renderProducts();
    } else {
        filterProducts(searchTerm);
    }
});

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderProducts();
});

// Product management functions for easy expansion
window.addProduct = function(product) {
    products.push(product);
    renderProducts();
};

window.removeProduct = function(index) {
    if (index >= 0 && index < products.length) {
        products.splice(index, 1);
        renderProducts();
    }
};

window.updateProduct = function(index, updates) {
    if (index >= 0 && index < products.length) {
        Object.assign(products[index], updates);
        renderProducts();
    }
};
