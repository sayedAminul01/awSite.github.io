// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Categories data
    const categories = [
        {
            id: 'node',
            title: 'AI Prompt Engineering',
            icon: 'fa-solid fa-brain',
            postCount: 50,
            description: 'Backend development',
            url: './promptEngineering/postsAppearPage.html'
        },
        {
            id: 'node',
            title: 'Ai Tools Directory',
            icon: 'fa-solid fa-robot',
            postCount: 1,
            description: 'Backend development',
            url: './categorySection/aiToolsDirectory.html'
        },
        {
            id: 'css',
            title: 'Computer Science',
            icon: 'fa-solid fa-laptop-code',
            postCount: 20,
            description: 'Styling and animations',
            url: './learningZone/computerZone.html'
        },
        {
            id: 'javascript',
            title: 'Open Schooling',
            icon: 'fa-solid fa-book-open',
            postCount: 1,
            description: 'Web programming',
            url: './openSchool/o.html'
        },
        {
            id: 'node',
            title: 'High School Resources',
            icon: 'fa-solid fa-school',
            postCount: 1,
            description: 'Backend development',
            url: './learningZone/layout.html'
        },
        {
            id: 'react',
            title: 'Blog',
            icon: 'fa-solid fa-blog',
            postCount: 1,
            description: 'Modern UI development',
            url: './blogPost/blogLayout.html'
        },

        {
            id: 'python',
            title: 'Shorts',
            icon: 'fa-solid fa-video',
            postCount: 1,
            description: 'Python programming',
            url: '../courses/shorts/index.html'
        },
        {
            id: 'design',
            title: 'Practice Hub without Instructor',
            icon: 'fa-brands fa-codepen',
            postCount: 1,
            description: 'UI/UX design',
            url: '/category/design'
        },
        {
            id: 'tools',
            title: 'Quiz',
            icon: 'fa-solid fa-question',
            postCount: 20,
            description: 'Development tools',
            url: './learningZone/computerZone.html'
        },
        {
            id: 'tools',
            title: 'Learning Zone',
            icon: 'fa-solid fa-cubes',
            postCount: 20,
            description: 'Development tools',
            url: './learningZone/index.html'
        },
                {
            id: 'css',
            title: 'Cyber Security',
            icon: 'fa-solid fa-shield-virus',
            postCount: 1,
            description: 'Styling and animations',
            // url: './learningZone/computerZone.html'
        },
        {
            id: 'css',
            title: 'ADCA',
            icon: 'fa-solid fa-desktop',
            postCount: 2,
            description: 'Styling and animations',
            url: '../adca_test/adcaLayoutPage.html'
        },
                {
            id: 'node',
            title: 'Learn Python',
            icon: 'fa-brands fa-python',
            postCount: 1,
            description: 'Backend development',
            // url: './learningZone/layout.html'
        }

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
               aria-label="View ${category.title} category with ${category.postCount} posts">
                <i class="category-icon ${category.icon}" aria-hidden="true"></i>
                <h3 class="category-title">${category.title}</h3>
                <p class="post-count">${category.postCount} posts</p>
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
            console.log(`Category clicked: ${categoryId}`);
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


