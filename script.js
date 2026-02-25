// ==================== PARTICLES.JS CONFIGURATION ====================
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#8B5CF6"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.5,
            "random": false
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#8B5CF6",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "repulse": {
                "distance": 100,
                "duration": 0.4
            }
        }
    },
    "retina_detect": true
});

// ==================== CUSTOM CURSOR ====================
const cursor = document.querySelector('.cursor');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

// Add hover effect on interactive elements
const interactiveElements = document.querySelectorAll('a, button, .service-card, .testimonial-card');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// ==================== SCROLL REVEAL ANIMATION ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// ==================== CHATBOT FUNCTIONALITY ====================
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWidget = document.getElementById('chatbot-widget');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');
const chatbotMessages = document.getElementById('chatbot-messages');

// Toggle chatbot visibility
chatbotToggle.addEventListener('click', () => {
    chatbotWidget.classList.toggle('active');
    if (chatbotWidget.classList.contains('active')) {
        chatbotInput.focus();
    }
});

chatbotClose.addEventListener('click', () => {
    chatbotWidget.classList.remove('active');
});

// Send message
function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message === '') return;

    // Add user message
    const userMessageDiv = document.createElement('div');
    userMessageDiv.style.textAlign = 'right';
    userMessageDiv.style.marginBottom = '10px';
    userMessageDiv.innerHTML = `<p style="background: rgba(0,0,0,0.3); padding: 8px 12px; border-radius: 5px; display: inline-block; word-break: break-word;">${escapeHtml(message)}</p>`;
    chatbotMessages.appendChild(userMessageDiv);

    chatbotInput.value = '';
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // Simulate bot response
    setTimeout(() => {
        const botMessageDiv = document.createElement('div');
        botMessageDiv.style.marginBottom = '10px';
        const responses = [
            'Thanks for reaching out! I specialize in helping creators build digital product income systems.',
            'Interested in learning more? I can help you with ebooks, templates, funnels, and automation.',
            'What aspect of digital product strategy interests you most?',
            'I help creators scale from unstable collaborations to 5-6 figure revenue streams. How can I help?',
            'Let\'s discuss your current audience and revenue goals!'
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        botMessageDiv.innerHTML = `<p style="background: rgba(200,100,255,0.3); padding: 8px 12px; border-radius: 5px; display: inline-block; word-break: break-word;">${randomResponse}</p>`;
        chatbotMessages.appendChild(botMessageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }, 500);
}

chatbotSend.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ==================== CTA BUTTON FUNCTIONALITY ====================
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Open email client or redirect to contact form
        window.location.href = 'mailto:partnerships@buildwithfahad.com?subject=Partnership%20Inquiry&body=I%20am%20interested%20in%20building%20digital%20product%20systems.';
        
        // Alternative: Show chatbot
        // chatbotWidget.classList.add('active');
    });
});

// ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ==================== PAGE LOAD EFFECTS ====================
window.addEventListener('load', () => {
    console.log('Page loaded successfully!');
    console.log('Particles.js initialized');
    console.log('Custom cursor active');
    console.log('Chatbot ready');
});

// ==================== CONSOLE MESSAGES ====================
console.log('%cFahad - Building Systems For Creators', 'font-size: 2em; color: #8B5CF6; font-weight: bold;');
console.log('%cWebsite loaded successfully!', 'font-size: 1.2em; color: #ffffff;');
