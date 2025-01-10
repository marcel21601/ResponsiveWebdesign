document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const sidebarDots = document.querySelectorAll('.sidebar div');
    const rideBuddyLogo = document.getElementById('ridebuddy-logo');
    const characters = document.querySelectorAll('.character, .character3');

    function updateActiveSection() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop - windowHeight / 2 &&
                scrollPosition < sectionTop + sectionHeight - windowHeight / 2) {
                sidebarDots.forEach(dot => dot.classList.remove('active'));
                sidebarDots[index].classList.add('active');

                if (index === 0) {
                    rideBuddyLogo.style.opacity = 1;
                } else {
                    rideBuddyLogo.style.opacity = 0;
                }

                const character = section.querySelector('.text.section, .character, .character3');
                if (character) {
                    character.style.opacity = 1;
                }
            } else {
                const character = section.querySelector('.text.section, .character, .character3');
                if (character) {
                    character.style.opacity = 0;
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection();

    sidebarDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            window.scrollTo({
                top: sections[index].offsetTop,
                behavior: 'smooth'
            });
        });
    });
});