const theThing = document.querySelector("#thing");
        const container = document.querySelector("#ContentContainer");

        // Add event listener to move the car on click
        container.addEventListener("click", getClickPosition);

        function getClickPosition(e) {
            const rect = container.getBoundingClientRect();
            const xPosition = e.clientX - rect.left - (theThing.offsetWidth / 2);
            const yPosition = e.clientY - rect.top - (theThing.offsetHeight / 2);

            const translate3dValue = `translate3d(${xPosition}px, ${yPosition}px, 0)`;
            theThing.style.transform = translate3dValue;
        }

        // Mobile-friendly: Tap to show/hide text
        const icon = document.querySelector('.icon');
        icon.addEventListener('click', () => {
            const innerText = icon.querySelector('h3');
            innerText.classList.toggle('show');
        });