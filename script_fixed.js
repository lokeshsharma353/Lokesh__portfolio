// Smooth Scrolling for Navigation Links
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

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Ensure skills are visible on page load
document.addEventListener('DOMContentLoaded', function() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) {
        skillsGrid.style.display = 'grid';
        skillsGrid.style.opacity = '1';
        skillsGrid.style.transform = 'translateY(0)';
    }
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Resume Download Functionality
const downloadBtn = document.getElementById('downloadResume');
if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const resumeContent = `LOKESH SHARMA
Software Engineer
Email: lokeshsharma353.india@gmail.com
LinkedIn: linkedin.com/in/lokesh-sharma
GitHub: github.com/lokesh-sharma

EDUCATION
Bachelor of Technology in Computer Science Engineering
Maharshi Dayanand University, Rohtak, India | 2022 - 2026

SKILLS
Languages: Java, Python, SQL, JavaScript, HTML, CSS, C
Frameworks: Spring Boot, React, Flask, PyTorch, TensorFlow
Tools: GitHub, Docker, MySQL, VS Code, Jupyter Notebook

PROJECTS
• RkEnterprise - Scalable Interior WebApp
• CityStarGym - Complete gym management system
• Hotel Management System - Admin authentication system`;
        
        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Lokesh_Sharma_Resume.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    });
}