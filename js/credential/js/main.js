// scroll
document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    document.body.style.overflowY = 'scroll';
});

// loading-screen
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const navLinks = document.querySelectorAll('nav a');
    const contentSections = document.querySelectorAll('header, section');
    const aboutNavLinks = document.querySelectorAll('.about-nav .nav-item');
    const aboutDetailsContainers = document.querySelectorAll('.about-details .content');

    function showLoadingScreen() {
        loadingScreen.classList.remove('fade-out');
        contentSections.forEach(section => section.classList.remove('show'));
        loadingScreen.style.display = 'flex';

        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                contentSections.forEach(section => section.classList.add('show'));
            }, 500);
        }, 500);
    }

    window.addEventListener('load', () => {
        showLoadingScreen();
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            if (!link.closest('.about-nav') && link.getAttribute('href') !== '#contact') {
                event.preventDefault();
                showLoadingScreen();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
    
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
    
                if (targetSection) {
                    setTimeout(() => {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }, 500);
                }
            }
        });
    });

function highlightNavbarLink() {
    const scrollPosition = window.scrollY + 200;
    navLinks.forEach(link => {
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const sectionTop = targetSection.offsetTop;
            const sectionBottom = sectionTop + targetSection.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavbarLink);

       
    document.querySelector('#navbar .navbar-brand img').addEventListener('click', (event) => {
        event.preventDefault();
        showLoadingScreen();
        setTimeout(() => {
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
            navLinks.forEach(link => link.classList.remove('active'));
        }, 500);
    });

    aboutNavLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const target = link.getAttribute('data-target');

            aboutNavLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            aboutDetailsContainers.forEach(content => {
                content.style.display = 'none';
            });

            const targetSection = document.getElementById(target);
            targetSection.style.display = 'grid';

            if (target === 'skills' || target === 'experiences') {
                const educationSection = document.getElementById('education');
                educationSection.style.display = 'none';
            }
        });
    });
       
});

// popup-details-project
document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.web-item');

    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            projectItems.forEach(project => {
                project.querySelector('.detail').style.transform = 'translateY(100%)';
                project.querySelector('.detail').style.opacity = '0';
            });

            const explanation = item.querySelector('.detail');
            explanation.style.transform = 'translateY(0)';
            explanation.style.opacity = '1';
        });

        item.addEventListener('mouseleave', () => {
            const explanation = item.querySelector('.detail');
            explanation.style.transform = 'translateY(100%)';
            explanation.style.opacity = '0';
        });
    });
});

// contact
const contactLink = document.getElementById('contact-link');
const sidebar = document.getElementById('contact-sidebar');
const closeSidebar = document.getElementById('close-sidebar');
const overlay = document.getElementById('overlay');
const contactForm = document.querySelector('.contact-form');
const thankYouMessage = document.querySelector('.thank-you-message');
const loadingMessage = document.querySelector('.loading');
const emailInput = contactForm.querySelector('input[name="email"]');
const nameInput = contactForm.querySelector('input[name="name"]');
const messageInput = contactForm.querySelector('textarea[name="message"]');
const submitAgainButton = document.getElementById('submit-again');

contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    sidebar.classList.add('open');
    overlay.classList.add('active');
});

closeSidebar.addEventListener('click', function() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
});

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let isValid = true;

    [emailInput, nameInput, messageInput].forEach(input => {
        input.classList.remove('error');
    });

    if (!emailInput.value || !nameInput.value || !messageInput.value) {
        isValid = false;
        alert('Please fill all fields.');

        if (!emailInput.value) {
            emailInput.classList.add('error');
        }
        if (!nameInput.value) {
            nameInput.classList.add('error');
        }
        if (!messageInput.value) {
            messageInput.classList.add('error');
        }
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value && !emailPattern.test(emailInput.value)) {
        isValid = false;
        emailInput.classList.add('error'); 
        alert('Please enter a valid email address (e.g., example@gmail.com, example@yahoo.com).');
    }

    if (isValid) {
        contactForm.style.display = 'none'; 
        loadingMessage.style.display = 'flex';

        setTimeout(() => {
            loadingMessage.style.display = 'none'; 
            thankYouMessage.style.display = 'block'; 
        }, 2000);
    }
});

submitAgainButton.addEventListener('click', function() {
    thankYouMessage.style.display = 'none';
    contactForm.style.display = 'block';

    emailInput.value = '';
    nameInput.value = '';
    messageInput.value = '';
});

// dot
const loadingDots = document.querySelector('.dots');
const maxDots = 5;
const dotDelay = 500; 
let dotCount = 0;

function showDots() {
    if (dotCount < maxDots) {
        loadingDots.textContent += '.';
        dotCount++;
    }
}

const dotInterval = setInterval(showDots, dotDelay);

setTimeout(() => {
    clearInterval(dotInterval);
    loadingDots.textContent = '.....';
}, maxDots * dotDelay);



