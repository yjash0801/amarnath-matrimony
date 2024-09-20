// script.js

document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Collect form data
        const gender = document.getElementById('gender').value;
        const ageFrom = document.getElementById('age-from').value;
        const ageTo = document.getElementById('age-to').value;
        const religion = document.getElementById('religion').value;
        const motherTongue = document.getElementById('mother-tongue').value;

        // Simple validation
        if (parseInt(ageFrom) > parseInt(ageTo)) {
            alert('Age "From" cannot be greater than Age "To".');
            return;
        }

        // Here you can add code to send data to your backend server
        // For demonstration, we'll just display the data
        alert(`Registration Successful!\n
        Looking for: ${gender}\n
        Age: ${ageFrom} - ${ageTo}\n
        Religion: ${religion}\n
        Mother Tongue: ${motherTongue}`);

        // Reset the form
        registrationForm.reset();
    });
});
