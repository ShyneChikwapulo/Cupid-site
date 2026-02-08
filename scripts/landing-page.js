document.addEventListener('DOMContentLoaded', () => {
    initFloatingHearts();
});

function initFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    if (!container) return;

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '<i class="fas fa-heart"></i>';
        
        // Random position and size
        const size = Math.random() * 20 + 20;
        const startX = Math.random() * window.innerWidth;
        const startY = window.innerHeight + 100;
        const opacity = 0.3;
        const scale = Math.random() * 0.5 + 0.5;
        
        // Set initial style
        heart.style.position = 'absolute';
        heart.style.left = startX + 'px';
        heart.style.top = startY + 'px';
        heart.style.opacity = opacity;
        heart.style.transform = `scale(${scale})`;
        heart.style.fontSize = size + 'px';
        heart.style.color = '#f472b6';
        
        // Append to container
        container.appendChild(heart);
        
        // Animate
        animateHeart(heart, i);
    }
}

function animateHeart(heart, delay) {
    const duration = Math.random() * 10 + 10;
    
    const animation = heart.animate([
        {
            transform: `translateY(0) rotate(0deg)`,
            opacity: 0.3
        },
        {
            transform: `translateY(-${window.innerHeight + 200}px) rotate(360deg)`,
            opacity: 0
        }
    ], {
        duration: duration * 1000,
        delay: delay * 500,
        easing: 'linear',
        iterations: Infinity
    });
}