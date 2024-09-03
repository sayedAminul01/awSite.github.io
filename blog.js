const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const dateFilter = document.getElementById('date-filter');
const filterButton = document.getElementById('filter-button');
const blogPosts = document.querySelectorAll('.blog-post-card');

filterButton.addEventListener('click', () => {
    const searchQuery = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const dateOrder = dateFilter.value;

    blogPosts.forEach(post => {
        const title = post.querySelector('h3').textContent.toLowerCase();
        const date = new Date(post.querySelector('.date').textContent);
        let showPost = true;

        // Search Filter
        if (searchQuery && !title.includes(searchQuery)) {
            showPost = false;
        }

        // Category Filter (Add this logic if categories are defined)
        if (category && !post.classList.contains(category)) {
            showPost = false;
        }

        post.style.display = showPost ? 'block' : 'none';
    });

    // Date Filter
    if (dateOrder === 'latest') {
        Array.from(blogPosts).sort((a, b) => {
            const dateA = new Date(a.querySelector('.date').textContent);
            const dateB = new Date(b.querySelector('.date').textContent);
            return dateB - dateA;
        }).forEach(post => post.parentElement.appendChild(post));
    } else if (dateOrder === 'oldest') {
        Array.from(blogPosts).sort((a, b) => {
            const dateA = new Date(a.querySelector('.date').textContent);
            const dateB = new Date(b.querySelector('.date').textContent);
            return dateA - dateB;
        }).forEach(post => post.parentElement.appendChild(post));
    }
});



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
