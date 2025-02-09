const posts = [
    {
        id: 1,
        title: 'AI and Future of Technology',
        description: 'Exploring artificial intelligence innovations',
        date: 'Feb 1, 2024',
        image: 'images/proxyServer.jpg', // Local Image
        readTime: '7 min read',
        link: '/posts/ai-future' // Add link
    },
    {
        id: 2,
        title: 'Web Development Trends',
        description: 'Latest frameworks and development strategies',
        date: 'Jan 28, 2024',
        image: '/assets/images/web-trends.jpg',
        readTime: '5 min read',
        link: '/posts/web-trends'
    },
    {
        id: 3,
        title: 'Cybersecurity Challenges',
        description: 'Emerging threats and protection strategies',
        date: 'Jan 25, 2024',
        image: '/assets/images/cybersecurity.jpg',
        readTime: '6 min read',
        link: '/posts/cybersecurity'
    },
    {
        id: 4,
        title: 'Mobile App Development',
        description: 'Building cross-platform applications efficiently',
        date: 'Jan 22, 2024',
        image: '/assets/images/mobile-dev.jpg',
        readTime: '8 min read',
        link: '/posts/mobile-dev'
    }
];

let currentPosts = [...posts];
let visiblePosts = 6;

function createPostCard(post) {
    return `
        <div class="post-card">
            <div class="post-image-container">
                <img 
                    src="${post.image}" 
                    alt="${post.title}" 
                    class="post-image"
                >
                <div class="post-overlay"></div>
                <div class="post-content">
                    <h2 class="post-title">${post.title}</h2>
                    <p class="post-description">${post.description}</p>
                </div>
            </div>
            <div class="post-footer">
                <span>${post.date}</span>
                <div class="read-time">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>${post.readTime}</span>
                </div>
            </div>
        </div>
    `;
}

function renderPosts() {
    const grid = document.querySelector('.grid');
    grid.innerHTML = currentPosts
        .slice(0, visiblePosts)
        .map(post => createPostCard(post))
        .join('');
    
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    loadMoreBtn.classList.toggle('hidden', visiblePosts >= currentPosts.length);
}

function searchPosts(query) {
    query = query.toLowerCase();
    currentPosts = posts.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query)
    );
    visiblePosts = 5;
    renderPosts();
}

// Event Listeners
document.getElementById('searchInput').addEventListener('input', (e) => {
    searchPosts(e.target.value);
});

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value;
    searchPosts(query);
});

document.getElementById('loadMoreBtn').addEventListener('click', () => {
    visiblePosts += 5;
    renderPosts();
});

// Initialize the blog
document.addEventListener('DOMContentLoaded', renderPosts);
