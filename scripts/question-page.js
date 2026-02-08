document.addEventListener('DOMContentLoaded', () => {
    initQuestionPage();
});

function initQuestionPage() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const teasingMessage = document.getElementById('teasing-message');
    const attemptCounter = document.getElementById('attempt-counter');
    const buttonsArea = document.querySelector('.buttons-area');
    
    let noAttempts = 0;
    let yesButtonSize = 1;
    
    const teasingMessages = [
        "Wrong button, Lily! 😝",
        "Nice try! But that's not the answer I'm looking for 💕",
        "Lily boo, you're making me nervous! 😅",
        "The 'Yes' button is right there! 👇",
        "Come on, you know you want to click Yes 🥰",
        "I see what you're doing... stop it! 😭",
        "You're killing me here, Lily! 💔",
        "Remember how much you love me? 😌",
        "Hint: The correct answer starts with Y 😉",
        "Getting tired yet? Just click Yes! 🙏",
        "Lily, be serious now 😤",
        "You know No was never an option 💖",
        "One more try and I might cry 🥺",
        "Pretty please with ice cream on top? 🍦",
        "I'll buy you Oreos if you click Yes! 🍪",
    ];

    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            window.pageManager.showPage('letter-page');
        });
    }

    if (noBtn && buttonsArea) {
        noBtn.addEventListener('mouseenter', moveNoButton);
        noBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            moveNoButton();
        });

        function moveNoButton() {
            const container = buttonsArea.getBoundingClientRect();
            const buttonWidth = noBtn.offsetWidth;
            const buttonHeight = noBtn.offsetHeight;

            let newTop, newLeft;
            let isOverlapping = true;

            // Try to find a position that doesn't overlap with the center (Yes Button)
            while (isOverlapping) {
                newTop = Math.random() * (container.height - buttonHeight);
                newLeft = Math.random() * (container.width - buttonWidth);

                // Define the center "Dead Zone" (where Yes button lives)
                // We want to avoid the middle 30% of the container
                const centerX = container.width / 2;
                const centerY = container.height / 2;
                const buffer = 100 * yesButtonSize; // Increase buffer as Yes button grows

                const horizontalDist = Math.abs(newLeft + buttonWidth / 2 - centerX);
                const verticalDist = Math.abs(newTop + buttonHeight / 2 - centerY);

                // If the No button is far enough from the center, it's not overlapping
                if (horizontalDist > buffer || verticalDist > buffer) {
                    isOverlapping = false;
                }
            }

            noBtn.style.top = newTop + 'px';
            noBtn.style.left = newLeft + 'px';

            // Show random message
            const randomMessage = teasingMessages[Math.floor(Math.random() * teasingMessages.length)];
            showTeasingMessage(randomMessage);

            // Increase Yes button size
            yesButtonSize = Math.min(yesButtonSize + 0.15, 3.5); // Allow it to get even bigger!
            // Maintain the translate(-50%, -50%) while scaling
            yesBtn.style.transform = `translate(-50%, -50%) scale(${yesButtonSize})`;
            
            noAttempts++;
            updateAttemptCounter();
        }
    }

    function showTeasingMessage(message) {
        if (!teasingMessage) return;
        
        teasingMessage.innerHTML = `
            <div class="message-bubble">
                <p>${message}</p>
            </div>
        `;
        teasingMessage.classList.add('show');
        
        // Hide after 3 seconds
        setTimeout(() => {
            teasingMessage.classList.remove('show');
        }, 3000);
    }

    function updateAttemptCounter() {
        if (!attemptCounter) return;
        
        if (noAttempts > 5) {
            attemptCounter.textContent = `Attempts to click No: ${noAttempts} 😅`;
            attemptCounter.style.display = 'block';
        }
    }
}