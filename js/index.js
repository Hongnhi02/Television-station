window.onload = function() {
    const slides = document.querySelectorAll('.broadcast img');
    const dotsContainer = document.querySelector('.slider-dots');

    let currentSlide = 0;

    const showSlide = (slideIndex) => {
        if (slideIndex >= slides.length) {
            currentSlide = 0;
        } else if (slideIndex < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = slideIndex;
        }

        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        slides[currentSlide].style.display = 'block';

        const dots = Array.from({ length: slides.length }, (_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === currentSlide) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => showSlide(index));
            dotsContainer.appendChild(dot);
            return dot;
        });

        dotsContainer.innerHTML = '';
        dots.forEach((dot) => dotsContainer.appendChild(dot));
    };

    showSlide(currentSlide);

    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}