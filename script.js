// Existing menu toggle code
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// New search functionality
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const content = document.getElementById('content');
const searchResults = document.getElementById('search-results');

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm.length < 2) {
        searchResults.style.display = 'none';
        return;
    }

    const contentText = content.innerHTML;
    const regex = new RegExp(searchTerm, 'gi');
    const highlightedText = contentText.replace(regex, match => `<span class="highlight">${match}</span>`);

    const matchCount = (highlightedText.match(/<span class="highlight">/g) || []).length;

    if (matchCount > 0) {
        content.innerHTML = highlightedText;
        searchResults.innerHTML = `<h3>Search Results</h3><p>Found ${matchCount} match${matchCount > 1 ? 'es' : ''} for "${searchTerm}"</p>`;
        searchResults.style.display = 'block';
    } else {
        searchResults.innerHTML = `<h3>Search Results</h3><p>No matches found for "${searchTerm}"</p>`;
        searchResults.style.display = 'block';
    }
}

searchButton.addEventListener('click', performSearch);

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Existing menu toggle and search functionality...

// Hero slider content
const heroContent = [
    {
        title: "Open Schooling",
        description: "Our flexible open schooling program allows students to complete their education in Arts, Science, or Commerce, at their own pace...",
        buttonText: "Explore Our Services",
        buttonLink: "#services"
    },
    {
        title: "Computer Vocational Courses",
        description: "We offer a variety of courses that equip students with practical, job-ready skills in fields like web development, graphic design, and digital marketing..",
        buttonText: "Learn More",
        buttonLink: "#about"
    },
    {
        title: "Freelancing Services",
        description: "From virtual assistance to Web Development, social media management, our team is ready to help you manage your business more efficiently, so you can focus on what you do best..",
        buttonText: "Contact Us",
        buttonLink: "#contact"
    }
];

let currentSlide = 0;
const images = document.querySelectorAll('.hero-slider img');
const titleElement = document.getElementById('hero-title');
const descriptionElement = document.getElementById('hero-description');
const buttonElement = document.getElementById('hero-button');
const heroContentElement = document.querySelector('.hero-content');

function changeSlide() {
    // Hide the current content
    heroContentElement.classList.remove('show');
    heroContentElement.classList.add('hide');

    setTimeout(() => {
        // Change the slide
        images[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % images.length;
        images[currentSlide].classList.add('active');

        // Update content
        titleElement.textContent = heroContent[currentSlide].title;
        descriptionElement.textContent = heroContent[currentSlide].description;
        buttonElement.textContent = heroContent[currentSlide].buttonText;
        buttonElement.href = heroContent[currentSlide].buttonLink;

        // Show the new content
        heroContentElement.classList.remove('hide');
        heroContentElement.classList.add('show');
    }, 600); // Time matches the transition duration
}

setInterval(changeSlide, 5000); // Change every 5 seconds

// Dark mode functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme on page load
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark-mode') {
    body.classList.add('dark-mode');
    document.getElementById('theme-icon').setAttribute('stroke', '#FFD700'); // Dark mode icon color
} else {
    document.getElementById('theme-icon').setAttribute('stroke', '#000'); // Light mode icon color
}

// Toggle theme and update icon
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const themeIcon = document.getElementById('theme-icon');
    
    if (body.classList.contains('dark-mode')) {
        themeIcon.setAttribute('stroke', '#FFD700'); // Dark mode icon color
        localStorage.setItem('theme', 'dark-mode');
    } else {
        themeIcon.setAttribute('stroke', '#000'); // Light mode icon color
        localStorage.setItem('theme', 'light-mode');
    }
});
    


document.addEventListener('DOMContentLoaded', function() {
    const topBarAlert = document.getElementById('topBarAlert');
    
    // Show the alert after a 5-second delay
    setTimeout(function() {
        topBarAlert.classList.add('show');
        
        // Hide the alert after 5 seconds
        setTimeout(function() {
            topBarAlert.classList.remove('show');
        }, 5000);
    }, 5000);
});

