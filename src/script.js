var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../assets/animation/wave.json'
});

animation.setSpeed(0.6);