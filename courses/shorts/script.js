        // Initial video data
        const initialVideos = [
            {
                id: 'eVm7zvHwA-k',
                title: 'Funny YouTube Short',
                type: 'shorts'
            },
            {
                id: '3Jb-teGK-uU',
                title: 'Another YouTube Short',
                type: 'shorts'
            },
            {
                id: 'https://www.youtube.com/shorts/UyjcZ3aKAd8',
                title: 'Cool YouTube Short',
                type: 'shorts'
            },
            {
                id: 'dQw4w9WgXcQ',
                title: 'Rick Astley - Never Gonna Give You Up',
                type: 'full'
            },
            {
                id: '9bZkp7q19f0',
                title: 'PSY - GANGNAM STYLE',
                type: 'full'
            }
        ];
        
        // Main videos array
        let allVideos = [...initialVideos];
        
        // Pagination variables
        let currentPage = {
            all: 1,
            full: 1,
            shorts: 1
        };
        
        const itemsPerPage = 15;
        let isLoading = false;
        let hasMoreVideos = true;
        let activeTab = 'all';
        let filteredVideos = null;
        let adminMode = false;
        
        // DOM elements
        const elements = {
            allVideosGrid: document.getElementById('allVideosGrid'),
            fullVideosGrid: document.getElementById('fullVideosGrid'),
            shortsGrid: document.getElementById('shortsGrid'),
            searchInput: document.getElementById('searchInput'),
            searchBtn: document.getElementById('searchBtn'),
            addVideoBtn: document.getElementById('addVideoBtn'),
            addVideoModal: document.getElementById('addVideoModal'),
            submitVideoBtn: document.getElementById('submitVideoBtn'),
            bulkAddBtn: document.getElementById('bulkAddBtn'),
            videoUrlInput: document.getElementById('videoUrlInput'),
            bulkVideoUrls: document.getElementById('bulkVideoUrls'),
            tabButtons: document.querySelectorAll('.tab-btn'),
            tabContents: document.querySelectorAll('.tab-content'),
            scrollTopBtn: document.getElementById('scrollTop'),
            messageElement: document.getElementById('message'),
            allLoading: document.getElementById('allLoading'),
            fullLoading: document.getElementById('fullLoading'),
            shortsLoading: document.getElementById('shortsLoading'),
            modalClose: document.getElementById('modalClose')
        };
        
        // Initialize the app
        function init() {
            loadVideos();
            setupEventListeners();
            renderInitialVideos();
            
            // Check for admin mode in URL hash
            if (window.location.hash === '#admin') {
                activateAdminMode();
            }
        }
        
        // Activate admin mode
        function activateAdminMode() {
            const password = prompt('Enter admin password:');
            if (password === 'alien123') { // Change this to your preferred password
                adminMode = true;
                document.body.classList.add('admin-mode');
                alert('Admin mode activated');
                // Re-render videos to show delete buttons
                renderVideos('all', true);
                renderVideos('full', true);
                renderVideos('shorts', true);
            }
        }
        
        // Load videos from localStorage if available
        function loadVideos() {
            if (typeof localStorage !== 'undefined') {
                const savedVideos = localStorage.getItem('alienWebVideos');
                if (savedVideos) {
                    try {
                        allVideos = JSON.parse(savedVideos);
                    } catch (e) {
                        console.error('Error parsing saved videos:', e);
                    }
                } else {
                    // Only load initial videos if no saved data
                    allVideos = [...initialVideos];
                    saveVideos();
                }
            }
        }
        
        // Save videos to localStorage
        function saveVideos() {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('alienWebVideos', JSON.stringify(allVideos));
            }
        }
        
        // Render initial videos for better perceived performance
        function renderInitialVideos() {
            renderVideos('all', true);
            renderVideos('full', true);
            renderVideos('shorts', true);
            
            // Load more immediately if viewport is tall
            if (window.innerHeight > 800) {
                setTimeout(() => {
                    loadMoreVideos();
                }, 300);
            }
        }
        
        // Get videos for current page
        function getVideosForPage(type, page) {
            let videos = filteredVideos || allVideos;
            
            if (type === 'full') {
                videos = videos.filter(video => video.type === 'full');
            } else if (type === 'shorts') {
                videos = videos.filter(video => video.type === 'shorts');
            }
            
            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            
            return videos.slice(start, end);
        }
        
        // Check if there are more videos to load
        function checkHasMoreVideos(type) {
            let videos = filteredVideos || allVideos;
            
            if (type === 'full') {
                videos = videos.filter(video => video.type === 'full');
            } else if (type === 'shorts') {
                videos = videos.filter(video => video.type === 'shorts');
            }
            
            return currentPage[type] * itemsPerPage < videos.length;
        }
        
        // Render videos for specific tab
        function renderVideos(type, reset = false) {
            const grid = type === 'all' ? elements.allVideosGrid : 
                         type === 'full' ? elements.fullVideosGrid : 
                         elements.shortsGrid;
            
            const loadingElement = type === 'all' ? elements.allLoading : 
                                  type === 'full' ? elements.fullLoading : 
                                  elements.shortsLoading;
            
            if (reset) {
                grid.innerHTML = '';
                currentPage[type] = 1;
            }
            
            const videos = getVideosForPage(type, currentPage[type]);
            
            if (videos.length === 0 && grid.innerHTML === '') {
                grid.innerHTML = '<p class="text-center">No videos found.</p>';
                loadingElement.style.display = 'none';
                return;
            }
            
            // Create document fragment for better performance
            const fragment = document.createDocumentFragment();
            
            videos.forEach(video => {
                const card = createVideoCard(video);
                fragment.appendChild(card);
            });
            
            grid.appendChild(fragment);
            
            // Check if there are more videos to load
            hasMoreVideos = checkHasMoreVideos(type);
            loadingElement.style.display = hasMoreVideos ? 'block' : 'none';
        }
        
        // Create video card element
        function createVideoCard(video) {
            const card = document.createElement('div');
            card.className = 'video-card';
            
            const containerClass = video.type === 'shorts' ? 'reels-container' : 'video-container';
            
            card.innerHTML = `
                ${adminMode ? `<button class="delete-btn" data-video-id="${video.id}">
                    <i class="fas fa-trash"></i>
                </button>` : ''}
                <div class="${containerClass}">
                    <iframe src="https://www.youtube.com/embed/${video.id}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                            loading="lazy"></iframe>
                </div>
                <div class="video-info">
                    <h3 class="video-title">${video.title}</h3>
                </div>
            `;
            
            return card;
        }
        
        // Delete a video
        function deleteVideo(videoId) {
            allVideos = allVideos.filter(video => video.id !== videoId);
            saveVideos();
            
            // Re-render all tabs
            renderVideos('all', true);
            renderVideos('full', true);
            renderVideos('shorts', true);
            
            showMessage('Video deleted successfully!', 'success');
        }
        
        // Load more videos (infinite scroll)
        function loadMoreVideos() {
            if (isLoading || !hasMoreVideos) return;
            
            isLoading = true;
            
            // Use requestAnimationFrame for smoother loading
            requestAnimationFrame(() => {
                currentPage[activeTab]++;
                renderVideos(activeTab);
                isLoading = false;
            });
        }
        
        // Extract video ID from YouTube URL
        function extractVideoId(url) {
            if (!url) return null;
            
            // Trim and clean the URL
            url = url.trim();
            
            // Handle YouTube Shorts URLs
            if (url.includes('youtube.com/shorts/') || url.includes('youtu.be/shorts/')) {
                const parts = url.split('/shorts/');
                if (parts[1]) {
                    return parts[1].split('?')[0].split('&')[0];
                }
            }
            
            // Handle youtu.be URLs
            if (url.includes('youtu.be/')) {
                const parts = url.split('youtu.be/');
                if (parts[1]) {
                    return parts[1].split('?')[0].split('&')[0];
                }
            }
            
            // Standard YouTube URLs
            const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)([^"&?\/\s]{11}))/i;
            const match = url.match(regex);
            
            return match ? match[1] : (url.length === 11 ? url : null);
        }
        
        // Get video title from YouTube using noembed.com API
        async function getVideoTitle(videoId) {
            try {
                const response = await fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`);
                if (!response.ok) throw new Error('Failed to fetch video info');
                
                const data = await response.json();
                return data.title || `YouTube Video ${videoId}`;
            } catch (error) {
                console.error('Error fetching video title:', error);
                return `Video ${videoId}`;
            }
        }
        
        // Add a single video
        async function addVideo() {
            const url = elements.videoUrlInput.value.trim();
            if (!url) {
                showMessage('Please enter a YouTube video URL or ID.', 'error');
                return;
            }
            
            const videoId = extractVideoId(url);
            if (!videoId) {
                showMessage('Invalid YouTube URL or ID.', 'error');
                return;
            }
            
            if (allVideos.some(v => v.id === videoId)) {
                showMessage('This video has already been added.', 'error');
                return;
            }
            
            elements.submitVideoBtn.disabled = true;
            elements.submitVideoBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Adding...';
            
            try {
                const isShorts = url.includes('shorts');
                const title = await getVideoTitle(videoId);
                
                const newVideo = {
                    id: videoId,
                    title: title,
                    type: isShorts ? 'shorts' : 'full'
                };
                
                allVideos.unshift(newVideo);
                saveVideos();
                
                renderVideos('all', true);
                renderVideos('full', true);
                renderVideos('shorts', true);
                
                elements.videoUrlInput.value = '';
                toggleAddVideoModal(false);
                showMessage('Video added successfully!', 'success');
            } catch (error) {
                console.error('Error adding video:', error);
                showMessage('Failed to add video. Please try again.', 'error');
            } finally {
                elements.submitVideoBtn.disabled = false;
                elements.submitVideoBtn.textContent = 'Add Single Video';
            }
        }
        
        // Add multiple videos at once
        async function addMultipleVideos() {
            const urlsText = elements.bulkVideoUrls.value.trim();
            if (!urlsText) {
                showMessage('Please enter YouTube video URLs.', 'error');
                return;
            }
            
            const urls = urlsText.split('\n').filter(url => url.trim());
            if (urls.length === 0) {
                showMessage('No valid URLs found.', 'error');
                return;
            }
            
            elements.bulkAddBtn.disabled = true;
            elements.bulkAddBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            
            try {
                const newVideos = [];
                const duplicateVideos = [];
                
                for (const url of urls) {
                    const videoId = extractVideoId(url);
                    if (!videoId) continue;
                    
                    if (allVideos.some(v => v.id === videoId)) {
                        duplicateVideos.push(videoId);
                        continue;
                    }
                    
                    const isShorts = url.includes('shorts');
                    const title = await getVideoTitle(videoId);
                    
                    newVideos.push({
                        id: videoId,
                        title: title,
                        type: isShorts ? 'shorts' : 'full'
                    });
                }
                
                if (newVideos.length > 0) {
                    allVideos = [...newVideos, ...allVideos];
                    saveVideos();
                    
                    renderVideos('all', true);
                    renderVideos('full', true);
                    renderVideos('shorts', true);
                }
                
                let message = `Added ${newVideos.length} new videos.`;
                if (duplicateVideos.length > 0) {
                    message += ` Skipped ${duplicateVideos.length} duplicates.`;
                }
                
                showMessage(message, 'success');
                elements.bulkVideoUrls.value = '';
            } catch (error) {
                console.error('Error adding videos:', error);
                showMessage('Failed to add some videos. Please try again.', 'error');
            } finally {
                elements.bulkAddBtn.disabled = false;
                elements.bulkAddBtn.textContent = 'Add Multiple Videos';
            }
        }
        
        // Search videos by title
        function searchVideos() {
            const query = elements.searchInput.value.trim().toLowerCase();
            if (!query) {
                filteredVideos = null;
            } else {
                filteredVideos = allVideos.filter(video => 
                    video.title.toLowerCase().includes(query)
                );
            }
            
            renderVideos('all', true);
            renderVideos('full', true);
            renderVideos('shorts', true);
            
            if (filteredVideos && filteredVideos.length === 0) {
                showMessage('No videos found matching your search.', 'error');
            } else {
                hideMessage();
            }
        }
        
        // Switch tabs
        function switchTab(e) {
            const tabId = e.target.dataset.tab;
            activeTab = tabId;
            
            elements.tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            
            elements.tabContents.forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tabId).classList.add('active');
        }
        
        // Toggle add video modal
        function toggleAddVideoModal(show) {
            if (!adminMode) return;
            
            elements.addVideoModal.style.display = show ? 'block' : 'none';
            if (show) {
                elements.videoUrlInput.focus();
            }
        }
        
        // Show message
        function showMessage(text, type) {
            elements.messageElement.textContent = text;
            elements.messageElement.className = `message ${type}`;
            elements.messageElement.style.display = 'block';
            
            setTimeout(() => {
                hideMessage();
            }, 5000);
        }
        
        // Hide message
        function hideMessage() {
            elements.messageElement.style.display = 'none';
        }
        
        // Scroll to top
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        // Check scroll position
        function checkScrollPosition() {
            if (window.pageYOffset > 300) {
                elements.scrollTopBtn.classList.add('visible');
            } else {
                elements.scrollTopBtn.classList.remove('visible');
            }
            
            // Infinite scroll
            if (!isLoading && hasMoreVideos) {
                const { scrollY, innerHeight } = window;
                const { scrollHeight } = document.body;
                const bottomOfPage = scrollY + innerHeight >= scrollHeight - 500;
                
                if (bottomOfPage) {
                    loadMoreVideos();
                }
            }
        }
        
        // Setup all event listeners
        function setupEventListeners() {
            // Search functionality
            elements.searchBtn.addEventListener('click', searchVideos);
            elements.searchInput.addEventListener('keyup', e => {
                if (e.key === 'Enter') searchVideos();
            });
            
            // Add video button requires right-click
            elements.addVideoBtn.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                toggleAddVideoModal(true);
            });
            
            // Regular click shows admin prompt
            elements.addVideoBtn.addEventListener('click', (e) => {
                if (!adminMode) {
                    activateAdminMode();
                } else {
                    toggleAddVideoModal(true);
                }
            });
            
            // Modal close button
            elements.modalClose.addEventListener('click', () => toggleAddVideoModal(false));
            
            // Submit video buttons
            elements.submitVideoBtn.addEventListener('click', addVideo);
            elements.bulkAddBtn.addEventListener('click', addMultipleVideos);
            elements.videoUrlInput.addEventListener('keyup', e => {
                if (e.key === 'Enter') addVideo();
            });
            
            // Delete video functionality
            document.addEventListener('click', (e) => {
                if (adminMode && e.target.closest('.delete-btn')) {
                    const videoId = e.target.closest('.delete-btn').dataset.videoId;
                    if (confirm('Are you sure you want to delete this video?')) {
                        deleteVideo(videoId);
                    }
                }
                
                // Close modal when clicking outside
                if (elements.addVideoModal.style.display === 'block' && 
                    !elements.addVideoModal.contains(e.target) && 
                    e.target !== elements.addVideoBtn) {
                    toggleAddVideoModal(false);
                }
            });
            
            // Tab switching
            elements.tabButtons.forEach(btn => {
                btn.addEventListener('click', switchTab);
            });
            
            // Scroll to top
            elements.scrollTopBtn.addEventListener('click', scrollToTop);
            window.addEventListener('scroll', checkScrollPosition);
        }
        
        // Initialize the app when DOM is loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }