
document.addEventListener('DOMContentLoaded', () => {
    // Test categories data
    const categories = [
        {
            id: 'test011',
            title: 'dS introduction Test',
            // icon: 'fa-solid fa-test',
            postCount: 1,
            description: 'Data Science intro test',
            url: 'dSMcqsContent/intro_Mcqs.html'
        }, 
        // {
        //     id: 'test02',
        //     title: 'Month 2',
        //     // icon: 'fa-solid fa-code',
        //     postCount: 50,
        //     description: 'Programming basics test',
        //     url: '../adcaCourseTestContent/generation/index.html'
        // },
        // {
        //     id: 'test1',
        //     // title: 'Welcome Test',
        //     icon: 'fa-solid fa-desktop',
        //     postCount: 50,
        //     description: 'Basic computer fundamentals test',
        //     url: '../adcaCourseTestContent/index.html'
        // },
        // {
        //     id: 'test2',
        //     title: 'Troubleshooting Test',
        //     icon: 'fa-solid fa-code',
        //     postCount: 50,
        //     description: 'Programming basics test',
        //     url: '../adcaCourseTestContent/Troubleshooting/index.html'
        // },
        // {
        //     id: 'test3',
        //     title: 'Internship Demo Test',
        //     icon: 'fa-solid fa-calculator',
        //     postCount: 1,
        //     description: 'Mathematics aptitude test',
        //     url: '../demoTest/index.html'
        // },
        // {
        //     id: 'test4',
        //     title: 'Practice Tally',
        //     icon: 'fa-solid fa-book',
        //     postCount: 50,
        //     description: 'Practice Tally from Basic to Advance Level',
        //     url: '../tally/index.html'
        // },
        // {
        //     id: 'test5',
        //     title: 'Coming Soon',
        //     icon: 'fa-solid fa-globe',
        //     postCount: 0,
        //     description: 'Web development skills test',
        //     url: './tests/web-dev.html'
        // },
        // {
        //     id: 'test6',
        //     title: 'Coming Soon',
        //     icon: 'fa-solid fa-diagram-project',
        //     postCount: 0,
        //     description: 'Data structures and algorithms',
        //     url: './tests/data-structures.html'
        // },
        // {
        //     id: 'test3',
        //     title: 'Coming Soon',
        //     icon: 'fa-solid fa-network-wired',
        //     postCount: 0,
        //     description: 'Computer networking test',
        //     url: './tests/networking.html'
        // },
        // {
        //     id: 'test4',
        //     title: 'Coming Soon',
        //     icon: 'fa-solid fa-microchip',
        //     postCount: 0,
        //     description: 'Operating systems concepts',
        //     url: './tests/operating-systems.html'
        // },
        // {
        //     id: 'test5',
        //     title: 'Coming Soon',
        //     icon: 'fa-solid fa-shield-virus',
        //     postCount: 0,
        //     description: 'Cyber security concepts',
        //     url: './tests/cyber-security.html'
        // },
        // {
        //     id: 'test6',
        //     title: 'FT',
        //     icon: 'fa-solid fa-database',
        //     postCount: 50,
        //     description: 'Database concepts and SQL',
        //     url: '../finalTest/index.html'
        // }
    ];

    const categoriesContainer = document.getElementById('categoriesContainer');
    const searchInput = document.getElementById('categorySearch');

    // Create HTML for a single category card
    function createCategoryCard(category, index) {
        return `
            <a href="${category.url}" 
               class="category-card category-${category.id}"
               style="animation-delay: ${index * 0.1}s"
               data-category="${category.id}"
               aria-label="Take the ${category.title} test with ${category.postCount} questions">
                <i class="category-icon ${category.icon}" aria-hidden="true"></i>
                <h3 class="category-title">${category.title}</h3>
                <p class="post-count">${category.postCount} questions</p>
            </a>
        `;
    }

    // Render all categories
    function renderCategories(categoriesToRender) {
        categoriesContainer.innerHTML = categoriesToRender
            .map((category, index) => createCategoryCard(category, index))
            .join('');
    }

    // Initialize categories
    renderCategories(categories);

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredCategories = categories.filter(category => 
            category.title.toLowerCase().includes(searchTerm) ||
            category.description.toLowerCase().includes(searchTerm)
        );
        renderCategories(filteredCategories);
    });

    // Add hover effect for cards
    categoriesContainer.addEventListener('mouseover', (e) => {
        const card = e.target.closest('.category-card');
        if (card) {
            const icon = card.querySelector('.category-icon');
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        }
    });

    categoriesContainer.addEventListener('mouseout', (e) => {
        const card = e.target.closest('.category-card');
        if (card) {
            const icon = card.querySelector('.category-icon');
            icon.style.transform = 'scale(1)';
        }
    });

    // Track category clicks for analytics
    categoriesContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.category-card');
        if (card) {
            const categoryId = card.dataset.category;
            // Analytics tracking code would go here
            console.log(`Test clicked: ${categoryId}`);
        }
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === '/') {
            e.preventDefault();
            searchInput.focus();
        }
    });
});












