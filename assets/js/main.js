// Main JavaScript for Portfolio Site

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Counter Animation =====
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
    
    // ===== Terminal Typing Effect =====
    function typeTerminalLine(element, delay = 0) {
        setTimeout(() => {
            element.classList.add('typing');
            const statNumber = element.querySelector('.stat-number');
            if (statNumber) {
                const target = parseInt(statNumber.getAttribute('data-target'));
                setTimeout(() => animateCounter(statNumber, target), 300);
            }
        }, delay);
    }
    
    // Initialize stats on homepage
    const statLines = document.querySelectorAll('.terminal-line');
    statLines.forEach((line, index) => {
        typeTerminalLine(line, index * 200);
    });
    
    // ===== Mouse Tracking for Card Glow =====
    const cards = document.querySelectorAll('.writeup-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
    });
    
    // ===== Smooth Scroll =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===== Fade In on Scroll =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.writeup-card, .cert-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ===== Active Nav Link =====
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            (currentPath.includes('browse') && link.textContent.includes('Write-ups'))) {
            link.style.color = 'var(--accent-primary)';
        }
    });
    
});

// ===== Auto-calculate stats from write-ups =====
// This will be populated by Jekyll during build
// Stats are injected into the HTML from Jekyll variables
