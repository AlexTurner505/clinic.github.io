
const treatmentsButton = document.getElementById('treatments-button');
const teamButton = document.getElementById('team-button');
const talktousButton = document.getElementById('talktous-button');
const contactsButton = document.getElementById('contacts-button');


treatmentsButton.addEventListener('click', () => {
    const treatmentsSection = document.querySelector('.treatments');
    treatmentsSection.scrollIntoView({
        behavior: 'smooth'
    });
});

teamButton.addEventListener('click', () => {
    const teamSection = document.querySelector('.team');
    teamSection.scrollIntoView({
        behavior: 'smooth'
    });
});

contactsButton.addEventListener('click', () => {
    const contactsSection = document.querySelector('.footer');
    contactsSection.scrollIntoView({
        behavior: 'smooth'
    });
});

talktousButton.addEventListener('click', () => {
    const talktousSection = document.querySelector('.talktous');
    talktousSection.scrollIntoView({
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function() {
    var teamBackground = document.querySelector('.team-background');
    var teamPosition = teamBackground.getBoundingClientRect().top;

    var screenHeight = window.innerHeight;
    if (teamPosition < screenHeight / 1.5) { // Adjust this threshold as needed
        teamBackground.style.opacity = '1';
    }
});



