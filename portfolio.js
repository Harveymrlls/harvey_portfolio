// Animate skill meters on scroll
function animateSkillMeters() {
    const skillMeters = document.querySelectorAll('.skill-meter');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width;
            }
        });
    }, { threshold: 0.5 });
    
    skillMeters.forEach(meter => observer.observe(meter));
}

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle functionality
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('change', function() {
    if (this.checked) {
        menu.classList.remove('hidden');
        menu.style.maxHeight = '100vh';
    } else {
        menu.classList.add('hidden');
        menu.style.maxHeight = '0';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    animateSkillMeters();
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const options = {
root: null,
rootMargin: "0px",
threshold: 0.5 // adjust if needed
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    const id = entry.target.getAttribute("id");
    const navItem = document.querySelector(`.nav-link[href="#${id}"]`);

    if (entry.isIntersecting) {
    navLinks.forEach(link => link.classList.remove("border-purple-600"));
    navItem.classList.add("border-purple-600");
    }
});
}, options);

sections.forEach(section => observer.observe(section));
function goBack() {
    window.location.href = "index.html#portfolio"; // redirects back to homepage
}
