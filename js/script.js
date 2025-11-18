// Smooth scroll for navigation links
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

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card, .testimonial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// CTA button hover effect
document.querySelectorAll('.btn-cta, .btn-primary').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.02)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Track CTA clicks (Analytics ready)
document.querySelectorAll('.btn-cta, .btn-primary').forEach(button => {
    button.addEventListener('click', function(e) {
        const buttonText = this.textContent.trim();
        console.log('CTA Clicked:', buttonText);

        // Add your analytics tracking here
        // Example: gtag('event', 'cta_click', { button_text: buttonText });

        // WhatsApp integration for "Agendar Consulta" buttons
        if (buttonText.includes('AGENDAR') || buttonText.includes('CONSULTA')) {
            e.preventDefault();
            const whatsappNumber = '5534998434394'; // Phone from contact section
            const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
            window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
        }
    });
});

// Mobile menu toggle (if needed)
const createMobileMenu = () => {
    if (window.innerWidth <= 768) {
        const nav = document.querySelector('.nav');
        const header = document.querySelector('.header-content');

        // Create mobile menu button
        if (!document.querySelector('.mobile-menu-toggle')) {
            const menuButton = document.createElement('button');
            menuButton.className = 'mobile-menu-toggle';
            menuButton.innerHTML = '☰';
            menuButton.style.cssText = `
                display: block;
                background: var(--primary-color);
                color: white;
                border: none;
                padding: 10px 15px;
                border-radius: 8px;
                font-size: 20px;
                cursor: pointer;
            `;

            menuButton.addEventListener('click', () => {
                nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '65px';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.background = 'white';
                nav.style.padding = '20px';
                nav.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            });

            header.appendChild(menuButton);
        }
    }
};

// Initialize on load
window.addEventListener('load', () => {
    createMobileMenu();
});

// Reinitialize on resize
window.addEventListener('resize', () => {
    createMobileMenu();
});

// Contact channels click tracking
document.querySelectorAll('.contact-channels li, .phone-contact').forEach(contact => {
    contact.style.cursor = 'pointer';
    contact.addEventListener('click', function() {
        const channelName = this.textContent.trim();
        console.log('Contact Channel Clicked:', channelName);

        // WhatsApp link
        if (channelName.includes('WhatsApp') || channelName.includes('(34)')) {
            const whatsappNumber = '5534998434394';
            const message = encodeURIComponent('Olá! Gostaria de mais informações.');
            window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
        }
    });
});

console.log('Landing Page Dr. Cristiano Cruz - Loaded Successfully');
