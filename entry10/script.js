let currentImageIndex = -1; 

        function getRandomImage() {
            let newImageIndex; do {
                newImageIndex = Math.floor(Math.random() * 7) + 1; 
            } while (newImageIndex === currentImageIndex);

            currentImageIndex = newImageIndex; 
            return `food${newImageIndex}.PNG`;
        }

        const fullscreenImage = document.getElementById("fullscreen-image");
        fullscreenImage.addEventListener("click", () => {
            fullscreenImage.src = getRandomImage();
        });