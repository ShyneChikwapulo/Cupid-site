document.addEventListener('DOMContentLoaded', () => {
    initLetterPage();
});

function initLetterPage() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const envelopeFlap = document.getElementById('envelope-flap');
    const continueBtn = document.getElementById('continue-btn');
    const letterInstruction = document.getElementById('letter-instruction');

    if (envelope) {
        envelope.addEventListener('click', () => {
            envelope.classList.toggle('open');
            
            if (envelope.classList.contains('open')) {
                // Show continue button with delay
                // Scroll the letter content to the top immediately when opening
                const letterContentInner = document.querySelector('.letter-content-inner');
                if (letterContentInner) {
                    letterContentInner.scrollTop = 0;
                }
                
                setTimeout(() => {
                    continueBtn.classList.add('show');
                    letterInstruction.style.display = 'none';
                }, 500);
            } else {
                continueBtn.classList.remove('show');
                letterInstruction.style.display = 'block';
            }
        });
    }

    // Initialize sparkles
    initSparkles();
}

function initSparkles() {
    const container = document.querySelector('.sparkles-container');
    if (!container) return;

    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = '<i class="fas fa-sparkle"></i>';
        
        // Random position
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        sparkle.style.position = 'absolute';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.fontSize = '20px';
        sparkle.style.color = '#fbbf24';
        
        container.appendChild(sparkle);
        
        // Randomize animation
        const duration = 3 + Math.random() * 2;
        const delay = Math.random() * 3;
        
        sparkle.animate([
            { opacity: 0, transform: 'scale(0)' },
            { opacity: 1, transform: 'scale(1)' },
            { opacity: 0, transform: 'scale(0)' }
        ], {
            duration: duration * 1000,
            delay: delay * 1000,
            iterations: Infinity,
            easing: 'ease-in-out'
        });
    }
}