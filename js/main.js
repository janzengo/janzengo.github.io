// Random Greetings
const greetings = [
    "Hello there! 👋",
    "Welcome to my portfolio! ✨",
    "Great to see you! 😊",
    "Thanks for stopping by! 🌟",
    "Hi! Let's build something cool! 🚀",
    "Welcome aboard! 🎉",
    "Glad you're here! 💫",
    "Ready to create magic? ✨",
    "Let's innovate together! 💡",
    "Hello, fellow developer! 💻"
];

// Set random greeting
const setRandomGreeting = () => {
    const dialogueBubble = document.getElementById('dialogue-bubble');
    const greetingText = dialogueBubble.querySelector('p');
    const randomIndex = Math.floor(Math.random() * greetings.length);
    greetingText.textContent = greetings[randomIndex];
    
    // Animate the bubble from left to right
    dialogueBubble.style.opacity = '0';
    dialogueBubble.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
        dialogueBubble.style.opacity = '1';
        dialogueBubble.style.transform = 'translateX(0)';
    }, 300);
};

// Initialize particles.js with enhanced interactions
const particlesConfig = {
    "particles": {
        "number": {
            "value": 50,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#6d8674"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 80,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#10B981",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 200,
                "line_linked": {
                    "opacity": 0.8
                }
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
};

// Initialize particles
particlesJS('particles-js', particlesConfig);

// Particle toggle functionality
const particleToggle = document.getElementById('particle-toggle');
const particlesContainer = document.getElementById('particles-js');

// Check for saved particle preference
if (localStorage.particlesEnabled === 'false') {
    particlesContainer.style.opacity = '0';
    particlesContainer.style.pointerEvents = 'none';
    particleToggle.classList.add('opacity-50');
}

// Particle toggle button click handler
particleToggle.addEventListener('click', () => {
    const isEnabled = particlesContainer.style.opacity !== '0';
    particlesContainer.style.opacity = isEnabled ? '0' : '1';
    particlesContainer.style.pointerEvents = isEnabled ? 'none' : 'auto';
    particleToggle.classList.toggle('opacity-50');
    localStorage.particlesEnabled = !isEnabled;
});

// Initialize Typed.js animations
document.addEventListener('DOMContentLoaded', function() {
    // Name typing animation
    new Typed('#typed-name', {
        strings: ['Janzen Go'],
        typeSpeed: 50,
        showCursor: false,
        onComplete: function() {
            // Start title animation after name is complete
            new Typed('#typed-title', {
                strings: ['Full Stack Developer'],
                typeSpeed: 50,
                showCursor: false,
                onComplete: function() {
                    // Start description animation after title is complete
                    new Typed('#typed-description', {
                        strings: ['I craft elegant solutions through code, specializing in building modern web applications with a focus on user experience and clean architecture.'],
                        typeSpeed: 30,
                        showCursor: false
                    });
                }
            });
        }
    });
});

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved theme preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}

// Theme toggle button click handler
themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
});

// GSAP animations for hero section
gsap.from('.hero h1', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.hero h2', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
});

gsap.from('.hero p', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.4
});

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

// Call setRandomGreeting function
setRandomGreeting();
