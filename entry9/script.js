   function playSound(id) {
        const sound = document.getElementById(id);
        sound.play();
    }
           
    document.getElementById('threads').addEventListener('mouseenter', () => playSound('sound-threads'));
    document.getElementById('groovy').addEventListener('mouseenter', () => playSound('sound-groovy'));
    document.getElementById('skinny').addEventListener('mouseenter', () => playSound('sound-skinny'));
    document.getElementById('loaded').addEventListener('mouseenter', () => playSound('sound-loaded'));
    document.getElementById('fab').addEventListener('mouseenter', () => playSound('sound-fab'));
    document.getElementById('bummer').addEventListener('mouseenter', () => playSound('sound-bummer'));
    document.getElementById('off').addEventListener('mouseenter', () => playSound('sound-off'));
    document.getElementById('out').addEventListener('mouseenter', () => playSound('sound-out'));
    document.getElementById('wig').addEventListener('mouseenter', () => playSound('sound-wig'));