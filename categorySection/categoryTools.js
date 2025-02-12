// categoryTools.js
document.addEventListener('DOMContentLoaded', () => {
    // Tools categories data
    const toolsCategories = [
        {
            id: 'development-tools',
            title: 'Generate Receipt',
            icon: 'fa-solid fa-receipt',
            postCount: "Generate Professional Receipt in Seconds",
            description: 'Programming and development tools',
            url: 'https://receipt.code01.xyz/'
        },
        {
            id: 'design-tools',
            title: 'Generate Vocational Course Receipt',
            icon: 'fa-solid fa-receipt',
            postCount:  "Generate any Computer Course Receipt instantly",
            description: 'tools',
            url: 'https://sayedaminul01.github.io/VocationalReceipt/'
        },
        {
            id: 'Loan Calculation Tool',
            title: 'Loan Calculation',
            icon: 'fa-solid fa-hand-holding-dollar',
            postCount: 15,
            description: 'Calculate any Loan amount interest by Year/Amount/Monthly Sheet and more',
            url: '/tools/productivity'
        },
        // {
        //     id: 'online-resources',
        //     title: 'Online Learning',
        //     icon: 'fa-solid fa-graduation-cap',
        //     postCount: 30,
        //     description: 'Free online learning platforms',
        //     url: '/tools/learning'
        // },
        // {
        //     id: 'collaboration-tools',
        //     title: 'Collaboration Tools',
        //     icon: 'fa-solid fa-users',
        //     postCount: 22,
        //     description: 'Team collaboration and communication tools',
        //     url: '/tools/collaboration'
        // },
        // {
        //     id: 'hosting-tools',
        //     title: 'Hosting & Deployment',
        //     icon: 'fa-solid fa-server',
        //     postCount: 20,
        //     description: 'Web hosting and deployment platforms',
        //     url: '/tools/hosting'
        // }
    ];

    const toolsCategoriesContainer = document.getElementById('toolsCategoriesContainer');
    const toolsSearchInput = document.getElementById('toolsCategorySearch');

    // Create HTML for a single category card
    function createToolCategoryCard(category, index) {
        return `
            <a href="${category.url}" 
               class="category-card category-${category.id.replace(/\s+/g, '-').toLowerCase()}"
               style="animation-delay: ${index * 0.1}s"
               data-category="${category.id}"
               aria-label="View ${category.title} category with ${category.postCount} posts">
                <i class="category-icon ${category.icon}" aria-hidden="true"></i>
                <h3 class="category-title">${category.title}</h3>
                <p class="post-count">${category.postCount} posts</p>
            </a>
        `;
    }

    // Rest of the code remains the same as in the previous version
    // ... (previous event listeners and functions)

    // Render all tools categories
    function renderToolsCategories(categoriesToRender) {
        toolsCategoriesContainer.innerHTML = categoriesToRender
            .map((category, index) => createToolCategoryCard(category, index))
            .join('');
    }

    // Initialize tools categories
    renderToolsCategories(toolsCategories);

    // Search functionality for tools categories
    toolsSearchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredCategories = toolsCategories.filter(category => 
            category.title.toLowerCase().includes(searchTerm) ||
            category.description.toLowerCase().includes(searchTerm)
        );
        renderToolsCategories(filteredCategories);
    });

    // Add hover effect for tools category cards
    toolsCategoriesContainer.addEventListener('mouseover', (e) => {
        const card = e.target.closest('.category-card');
        if (card) {
            const icon = card.querySelector('.category-icon');
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        }
    });

    toolsCategoriesContainer.addEventListener('mouseout', (e) => {
        const card = e.target.closest('.category-card');
        if (card) {
            const icon = card.querySelector('.category-icon');
            icon.style.transform = 'scale(1)';
        }
    });

    // Track tools category clicks for analytics
    toolsCategoriesContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.category-card');
        if (card) {
            const categoryId = card.dataset.category;
            // Analytics tracking code would go here
            console.log(`Tools Category clicked: ${categoryId}`);
        }
    });

    // Add keyboard navigation for tools search
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && e.altKey) {
            e.preventDefault();
            toolsSearchInput.focus();
        }
    });
});
