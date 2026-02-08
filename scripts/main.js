class PageManager {
    constructor() {
        this.pages = ['landing-page', 'question-page', 'letter-page', 'surprise-page'];
        this.currentPage = 'landing-page';
        this.init();
    }

    init() {
        this.showPage('landing-page');
        this.setupEventListeners();
    }

    showPage(pageId) {
        // Hide all pages
        this.pages.forEach(id => {
            const page = document.getElementById(id);
            if (page) {
                page.classList.remove('active');
            }
        });

        // Show selected page
        const newPage = document.getElementById(pageId);
        if (newPage) {
            newPage.classList.add('active');
            this.currentPage = pageId;
            
            // Dispatch custom event for page-specific initialization
            window.dispatchEvent(new CustomEvent('pageChange', { detail: { page: pageId } }));
        }
    }

    setupEventListeners() {
        // Enter button
        const enterBtn = document.getElementById('enter-btn');
        if (enterBtn) {
            enterBtn.addEventListener('click', () => {
                this.showPage('question-page');
            });
        }

        // Continue button
        const continueBtn = document.getElementById('continue-btn');
        if (continueBtn) {
            continueBtn.addEventListener('click', () => {
                this.showPage('surprise-page');
            });
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.pageManager = new PageManager();
});