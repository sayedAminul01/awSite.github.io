document.addEventListener('DOMContentLoaded', () => {
    // Interview preparation categories
    const categories = [
        {
            id: 'reasoning',
            title: 'Reasoning Test',
            icon: 'fa-solid fa-brain',
            description: 'Logical and analytical reasoning questions',
            url: './reasoningTest/maths.html'  // Update with actual links
        },
        {
            id: 'mathematics',
            title: 'Mathematics Test',
            icon: 'fa-solid fa-calculator',
            description: 'Quantitative aptitude and maths problems',
            url: './mathematics/index.html'
        },
        {
            id: 'aptitude',
            title: 'Aptitude Test',
            icon: 'fa-solid fa-chart-line',
            description: 'Numerical and verbal aptitude',
            url: './aptitude/index.html'
        },
        {
            id: 'gk',
            title: 'General Knowledge',
            icon: 'fa-solid fa-globe',
            description: 'Current affairs and general awareness',
            url: './gk/index.html'
        },
        {
            id: 'english',
            title: 'English Test',
            icon: 'fa-solid fa-language',
            description: 'Grammar, vocabulary, comprehension',
            url: './english/index.html'
        },
        {
            id: 'coding',
            title: 'Coding Test',
            icon: 'fa-solid fa-code',
            description: 'Programming and logic skills',
            url: './coding/index.html'
        },
        {
            id: 'logical',
            title: 'Logical Reasoning',
            icon: 'fa-solid fa-puzzle-piece',
            description: 'Puzzles and logical deduction',
            url: './logical/index.html'
        },
        {
            id: 'verbal',
            title: 'Verbal Ability',
            icon: 'fa-solid fa-message',
            description: 'English communication and grammar',
            url: './verbal/index.html'
        },
        {
            id: 'data',
            title: 'Data Interpretation',
            icon: 'fa-solid fa-chart-pie',
            description: 'Tables, graphs, and data analysis',
            url: './data/index.html'
        },
        {
            id: 'technical',
            title: 'Technical Test',
            icon: 'fa-solid fa-microchip',
            description: 'Core computer science concepts',
            url: './technical/index.html'
        }
    ];

    const categoriesContainer = document.getElementById('categoriesContainer');
    const searchInput = document.getElementById('categorySearch');
    const clearSearchBtn = document.getElementById('clearSearch');
    const resultsCountSpan = document.getElementById('visibleCount');
    const themeToggle = document.getElementById('themeToggle');

    // Create HTML for a card (now using description)
    function createCategoryCard(category, index) {
        return `
            <a href="${category.url}" 
               class="category-card category-${category.id}"
               style="animation-delay: ${index * 0.1}s"
               data-category="${category.id}"
               aria-label="Practice ${category.title} - ${category.description}">
                <i class="category-icon ${category.icon}" aria-hidden="true"></i>
                <h3 class="category-title">${category.title}</h3>
                <p class="test-description">${category.description}</p>
            </a>
        `;
    }

    // Render categories and update result count
    function renderCategories(categoriesToRender) {
        if (categoriesToRender.length === 0) {
            categoriesContainer.innerHTML = `<div class="no-results"><i class="fas fa-search"></i> No topics match your search</div>`;
        } else {
            categoriesContainer.innerHTML = categoriesToRender
                .map((category, index) => createCategoryCard(category, index))
                .join('');
        }
        resultsCountSpan.textContent = categoriesToRender.length;
        // Show/hide clear button
        if (searchInput.value.trim() !== '') {
            clearSearchBtn.classList.add('visible');
        } else {
            clearSearchBtn.classList.remove('visible');
        }
    }

    // Initial render
    renderCategories(categories);

    // Debounced search
    let debounceTimer;
    function handleSearch() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const searchTerm = searchInput.value.toLowerCase().trim();
            const filtered = categories.filter(category =>
                category.title.toLowerCase().includes(searchTerm) ||
                category.description.toLowerCase().includes(searchTerm)
            );
            renderCategories(filtered);
        }, 250);
    }

    searchInput.addEventListener('input', handleSearch);

    // Clear search
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        renderCategories(categories);
        searchInput.focus();
    });

    // Keyboard shortcut '/' to focus search
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
    });

    // Theme toggle functionality
    function setTheme(isDark) {
        if (isDark) {
            document.body.classList.remove('light-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i> <span>Dark Mode</span>';
        } else {
            document.body.classList.add('light-theme');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> <span>Light Mode</span>';
        }
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // Check for saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        setTheme(false);
    } else {
        setTheme(true); // default dark
    }

    themeToggle.addEventListener('click', () => {
        const isDark = !document.body.classList.contains('light-theme');
        setTheme(!isDark);
    });

    // Optional: track clicks (analytics placeholder)
    categoriesContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.category-card');
        if (card) {
            console.log('Interview test clicked:', card.dataset.category);
        }
    });

});
