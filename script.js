// Search functionality with content indexing and result display
class WebsiteSearch {
    constructor() {
        this.searchIndex = {};
        this.pages = [];
        this.searchResults = null;
        this.init();
    }

    async init() {
        // Initialize search UI elements
        this.createSearchResultsContainer();
        this.initializeEventListeners();
        // Load and index website content
        await this.indexWebsiteContent();
    }

    createSearchResultsContainer() {
        // Create search results container if it doesn't exist
        if (!document.querySelector('.search-results-container')) {
            const resultsContainer = document.createElement('div');
            resultsContainer.className = 'search-results-container';
            document.body.appendChild(resultsContainer);
        }
        this.searchResults = document.querySelector('.search-results-container');
    }

    async indexWebsiteContent() {
        // Simulated page content - In real implementation, this would be your actual pages
        this.pages = [
            {
                url: '/',
                title: 'Home',
                content: 'Welcome to AlienWeb - Your gateway to web development and technology',
                tags: ['home', 'welcome', 'web development', 'technology']
            },
            {
                url: '/services',
                title: 'Our Services',
                content: 'Web development, app development, UI/UX design, and consulting services',
                tags: ['services', 'web development', 'app development', 'design', 'consulting']
            },
            {
                url: '/blog',
                title: 'Blog',
                content: 'Latest articles about web development, technology trends, and programming tips',
                tags: ['blog', 'articles', 'web development', 'technology', 'programming']
            }
            // Add more pages as needed
        ];

        // Index content for search
        this.pages.forEach(page => {
            const content = `${page.title} ${page.content} ${page.tags.join(' ')}`.toLowerCase();
            const words = content.split(/\s+/);
            
            words.forEach(word => {
                if (word.length > 2) { // Skip very short words
                    if (!this.searchIndex[word]) {
                        this.searchIndex[word] = new Set();
                    }
                    this.searchIndex[word].add(page);
                }
            });
        });
    }

    search(query) {
        const searchTerms = query.toLowerCase().split(/\s+/);
        const results = new Map();

        searchTerms.forEach(term => {
            if (term.length > 2) {
                for (const [indexTerm, pages] of Object.entries(this.searchIndex)) {
                    if (indexTerm.includes(term)) {
                        pages.forEach(page => {
                            const score = this.calculateRelevanceScore(page, searchTerms);
                            results.set(page, (results.get(page) || 0) + score);
                        });
                    }
                }
            }
        });

        return Array.from(results.entries())
            .sort((a, b) => b[1] - a[1])
            .map(([page]) => page);
    }

    calculateRelevanceScore(page, searchTerms) {
        let score = 0;
        const content = `${page.title} ${page.content} ${page.tags.join(' ')}`.toLowerCase();

        searchTerms.forEach(term => {
            // Title matches are worth more
            if (page.title.toLowerCase().includes(term)) {
                score += 10;
            }
            // Tag matches are worth more than content matches
            if (page.tags.some(tag => tag.toLowerCase().includes(term))) {
                score += 5;
            }
            // Content matches
            const termCount = (content.match(new RegExp(term, 'g')) || []).length;
            score += termCount;
        });

        return score;
    }

    displayResults(results) {
        if (!results.length) {
            this.searchResults.innerHTML = `
                <div class="search-no-results">
                    <p>No results found. Try different keywords.</p>
                </div>`;
            return;
        }

        const resultsHTML = results.map(page => `
            <div class="search-result-item">
                <h3><a href="${page.url}">${page.title}</a></h3>
                <p>${this.highlightSearchTerms(page.content)}</p>
                <div class="search-result-tags">
                    ${page.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `).join('');

        this.searchResults.innerHTML = resultsHTML;
    }

    highlightSearchTerms(content) {
        const searchInput = document.querySelector('.search-box input');
        if (!searchInput.value.trim()) return content;

        const terms = searchInput.value.toLowerCase().split(/\s+/);
        let highlightedContent = content;

        terms.forEach(term => {
            if (term.length > 2) {
                const regex = new RegExp(`(${term})`, 'gi');
                highlightedContent = highlightedContent.replace(regex, '<mark>$1</mark>');
            }
        });

        return highlightedContent;
    }

    initializeEventListeners() {
        const searchInput = document.querySelector('.search-box input');
        const searchSubmit = document.querySelector('.search-submit');
        const searchBox = document.querySelector('.search-box');

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            if (query.length >= 2) {
                const results = this.search(query);
                this.displayResults(results);
                this.searchResults.classList.add('active');
            } else {
                this.searchResults.classList.remove('active');
            }
        });

        searchSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                const results = this.search(query);
                this.displayResults(results);
                this.searchResults.classList.add('active');
            }
        });

        // Close search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchBox.contains(e.target) && !this.searchResults.contains(e.target)) {
                this.searchResults.classList.remove('active');
            }
        });

        // Handle keyboard navigation
        this.searchResults.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.searchResults.classList.remove('active');
                searchInput.value = '';
            }
        });
    }
}

// Initialize search functionality
document.addEventListener('DOMContentLoaded', () => {
    window.websiteSearch = new WebsiteSearch();
});
