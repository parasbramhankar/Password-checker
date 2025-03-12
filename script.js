// check for uppercase letter
function checkUpperCase(str) {
    return /[A-Z]/.test(str);
}

// check for lowercase letter
function checkLowerCase(str) {
    return /[a-z]/.test(str);
}

// check for a number
function checkNumber(str) {
    return /\d/.test(str);
}

// check for special characters
function checkSpecialChar(str) {
    return /[!@#$%^&*(),.?":{}|<>]/.test(str);
}


function checkStrength(str, context) {
    const STRENGTHTEXT = context === 'live' ? document.getElementById('strength-1') : document.getElementById('strength-2');
    let LStrength = '';
    let LColor = 'red';
    let feedback = [];

    //length of the password
    const len = str.length;
    if (len < 8) {
        feedback.push('Minimum length: 8 characters');
    }

    // check Other conditions
    let hasUpperCase = checkUpperCase(str);
    let hasLowerCase = checkLowerCase(str);
    let hasNumber = checkNumber(str);
    let hasSpecialChar = checkSpecialChar(str);

    // Feedback based on password characteristics
    if (!hasUpperCase) feedback.push('At least one uppercase letter (A-Z)');
    if (!hasLowerCase) feedback.push('At least one lowercase letter (a-z)');
    if (!hasNumber) feedback.push('At least one number (0-9)');
    if (!hasSpecialChar) feedback.push('At least one special character (e.g., !, @, #, $, %, &)');

    // Determine password strength based on conditions
    if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && len >= 8) {
        LStrength = 'Strong';
        LColor = 'green';
    } else if (feedback.length > 0 && len >= 8) {
        LStrength = 'Moderate';
        LColor = 'orange';
    } else {
        LStrength = 'Weak';
        LColor = 'red';
    }

    // Display the strength and reasons

    if(context === 'live'){
        STRENGTHTEXT.textContent = `Strength: ${LStrength} - ${feedback.join(' | ')}`;
    }
    else {
        alert(`Strength: ${LStrength} - ${feedback.join(' | ')}`);
    }   
    STRENGTHTEXT.style.color = LColor;
}

// Event listener for live password checking
document.getElementById('password-1').addEventListener('input', function() {
    const password = this.value;
    checkStrength(password, 'live'); // Call the unified function for live checking
});

// Event listener for form submit (second form)
document.getElementById('passwordForm-2').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const password = document.getElementById('password-2').value;
    checkStrength(password, 'submit'); // Call the unified function for submit checking
});
