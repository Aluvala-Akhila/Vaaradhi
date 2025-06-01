// Smooth Scroll for Anchored Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Greeting Message Based on Time of Day
function displayGreeting() {
    const greetingElement = document.createElement('p');
    const currentHour = new Date().getHours();
    let greetingMessage = '';

    if (currentHour < 12) {
        greetingMessage = 'Good Morning! Welcome to Vaaradhi.';
    } else if (currentHour < 18) {
        greetingMessage = 'Good Afternoon! Welcome to Vaaradhi.';
    } else {
        greetingMessage = 'Good Evening! Welcome to Vaaradhi.';
    }

    greetingElement.textContent = greetingMessage;
    greetingElement.classList.add('greeting');
    document.querySelector('header').appendChild(greetingElement);
}

displayGreeting();

// Update Footer Year Automatically
function updateFooterYear() {
    const yearElement = document.querySelector('.footer-year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

updateFooterYear();
