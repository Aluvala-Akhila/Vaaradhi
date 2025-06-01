document.addEventListener("DOMContentLoaded", () => {
    console.log("Get in touch with Vaaradhi!");

    // Example of a form submission event handler
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        console.log("Form submitted!");
        alert("Thank you for reaching out to Vaaradhi!");
    });
});
