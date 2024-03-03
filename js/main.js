
const treatmentsButton = document.getElementById('treatments-button');
const teamButton = document.getElementById('team-button');
const talktousButton = document.getElementById('talktous-button');
const contactsButton = document.getElementById('contacts-button');


treatmentsButton.addEventListener('click', () => {
    const treatmentsSection = document.getElementById('treatments');
    treatmentsSection.scrollIntoView({
        behavior: 'smooth'
    });
});

teamButton.addEventListener('click', () => {
    const teamSection = document.getElementById('team');
    teamSection.scrollIntoView({
        behavior: 'smooth'
    });
});

contactsButton.addEventListener('click', () => {
    const contactsSection = document.getElementById('footer');
    contactsSection.scrollIntoView({
        behavior: 'smooth'
    });
});

talktousButton.addEventListener('click', () => {
    const talktousSection = document.getElementById('talktous');
    talktousSection.scrollIntoView({
        behavior: 'smooth'
    });
});


/*

window.addEventListener('scroll', function() {
    var teamBackground = document.querySelector('.team-background');
    var teamPosition = teamBackground.getBoundingClientRect().top;

    var screenHeight = window.innerHeight;
    if (teamPosition < screenHeight / 1.5) { // Adjust this threshold as needed
        teamBackground.style.opacity = '1';
    }
});

*/

window.addEventListener("scroll", function() {
    var element = document.querySelector(".treatment-info-2");
    var position = element.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (position < screenHeight) {
        element.classList.add("fade-in-from-left");
    }
});

window.addEventListener("scroll", function() {
    var element = document.querySelector(".treatment-info-3");
    var position = element.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (position < screenHeight) {
        element.classList.add("fade-in-from-right");
    }
});

function sendEmail(){
    Email.send({
        SecureToken : '719fd0b0-979e-4fb1-a9d3-48e8f17ecdd4',
        To : 'pickkson@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : "Name: " + document.getElementById("name").value + 
        "<br>Email: " + document.getElementById("email").value + 
        "<br>Message: " + document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}


