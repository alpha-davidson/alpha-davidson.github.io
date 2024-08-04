function resizeWaves() {
    const hero = document.querySelector('.hero');
    const waveContainer = document.querySelector('.wave-container');
    const waves = document.querySelector('.waves');
    const heroHeight = hero.offsetHeight;
    const waveHeight = Math.min(heroHeight * 0.4, 180); // Increased max height
    waveContainer.style.height = `${waveHeight}px`;
    waves.setAttribute('viewBox', `0 0 ${window.innerWidth * 2} 320`);
  }
  
  window.addEventListener('resize', resizeWaves);
  window.addEventListener('load', resizeWaves);