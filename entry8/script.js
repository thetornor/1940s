<script>
    function getRandomImage() {
        let randomNum = Math.floor(Math.random() * 12) + 1; 
        return `img${randomNum}.PNG`; 
    }
    
    const fullscreenImage = document.getElementById("fullscreen-image");
    fullscreenImage.addEventListener("click", () => {
        fullscreenImage.src = getRandomImage(); 
    });
</script>