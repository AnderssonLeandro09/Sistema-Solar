// estrellas.js
// Genera estrellas animadas y efectos de brillo para un fondo realista

(function() {
  const STAR_COUNT = 180;
  const STAR_COLORS = ['#fff', '#ffe9c4', '#d4fbff', '#ffd6fa'];
  const STAR_MIN_RADIUS = 0.5;
  const STAR_MAX_RADIUS = 1.8;
  const STAR_MIN_OPACITY = 0.5;
  const STAR_MAX_OPACITY = 1;
  const STAR_MIN_BLUR = 0;
  const STAR_MAX_BLUR = 2.5;

  const starsContainer = document.querySelector('.stars');
  starsContainer.style.position = 'fixed';
  starsContainer.style.left = 0;
  starsContainer.style.top = 0;
  starsContainer.style.width = '100vw';
  starsContainer.style.height = '100vh';
  starsContainer.style.pointerEvents = 'none';
  starsContainer.style.zIndex = 1;

  // Limpia estrellas previas
  starsContainer.innerHTML = '';

  // Crea estrellas
  for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement('div');
    const size = Math.random() * (STAR_MAX_RADIUS - STAR_MIN_RADIUS) + STAR_MIN_RADIUS;
    const color = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
    const opacity = Math.random() * (STAR_MAX_OPACITY - STAR_MIN_OPACITY) + STAR_MIN_OPACITY;
    const blur = Math.random() * (STAR_MAX_BLUR - STAR_MIN_BLUR) + STAR_MIN_BLUR;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const twinkle = Math.random() * 2 + 2;

    star.style.position = 'absolute';
    star.style.left = x + 'vw';
    star.style.top = y + 'vh';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.borderRadius = '50%';
    star.style.background = color;
    star.style.opacity = opacity;
    star.style.filter = `blur(${blur}px)`;
    star.style.boxShadow = `0 0 ${size * 8}px ${color}`;
    star.style.transition = 'opacity 1.2s';
    star.style.zIndex = 1;
    star.classList.add('estrella');

    // Animación de parpadeo
    star.animate([
      { opacity: opacity },
      { opacity: Math.max(0.2, opacity - 0.3) },
      { opacity: opacity }
    ], {
      duration: twinkle * 1000,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out'
    });

    starsContainer.appendChild(star);
  }

  // Efecto de shooting star ocasional
  function shootingStar() {
    const shooting = document.createElement('div');
    shooting.style.position = 'fixed';
    shooting.style.width = '2.5px';
    shooting.style.height = '120px';
    shooting.style.background = 'linear-gradient(180deg, #fff, transparent)';
    shooting.style.opacity = 0.7;
    shooting.style.borderRadius = '2px';
    shooting.style.left = Math.random() * 90 + 'vw';
    shooting.style.top = Math.random() * 30 + 'vh';
    shooting.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
    shooting.style.zIndex = 2;
    shooting.style.pointerEvents = 'none';
    document.body.appendChild(shooting);
    shooting.animate([
      { opacity: 0.7, transform: shooting.style.transform + ' translateY(0)' },
      { opacity: 0, transform: shooting.style.transform + ' translateY(300px)' }
    ], {
      duration: 1200,
      easing: 'ease-in',
      fill: 'forwards'
    });
    setTimeout(() => shooting.remove(), 1200);
  }
  setInterval(() => {
    if (Math.random() < 0.25) shootingStar();
  }, 2500);

  // Efecto de resplandor solar animado
  const sol = document.querySelector('.sol');
  if (sol) {
    sol.style.boxShadow = '0 0 120px 60px #ffb300, 0 0 300px 150px #ff9900, 0 0 80px 40px #fff8';
    sol.animate([
      { filter: 'blur(0.2px) brightness(1.1)' },
      { filter: 'blur(2.5px) brightness(1.3)' },
      { filter: 'blur(0.2px) brightness(1.1)' }
    ], {
      duration: 5000,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out'
    });
  }

  // Efecto de resplandor en las esferas del dragón
  document.querySelectorAll('.esfera').forEach(esfera => {
    esfera.animate([
      { filter: 'brightness(1) drop-shadow(0 0 8px #ffb300)' },
      { filter: 'brightness(1.3) drop-shadow(0 0 24px #ffb300)' },
      { filter: 'brightness(1) drop-shadow(0 0 8px #ffb300)' }
    ], {
      duration: 3200 + Math.random() * 1200,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out'
    });
  });

  // Efecto de aparición de Shenlong al pasar el mouse por las esferas
  const dragonballs = document.querySelector('.dragonballs');
  const shenlong = document.querySelector('.shenlong');
  if (dragonballs && shenlong) {
    dragonballs.addEventListener('mouseenter', () => {
      shenlong.style.opacity = 0.95;
      shenlong.style.filter = 'brightness(1.2) drop-shadow(0 0 60px #00ff00)';
    });
    dragonballs.addEventListener('mouseleave', () => {
      shenlong.style.opacity = 0;
      shenlong.style.filter = '';
    });
  }
})();
