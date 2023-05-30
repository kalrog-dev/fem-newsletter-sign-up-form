// Form variables
const emailInput = document.getElementById('email-input');
const submitBtn = document.getElementById('newsletter-submit-btn');
const dismissBtn = document.getElementById('success-dismiss-btn');
const formGroup = document.querySelector('.form-group');

// Redirect to Success page on-submit
submitBtn.addEventListener('click', (e) => {
    // Prevent form submission
    e.preventDefault();

    // Email validation
    if (emailCheck(emailInput.value)) {
        // If email passes the validation test, remove the error class and redirect to Seccess page
        formGroup.classList.remove('error');
        window.location.href = './success.html';
    } else {
        // If email fails the test, add an error class
        formGroup.classList.add('error');
    }
});

// Email validation test
function emailCheck(str) {
    const regex = /^[\w]+@[\w]+[.]{1}[\w]+$/;
    return regex.test(str);
}