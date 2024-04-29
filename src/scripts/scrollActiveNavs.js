const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links a');

addActiveIfInView();

window.addEventListener('scroll', () => {
    addActiveIfInView();
});

function addActiveIfInView() {
    sections.forEach((section, i) => {
        if (section.getBoundingClientRect().top <= 150) {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            navLinks[i].classList.add('active');
        }
    });
}