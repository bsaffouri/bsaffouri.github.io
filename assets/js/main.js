document.addEventListener('DOMContentLoaded', function() {
    //smooths scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section[id]').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Simple form validation
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            let isValid = true;
            
            if (!nameInput.value.trim()) {
                highlightInvalid(nameInput);
                isValid = false;
            } else {
                removeHighlight(nameInput);
            }
            
            if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
                highlightInvalid(emailInput);
                isValid = false;
            } else {
                removeHighlight(emailInput);
            }
            
            if (!messageInput.value.trim()) {
                highlightInvalid(messageInput);
                isValid = false;
            } else {
                removeHighlight(messageInput);
            }
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
    
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    function highlightInvalid(element) {
        element.style.borderColor = '#e53e3e';
    }
    
    function removeHighlight(element) {
        element.style.borderColor = '';
    }

// Terminal effects 9addition)
document.addEventListener('DOMContentLoaded', function() {
    // Only run terminal effects if we're on a page with the terminal header
    const terminalName = document.querySelector('.terminal-name');
    const prompt = document.querySelector('.terminal-prompt');
    
    if (terminalName) {
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance every interval
                terminalName.style.transform = `translateX(${Math.random() * 4 - 2}px)`;
                setTimeout(() => {
                    terminalName.style.transform = 'translateX(0)';
                }, 100);
            }
        }, 2000);
    }
    
    if (prompt) {
        // Add typing effect to terminal prompt
        const originalText = prompt.textContent;
        prompt.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                prompt.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
});
});