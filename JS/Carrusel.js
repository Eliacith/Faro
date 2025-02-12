let index = 0;
        const images = document.querySelectorAll(".carousel img");
        const totalImages = images.length;
        function updateCarousel() {
            images.forEach((img, i) => {
                img.classList.remove("active");
                if (i === index) {
                    img.classList.add("active");
                }
            });
        }
        function nextSlide() {
            index++;
            if (index >= totalImages) {
                index = 0;
            }
            updateCarousel();
        }
        function prevSlide() {
            index--;
            if (index < 0) {
                index = totalImages - 1;
            }
            updateCarousel();
        }
        setInterval(nextSlide, 10000);