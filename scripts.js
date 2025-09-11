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
                'Computer Science (ML) Student',
                'AI/ML Engineer',
                'Deep Learning Enthusiast',
                'NLP Practitioner'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 500,
            loop: true,
            smartBackspace: true
        });
    }
});