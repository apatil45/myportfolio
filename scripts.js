document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Typed.js for hero section
    const typedElement = document.getElementById('typed');
    if (typedElement) {
        var typed = new Typed('#typed', {
            strings: [
                'Full-Stack Software Engineer',
                'AI Enthusiast',
                'DevOps Engineer'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 500,
            loop: true,
            smartBackspace: true
        });
    }

    // Mobile Navigation Toggle
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarNav = document.getElementById('navbar-nav');
    
    if (navbarToggle && navbarNav) {
        navbarToggle.addEventListener('click', () => {
            navbarNav.classList.toggle('active');
            navbarToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbarNav.classList.remove('active');
                navbarToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbarToggle.contains(e.target) && !navbarNav.contains(e.target)) {
                navbarNav.classList.remove('active');
                navbarToggle.classList.remove('active');
            }
        });
    }

    // App-like Mobile Features
    function initMobileApp() {
        // Bottom Navigation Active State
        const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
        const sections = document.querySelectorAll('section[id]');
        
        // Update active bottom nav item on scroll
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
            
            bottomNavItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${current}`) {
                    item.classList.add('active');
                }
            });
        });
        
        // Smooth scroll for bottom nav
        bottomNavItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = item.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Floating Action Button
        const fab = document.getElementById('fab');
        if (fab) {
            // Show/hide FAB based on scroll position
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    fab.style.display = 'flex';
                } else {
                    fab.style.display = 'none';
                }
            });
        }
    }
    
    // Scroll to top function (global)
    window.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Initialize mobile app features
    initMobileApp();
    
    // Hide Read more buttons on desktop
    hideReadMoreButtonsOnDesktop();
});

// Function to hide Read more buttons on desktop
function hideReadMoreButtonsOnDesktop() {
    const timelineButtons = document.querySelectorAll('.timeline-more-btn');
    const cardButtons = document.querySelectorAll('.card-more-btn');
    
    function checkScreenSize() {
        if (window.innerWidth > 768) {
            // Desktop: Hide buttons
            timelineButtons.forEach(button => {
                button.style.display = 'none';
                button.style.visibility = 'hidden';
            });
            cardButtons.forEach(button => {
                button.style.display = 'none';
                button.style.visibility = 'hidden';
            });
        } else {
            // Mobile: Show buttons
            timelineButtons.forEach(button => {
                button.style.display = 'inline-block';
                button.style.visibility = 'visible';
            });
            cardButtons.forEach(button => {
                button.style.display = 'inline-block';
                button.style.visibility = 'visible';
            });
        }
    }
    
    // Check on load
    checkScreenSize();
    
    // Check on resize
    window.addEventListener('resize', checkScreenSize);
}

// Toggle description function for project cards (global)
window.toggleDescription = function(descId, button) {
    const description = document.getElementById(descId);
    const isExpanded = description.classList.contains('expanded');
    
    if (isExpanded) {
        description.classList.remove('expanded');
        button.textContent = 'Read more';
    } else {
        description.classList.add('expanded');
        button.textContent = 'Read less';
    }
}

// Toggle experience function for timeline items (global)
window.toggleExperience = function(expId, button) {
    const experience = document.getElementById(expId);
    const isExpanded = experience.classList.contains('expanded');
    
    if (isExpanded) {
        experience.classList.remove('expanded');
        button.textContent = 'Read more';
    } else {
        experience.classList.add('expanded');
        button.textContent = 'Read less';
    }
}

// Toggle achievement function for achievement cards (global)
window.toggleAchievement = function(achId, button) {
    const achievement = document.getElementById(achId);
    const isExpanded = achievement.classList.contains('expanded');
    
    if (isExpanded) {
        achievement.classList.remove('expanded');
        button.textContent = 'Read more';
    } else {
        achievement.classList.add('expanded');
        button.textContent = 'Read less';
    }
}