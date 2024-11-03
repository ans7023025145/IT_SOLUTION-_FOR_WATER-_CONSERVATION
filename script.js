// script.js

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = this.getAttribute('href');
        const section = document.querySelector(target);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
