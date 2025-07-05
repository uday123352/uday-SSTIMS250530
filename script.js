document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar Scrolled Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Navigation Toggle (Burger Menu)
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');
    const navItems = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');

        // Animate Links
        navItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Close mobile nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navItems.forEach(item => item.style.animation = ''); // Reset animation
        });
    });

    // Form Submission (Basic Example - you'd use a backend service for actual email sending)
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            formStatus.textContent = 'Sending...';
            formStatus.style.color = '#007bff';

            // In a real application, you'd send this data to a server using fetch()
            // Example:
            // const formData = new FormData(contactForm);
            // const response = await fetch('/your-backend-endpoint', {
            //     method: 'POST',
            //     body: formData
            // });
            // const result = await response.json();

            // Simulate network request
            setTimeout(() => {
                const success = Math.random() > 0.2; // 80% chance of success
                if (success) {
                    formStatus.textContent = 'Message sent successfully! 🎉 I will get back to you soon.';
                    formStatus.style.color = '#28a745';
                    contactForm.reset();
                } else {
                    formStatus.textContent = 'Oops! Something went wrong. Please try again later.';
                    formStatus.style.color = '#dc3545';
                }
            }, 2000); // Simulate 2-second delay
        });
    }

    // Intersection Observer for Section Animations (Optional but highly recommended for unique feel)
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null, // viewport
        threshold: 0.1, // trigger when 10% of the section is visible
        rootMargin: '0px'
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add a class for CSS animations
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
        // Add a base class for default hidden state if you want initial animations
        // section.classList.add('hidden');
    });

    // Example of a CSS animation class to add when 'visible'
    // In style.css, you might have:
    /*
    .section.hidden {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }

    .section.visible {
        opacity: 1;
        transform: translateY(0);
    }
    */
});