document.getElementById('bloomButton').addEventListener('click', function() {
    document.querySelector('.flower-container').classList.add('bloom');

    const hearts = Array.from(document.querySelectorAll('.heart'));
    
    // Shuffle the hearts array
    for (let i = hearts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [hearts[i], hearts[j]] = [hearts[j], hearts[i]];
    }

    hearts.forEach((heart, index) => {
        setTimeout(() => {
            heart.style.display = 'block';
            heart.style.opacity = '0.8';
            heart.style.animationPlayState = 'running';
        }, index * 300); // Adjust the delay (300ms) as needed
    });

    document.getElementById('eatQuery').style.display = 'block';
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('yesResponse').style.display = 'block';
    document.getElementById('noResponse').style.display = 'none';
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('noResponse').style.display = 'block';
    document.getElementById('yesResponse').style.display = 'none';
});
