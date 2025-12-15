// Christmas Theme Script - Subtle Version
(function() {
    // Add subtle Christmas styling to the page
    function addSubtleChristmasStyle() {
        const style = document.createElement('style');
        style.textContent = `
            /* Add a subtle holiday border to the header */
            header {
                position: relative;
                overflow: hidden;
            }
            
            /* Add a subtle animated gradient to active category */
            .category.active {
                position: relative;
                overflow: hidden;
            }
            
            .category.active::after {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(
                    90deg,
                    transparent,
                    rgba(255, 255, 255, 0.4),
                    transparent
                );
                animation: shine 3s infinite;
            }
            
            @keyframes shine {
                0% { left: -100%; }
                20% { left: 100%; }
                100% { left: 100%; }
            }
        `;
        document.head.appendChild(style);
    }

    // Add a subtle Christmas greeting
    function addChristmasGreeting() {
        const header = document.querySelector('header');
        if (!header) return;
        
        const greeting = document.createElement('div');
        greeting.className = 'christmas-greeting';
        greeting.textContent = '🎄 عيد ميلاد سعيد 🎄';
        greeting.style.cssText = `
            position: absolute;
            top: 10px;
            left: 0;
            right: 0;
            text-align: center;
            font-size: 0.9em;
            color: white;
            opacity: 0.9;
            font-weight: 500;
        `;
        
        header.style.position = 'relative';
        header.style.paddingTop = '50px';
        header.appendChild(greeting);
    }

    // Initialize the theme
    function init() {
        addSubtleChristmasStyle();
        addChristmasGreeting();
    }

    // Run when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
