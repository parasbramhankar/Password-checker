// Function to check password strength for the first form (live checking)
function checkStrengthLive(str) {
    const strengthText = document.getElementById('strength-1'); 
    let strength = '';
    let color = 'red';
    let feedback = [];

    // length of the password
    const len = str.length;
    if (len < 8) {
        feedback.push('Minimum length: 8 characters');
    }

    // check for different conditions
    let hasUpperCase = /[A-Z]/.test(str);
    let hasLowerCase = /[a-z]/.test(str);
    let hasNumber = /\d/.test(str);
    let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(str);

    // Feedback based on password characteristics
    if (!hasUpperCase) feedback.push('At least one uppercase letter (A-Z)');
    if (!hasLowerCase) feedback.push('At least one lowercase letter (a-z)');
    if (!hasNumber) feedback.push('At least one number (0-9)');
    if (!hasSpecialChar) feedback.push('At least one special character (e.g., !, @, #, $, %, &)');

    // Determine password strength based on conditions
    if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && len >= 8) {
        strength = 'Strong';
        color = 'green';
    } else if (feedback.length > 0 && len >= 8) {
        strength = 'Moderate';
        color = 'orange';
    } else {
        strength = 'Weak';
        color = 'red';
    }

    // Display the strength and reasons
    strengthText.textContent = `Strength: ${strength} - ${feedback.join(' | ')}`;
    strengthText.style.color = color;

    return strength;
}
// Event listener for live password checking
document.getElementById('password-1').addEventListener('input', function() {
    const password = this.value;
    checkStrengthLive(password); // Call the live checking function
});





// Function to check password strength for the second form (submit-based checking)
function checkStrengthSubmit(str) {
    const strengthText = document.getElementById('strength-2'); 
    let strength = '';
    let color = 'red';
    let feedback = [];

    // length of the password
    const len = str.length;
    if (len < 8) {
        feedback.push('Minimum length: 8 characters');
    }

    // check for different conditions
    let hasUpperCase = /[A-Z]/.test(str);
    let hasLowerCase = /[a-z]/.test(str);
    let hasNumber = /\d/.test(str);
    let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(str);

    // Feedback based on password characteristics
    if (!hasUpperCase) feedback.push('At least one uppercase letter (A-Z)');
    if (!hasLowerCase) feedback.push('At least one lowercase letter (a-z)');
    if (!hasNumber) feedback.push('At least one number (0-9)');
    if (!hasSpecialChar) feedback.push('At least one special character (e.g., !, @, #, $, %, &)');

    // Determine password strength based on conditions
    if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && len >= 8) {
        strength = 'Strong';
        color = 'green';
    } else if (feedback.length > 0 && len >= 8) {
        strength = 'Moderate';
        color = 'orange';
    } else {
        strength = 'Weak';
        color = 'red';
    }

    // Display the strength and reasons
    strengthText.textContent = `Strength: ${strength} - ${feedback.join(' | ')}`;
    strengthText.style.color = color;

    return strength;
}

// Event listener for form submit (second form)
document.getElementById('passwordForm-2').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const password = document.getElementById('password-2').value;
    const strengthText = document.getElementById('strength-2');

    // Check password strength on submit
    checkStrengthSubmit(password); // Call the submit checking function
});
