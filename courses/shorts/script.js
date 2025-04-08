
        // YouTube videos data - Just IDs or links
        let allVideos = [
                "https://www.youtube.com/shorts/I0XitWu5zwI",
                "https://www.youtube.com/shorts/rMIJvhnr6p0",
                "https://www.youtube.com/shorts/qvXXKWxtuCg",
                "https://www.youtube.com/shorts/VIig6XroiMw",
                "https://www.youtube.com/shorts/O_dBSRqbTcQ",
                "https://www.youtube.com/shorts/4dC3eQE4nRA",
                "https://www.youtube.com/shorts/lHLmRYcKQmw",
                "https://www.youtube.com/shorts/yGBYRRNGtFQ",
        "https://www.youtube.com/shorts/IOl4AV_1hIs",
            "https://www.youtube.com/shorts/7oJX3XUttxQ",
            "https://www.youtube.com/shorts/YKBh1eKXJzc",
            "https://www.youtube.com/shorts/RaxK-Pu8qaQ",
            "https://www.youtube.com/shorts/eVm7zvHwA-k",
            "https://www.youtube.com/shorts/3Jb-teGK-uU",
            "https://youtube.com/shorts/UyjcZ3aKAd8",
            "https://www.youtube.com/watch?v=pioOT0IM7Tg",
            "https://www.youtube.com/shorts/m4oSCfvBCus",
            "https://www.youtube.com/shorts/186yUFHsneI",
            "https://www.youtube.com/shorts/dNMidEFn1j8",
            "https://www.youtube.com/shorts/ijdCUUdxCdw",
            "https://www.youtube.com/shorts/s2adr3MUPso",
            "https://youtube.com/shorts/pLLCnWQCWDU",
        ];

        // Variables for infinite scroll
        let currentPage = 1;
        let isLoading = false;
        let displayedVideos = [];
        let videoTitles = {}; // Cache for video titles

        // DOM elements
        const shortsContainer = document.getElementById('shorts-container');
        const loading = document.getElementById('loading');
        const scrollTopBtn = document.getElementById('scroll-top');
        const searchInput = document.getElementById('search-input');
        const searchBtn = document.getElementById('search-btn');
        const refreshBtn = document.getElementById('refresh-btn');
        const addVideoBtn = document.getElementById('add-video');

        // Function to extract YouTube video ID from various YouTube URL formats
        function extractVideoId(url) {
            if (!url) return null;
            
            // Check if it's already just an ID (11 characters)
            if (url.length === 11 && /^[a-zA-Z0-9_-]{11}$/.test(url)) {
                return url;
            }
            
            // Handle different YouTube URL formats
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|shorts\/|&v=)([^#&?]*).*/;
            const match = url.match(regExp);
            
            return (match && match[2].length === 11) ? match[2] : url;
        }

        // Function to fetch video title from YouTube using oEmbed API
        async function fetchVideoTitle(videoId) {
            // Check cache first
            if (videoTitles[videoId]) {
                return videoTitles[videoId];
            }
            
            try {
                const response = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
                if (!response.ok) {
                    throw new Error('Failed to fetch video title');
                }
                const data = await response.json();
                const title = data.title || 'YouTube Video';
                
                // Cache the result
                videoTitles[videoId] = title;
                
                return title;
            } catch (error) {
                console.error('Error fetching video title:', error);
                return 'YouTube Video'; // Fallback title
            }
        }

        // Initial load
        loadVideos();

        // Function to load videos
        async function loadVideos(query = '') {
            if (isLoading) return;
            
            isLoading = true;
            loading.style.display = 'block';
            
            // If it's a new search, clear the container and reset pagination
            if (query && currentPage === 1) {
                shortsContainer.innerHTML = '';
                displayedVideos = [];
            }
            
            // Calculate start and end indices for pagination
            const videosPerPage = 8;
            const startIndex = (currentPage - 1) * videosPerPage;
            const endIndex = startIndex + videosPerPage;
            
            // Filter videos by search query (if we have titles)
            let filteredVideos = [...allVideos];
            if (query) {
                filteredVideos = allVideos.filter(videoUrl => {
                    const videoId = extractVideoId(videoUrl);
                    const title = videoTitles[videoId];
                    return title && title.toLowerCase().includes(query.toLowerCase());
                });
            }
            
            // Get videos for current page
            const videosToDisplay = filteredVideos.slice(startIndex, endIndex);
            
            // If no more videos to display, hide loading indicator
            if (videosToDisplay.length === 0 && currentPage > 1) {
                loading.textContent = 'No more videos to load';
                loading.style.display = 'none';
                isLoading = false;
                return;
            }
            
            // Create HTML for videos
            for (const videoUrl of videosToDisplay) {
                const videoId = extractVideoId(videoUrl);
                
                // Skip if already displayed
                if (displayedVideos.includes(videoId)) continue;
                displayedVideos.push(videoId);
                
                // Create card with loading state
                const videoCard = document.createElement('div');
                videoCard.className = 'short-card';
                videoCard.innerHTML = `
                    <div class="video-container">
                        <iframe 
                            src="https://www.youtube.com/embed/${videoId}?rel=0"
                            title="YouTube video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div class="short-info">
                        <h3 class="short-title">Loading title...</h3>
                    </div>
                `;
                
                shortsContainer.appendChild(videoCard);
                
                // Fetch and update title
                const titleElement = videoCard.querySelector('.short-title');
                fetchVideoTitle(videoId).then(title => {
                    titleElement.textContent = title;
                });

                // Hide title after 1 second
                const shortInfo = videoCard.querySelector('.short-info');
                setTimeout(() => {
                    shortInfo.style.opacity = '0';
                }, 1000);

                // Show title on hover
                videoCard.addEventListener('mouseenter', () => {
                    shortInfo.style.opacity = '1';
                });

                videoCard.addEventListener('mouseleave', () => {
                    shortInfo.style.opacity = '0';
                });
            }
            
            currentPage++;
            isLoading = false;
            loading.style.display = 'none';
            
            // Check if we need to continue loading (for initial view)
            if (document.documentElement.clientHeight > document.documentElement.scrollHeight - 100 && currentPage <= 2) {
                loadVideos(searchInput.value);
            }
        }

        // Infinite scroll event listener
        window.addEventListener('scroll', () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            
            // Show/hide scroll to top button
            if (scrollTop > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
            
            // Load more videos when near bottom
            if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading) {
                loadVideos(searchInput.value);
            }
        });

        // Scroll to top button event listener
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Search functionality
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.trim();
            shortsContainer.innerHTML = '';
            currentPage = 1;
            displayedVideos = [];
            loadVideos(query);
        });

        // Search on Enter key press
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                shortsContainer.innerHTML = '';
                currentPage = 1;
                displayedVideos = [];
                loadVideos(query);
            }
        });

        // Refresh button functionality
        refreshBtn.addEventListener('click', () => {
            shortsContainer.innerHTML = '';
            currentPage = 1;
            displayedVideos = [];
            videoTitles = {};
            loadVideos();
        });

        // Add video button functionality
        addVideoBtn.addEventListener('click', () => {
            const videoUrl = prompt('Enter YouTube video URL or ID:');
            if (videoUrl && videoUrl.trim() !== '') {
                const videoId = extractVideoId(videoUrl.trim());
                if (videoId) {
                    allVideos.unshift(`https://www.youtube.com/watch?v=${videoId}`);
                    shortsContainer.innerHTML = '';
                    currentPage = 1;
                    displayedVideos = [];
                    loadVideos();
                } else {
                    alert('Invalid YouTube URL or ID');
                }
            }
        });

        // Add structured data for SEO
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "YouTube Videos | Alienweb",
            "description": "Watch YouTube videos on Alienweb - Your source for the best videos online",
            "publisher": {
                "@type": "Organization",
                "name": "Alienweb",
                "url": "https://alienweb.in"
            }
        };

        // Add structured data to page
        const scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        scriptTag.text = JSON.stringify(structuredData);
        document.head.appendChild(scriptTag);

        // Add preconnect for performance
        const preconnectYT = document.createElement('link');
        preconnectYT.rel = 'preconnect';
        preconnectYT.href = 'https://www.youtube.com';
        document.head.appendChild(preconnectYT);

        const preconnectYTStatic = document.createElement('link');
        preconnectYTStatic.rel = 'preconnect';
        preconnectYTStatic.href = 'https://i.ytimg.com';
        document.head.appendChild(preconnectYTStatic);
  
