window.onload = function() {
    function changeVideo(videoURL) {
        document.getElementById('videoPlayer').src = videoURL;
    }

    const images = document.querySelectorAll('.youtb-channel');
    const prev = document.getElementById('btn-prev');
    const next = document.getElementById('btn-next');

    let currentIndex = 0;
    const step = 5;

    next.addEventListener('click', () => {
        currentIndex += step;
        showSlides();
    });

    prev.addEventListener('click', () => {
        currentIndex -= step;
        showSlides();
    });

    function showSlides() {
          // Kiểm tra nếu currentIndex vượt quá giới hạn của số lượng hình ảnh
        if (currentIndex >= images.length) {
            currentIndex = images.length - step;
        }

    // Xử lý trường hợp currentIndex nhỏ hơn 0
        if (currentIndex < 0) {
            currentIndex = 0;
        }
        images.forEach((image, index) => {
            if (index >= currentIndex && index < currentIndex + step) {
                image.classList.remove('hidden');
            } else {
                image.classList.add('hidden');
            }
        });

        document.querySelector('.slideshow').style.transform = `translateX(-${currentIndex * slideWidth}px)`;    
        
    }
    
    showSlides();
}