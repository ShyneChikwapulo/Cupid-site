document.addEventListener('DOMContentLoaded', () => {
    initSurprisePage();
});

function initSurprisePage() {
    // MemoryBook is now initialized separately in memory-book.js
    initFloatingHeartsSurprise();
    initGallery();
    initFinalHearts();
}

function initFloatingHeartsSurprise() {
    const container = document.querySelector('.floating-hearts-surprise');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '<i class="fas fa-heart"></i>';
        
        const size = Math.random() * 30 + 15;
        const startX = Math.random() * window.innerWidth;
        const startY = window.innerHeight + 100;
        const opacity = 0.2;
        
        heart.style.position = 'absolute';
        heart.style.left = startX + 'px';
        heart.style.top = startY + 'px';
        heart.style.opacity = opacity;
        heart.style.fontSize = size + 'px';
        heart.style.color = '#f472b6';
        
        container.appendChild(heart);
        
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        
        heart.animate([
            {
                transform: `translateY(0) rotate(0deg)`,
                opacity: 0.2
            },
            {
                transform: `translateY(-${window.innerHeight + 200}px) rotate(360deg)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            delay: delay * 1000,
            easing: 'linear',
            iterations: Infinity
        });
    }
}

function initGallery() {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;

    const items = [
        {
            title: "Puppies",
            emoji: "🐶",
            image: "images/puppies.jpg",
            message: "Just like these adorable puppies, you make my heart melt every day"
        },
        {
            title: "Baby Cows",
            emoji: "🐮",
            image: "images/baby-cow.jpg",
            message: "These sweet baby cows remind me of your gentle heart"
        },
        {
            title: "Orca Whales",
            emoji: "🐋",
            image: "images/orca-whale.jpg",
            message: "Majestic and beautiful, just like you"
        },
        {
            title: "Baby Goats",
            emoji: "🐐",
            image: "images/baby-goat.jpg",
            message: "Playful and full of joy - that's you!"
        },
        {
            title: "Ice Cream",
            emoji: "🍦",
            image: "images/ice-cream.jpg",
            message: "Sweet treats because you are the sweetest thing in my life"
        },
        {
            title: "Oreos",
            emoji: "🍪",
            image: "images/oreos.jpg",
            message: "We go together perfectly, just like Oreos and milk"
        }
    ];

    items.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'gallery-item';
        itemElement.style.opacity = '0';
        itemElement.style.transform = 'translateY(50px) scale(0.9)';
        
        itemElement.innerHTML = `
            <div class="item-card">
                <div class="item-image">
                    <img src="${item.image}" alt="${item.title}" onerror="this.src='images/fallback.jpg'">
                    <div class="image-overlay"></div>
                    <div class="item-emoji">${item.emoji}</div>
                </div>
                <div class="item-content">
                    <h3 class="item-title">
                        ${item.title}
                        <i class="fas fa-sparkle sparkle-icon"></i>
                    </h3>
                    <p class="item-description">${item.message}</p>
                </div>
            </div>
        `;
        
        gallery.appendChild(itemElement);
        
        // Animate in with delay
        setTimeout(() => {
            itemElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            itemElement.style.opacity = '1';
            itemElement.style.transform = 'translateY(0) scale(1)';
        }, index * 200);
    });
}

function initFinalHearts() {
    const container = document.querySelector('.floating-hearts-final');
    if (!container) return;

    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '<i class="fas fa-heart"></i>';
        
        const left = (i * 12.5) + 6;
        
        heart.style.position = 'absolute';
        heart.style.left = left + '%';
        heart.style.top = '0';
        heart.style.color = '#ef4444';
        heart.style.fontSize = '24px';
        
        container.appendChild(heart);
        
        heart.animate([
            { transform: 'translateY(0)', opacity: 0.5 },
            { transform: 'translateY(-40px)', opacity: 1 },
            { transform: 'translateY(0)', opacity: 0.5 }
        ], {
            duration: 2000,
            delay: i * 200,
            iterations: Infinity,
            easing: 'ease-in-out'
        });
    }
}

function initMemoryBook() {
    const bookPages = document.querySelectorAll('.book-page');
    
    // Set initial Z-index so pages stack correctly
    for (let i = 0; i < bookPages.length; i++) {
        if (i % 2 === 0) {
            bookPages[i].style.zIndex = bookPages.length - i;
        }
    }

    bookPages.forEach((page, index) => {
        page.pageNum = index + 1;
        page.addEventListener('click', function() {
            if (this.pageNum % 2 === 0) {
                // Flip back
                this.classList.remove('flipped');
                this.previousElementSibling.classList.remove('flipped');
            } else {
                // Flip forward
                this.classList.add('flipped');
                this.nextElementSibling.classList.add('flipped');
            }
        });
    });
}

// Make sure to call this inside your existing initSurprisePage()
function initSurprisePage() {
    initMemoryBook();
    initFloatingHeartsSurprise();
    initGallery();
    initFinalHearts();
}