// DOM Elements
const root = document.documentElement;
const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const themeToggle = document.querySelector('.theme-toggle');
const searchToggle = document.querySelector('.search-toggle');
const searchBox = document.querySelector('.search-box');
const searchOverlay = document.querySelector('.search-overlay');
const searchInput = document.querySelector('.search-box input');
const searchSubmit = document.querySelector('.search-submit');

// Theme Toggle with smooth transition
function toggleTheme() {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Add transition class
    document.body.classList.add('theme-transitioning');
    
    // Update theme
    root.setAttribute('data-theme', newTheme);
    
    // Update theme toggle icon with transition
    const themeIcon = themeToggle.querySelector('i');
    themeIcon.style.transform = 'rotate(180deg)';
    
    setTimeout(() => {
        themeIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        themeIcon.style.transform = 'rotate(0deg)';
    }, 150);
    
    // Save theme preference
    localStorage.setItem('theme', newTheme);
    
    // Remove transition class
    setTimeout(() => {
        document.body.classList.remove('theme-transitioning');
    }, 300);
}

// Load saved theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    root.setAttribute('data-theme', savedTheme);
    themeToggle.querySelector('i').className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Mobile Navigation Toggle with smooth transition
function toggleNav() {
    const navIcon = navToggle.querySelector('i');
    
    // Animate icon transition
    navIcon.style.transform = 'rotate(180deg)';
    setTimeout(() => {
        navIcon.classList.toggle('fa-bars');
        navIcon.classList.toggle('fa-times');
        navIcon.style.transform = 'rotate(0deg)';
    }, 150);
    
    // Toggle mobile menu
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

// Search Functionality with improved animations
function toggleSearch(event) {
    event?.stopPropagation();
    
    const isClosing = searchBox.classList.contains('active');
    
    if (!isClosing) {
        searchBox.style.display = 'flex';
        requestAnimationFrame(() => {
            searchBox.classList.add('active');
            searchOverlay.classList.add('active');
        });
    } else {
        searchBox.classList.remove('active');
        searchOverlay.classList.remove('active');
        setTimeout(() => {
            searchBox.style.display = 'none';
            searchInput.value = ''; // Clear search input on close
        }, 300);
    }
    
    if (!isClosing) {
        searchInput.focus();
    }
}

// Enhanced search handling with feedback
function handleSearch(event) {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
        // Visual feedback for search button
        searchSubmit.classList.add('searching');
        searchSubmit.querySelector('i').className = 'fas fa-spinner fa-spin';
        
        // Simulate search delay and provide feedback
        setTimeout(() => {
            // Implement your actual search logic here
            console.log('Searching for:', searchTerm);
            
            // Reset search button
            searchSubmit.classList.remove('searching');
            searchSubmit.querySelector('i').className = 'fas fa-search';
            
            // Clear and close search
            searchInput.value = '';
            toggleSearch();
            
            // Example: Redirect to search results page
            // window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
        }, 800);
    }
}

// Smooth scroll functionality
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        // Close mobile menu if open
        if (mobileMenu.classList.contains('active')) {
            toggleNav();
        }
        
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Active link highlighting
function updateActiveLink() {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section[id]').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Event Listeners
function initEventListeners() {
    themeToggle.addEventListener('click', toggleTheme);
    navToggle.addEventListener('click', toggleNav);
    searchToggle.addEventListener('click', toggleSearch);
    searchSubmit.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch(e);
    });
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScroll);
    });
    
    // Click outside handlers
    document.addEventListener('click', (e) => {
        const isSearchActive = searchBox.classList.contains('active');
        const isMenuActive = mobileMenu.classList.contains('active');
        
        if (isSearchActive && 
            !searchBox.contains(e.target) && 
            !searchToggle.contains(e.target)) {
            toggleSearch();
        }
        
        if (isMenuActive && 
            !mobileMenu.contains(e.target) && 
            !navToggle.contains(e.target)) {
            toggleNav();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (searchBox.classList.contains('active')) {
                toggleSearch();
            }
            if (mobileMenu.classList.contains('active')) {
                toggleNav();
            }
        }
    });
    
    // Scroll event for active link highlighting
    window.addEventListener('scroll', updateActiveLink);
    
    // Resize event handling
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 768) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }, 250);
    });
}

// Initialize everything
function init() {
    initTheme();
    initEventListeners();
    updateActiveLink();
}

// Run initialization
document.addEventListener('DOMContentLoaded', init);




// Hero slider script
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
