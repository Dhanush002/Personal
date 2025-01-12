// smoothScroll.js

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scroll({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});