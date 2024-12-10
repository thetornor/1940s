
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");
    const controlLinks = document.querySelectorAll(".controls a");
    let currentIndex = 1;
    let intervalId;
    
        const updateActiveSlide = (index) => {
            document.querySelector(".slide.active").classList.remove("active");
            slides[index - 1].classList.add("active");

            document.querySelector(".controls a.active").classList.remove("active");
            controlLinks[index - 1].classList.add("active");
        };

        const rotateCarousel = () => {
            carousel.style.transform = `rotate(-${(currentIndex - 1) * 90}deg)`;
        };

        const startInterval = () => {
            intervalId = setInterval(() => {
                currentIndex = currentIndex < slides.length ? currentIndex + 1 : 1;
                updateActiveSlide(currentIndex);
                rotateCarousel();
            }, 4000);
        };

        controlLinks.forEach((control) => {
            control.addEventListener("click", (e) => {
                e.preventDefault();
                clearInterval(intervalId);

                currentIndex = Number(control.dataset.index);
                updateActiveSlide(currentIndex);
                rotateCarousel();
            });
        });

        carousel.addEventListener("mouseenter", () => clearInterval(intervalId));
        carousel.addEventListener("mouseleave", startInterval);

        startInterval();
    </script>