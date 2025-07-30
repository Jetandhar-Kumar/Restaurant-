document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            preloader.style.display = 'none';
        });
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Sticky Navigation on Scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Initialize Swiper
    if (typeof Swiper !== 'undefined') {
        const heroSlider = new Swiper('.hero-slider', {
            loop: true,
            parallax: true,
            speed: 1000,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100,
        });
    }

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });

        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Menu Tab Functionality
    const menuTabs = document.querySelector('.menu-tabs');
    if (menuTabs) {
        const tabButtons = menuTabs.querySelectorAll('.nav-link');
        const tabPanes = menuTabs.querySelectorAll('.tab-pane');

        tabButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all buttons
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Hide all tab panes
                tabPanes.forEach(pane => pane.classList.remove('show', 'active'));
                
                // Show the selected tab pane
                const targetPane = document.querySelector(this.getAttribute('data-bs-target'));
                if (targetPane) {
                    targetPane.classList.add('show', 'active');
                }
            });
        });
    }

    // Image Popup for Gallery
    const galleryItems = document.querySelectorAll('.gallery-item .image-popup');
    if (galleryItems.length > 0) {
        galleryItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const imgSrc = this.getAttribute('href');
                const popup = document.createElement('div');
                popup.className = 'image-popup-modal';
                popup.style.position = 'fixed';
                popup.style.top = '0';
                popup.style.left = '0';
                popup.style.width = '100%';
                popup.style.height = '100%';
                popup.style.backgroundColor = 'rgba(0,0,0,0.9)';
                popup.style.display = 'flex';
                popup.style.alignItems = 'center';
                popup.style.justifyContent = 'center';
                popup.style.zIndex = '9999';
                
                const img = document.createElement('img');
                img.src = imgSrc;
                img.style.maxWidth = '90%';
                img.style.maxHeight = '90%';
                img.style.objectFit = 'contain';
                
                popup.appendChild(img);
                document.body.appendChild(popup);
                
                popup.addEventListener('click', function() {
                    document.body.removeChild(popup);
                });
            });
        });
    }

    // Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For demo purposes, we'll just show an alert
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
});