document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');
    
    let currentSlide = 0;
    let slideInterval;
    const intervalTime = 8000;

    // Enhanced slide transition
    const showSlide = (index) => {
        // Remove all state classes
        slides.forEach(slide => {
            slide.classList.remove('active', 'prev', 'next');
        });
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
            indicator.setAttribute('aria-selected', 'false');
        });

        // Calculate prev and next indices
        const prevIndex = (index - 1 + slides.length) % slides.length;
        const nextIndex = (index + 1) % slides.length;

        // Add appropriate classes
        slides[prevIndex].classList.add('prev');
        slides[nextIndex].classList.add('next');
        slides[index].classList.add('active');
        
        // Update indicators
        indicators[index].classList.add('active');
        indicators[index].setAttribute('aria-selected', 'true');

        // Reset content animations
        const activeSlide = slides[index];
        const content = activeSlide.querySelector('.slide-content');
        content.style.animation = 'none';
        content.offsetHeight; // Trigger reflow
        content.style.animation = null;

        // Announce for screen readers
        activeSlide.setAttribute('aria-live', 'polite');
    };

    // Enhanced navigation functions
    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    };

    // Slideshow control
    const startSlideshow = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
    };

    const stopSlideshow = () => {
        clearInterval(slideInterval);
    };

    // Event Listeners
    prevButton.addEventListener('click', () => {
        prevSlide();
        stopSlideshow();
        startSlideshow();
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
        stopSlideshow();
        startSlideshow();
    });

    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            if (currentSlide !== index) {
                currentSlide = index;
                showSlide(currentSlide);
                stopSlideshow();
                startSlideshow();
            }
        });
    });

    // Enhanced hover handling
    const carousel = document.querySelector('.hero-carousel');
    carousel.addEventListener('mouseenter', stopSlideshow);
    carousel.addEventListener('mouseleave', startSlideshow);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            stopSlideshow();
            startSlideshow();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            stopSlideshow();
            startSlideshow();
        }
    });

    // Enhanced touch handling
    let touchStartX = 0;
    let touchEndX = 0;
    let isSwiping = false;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        isSwiping = true;
    }, { passive: true });

    carousel.addEventListener('touchmove', (e) => {
        if (!isSwiping) return;
        
        const currentX = e.changedTouches[0].screenX;
        const diff = currentX - touchStartX;
        
        // Add some visual feedback during swipe
        if (Math.abs(diff) > 20) {
            e.preventDefault();
        }
    }, { passive: false });

    carousel.addEventListener('touchend', (e) => {
        if (!isSwiping) return;
        
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        isSwiping = false;
    }, { passive: true });

    const handleSwipe = () => {
        const swipeThreshold = 50;
        const swipeLength = touchEndX - touchStartX;

        if (Math.abs(swipeLength) > swipeThreshold) {
            if (swipeLength > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
            stopSlideshow();
            startSlideshow();
        }
    };

    // Initialize
    showSlide(currentSlide);
    startSlideshow();
});