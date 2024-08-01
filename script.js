document.getElementById('bloomButton').addEventListener('click', function() {
    document.querySelector('.flower-container').classList.add('bloom');
    document.querySelectorAll('.heart').forEach(function(heart) {
        heart.style.opacity = '0.8';
        heart.style.animationPlayState = 'running';
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
