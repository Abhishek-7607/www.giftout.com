let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slider img');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Automatically move the slider every 3 seconds (3000 milliseconds)
function autoSlide() {
    setInterval(() => {
        moveSlide(1); // Move to the next slide automatically
    }, 3000);
}

// Start the auto-slide function when the page loads
autoSlide();
