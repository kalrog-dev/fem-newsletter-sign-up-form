// Form variables
const formGroup = document.querySelector('.form-group');
const submitBtn = document.getElementById('newsletter-submit-btn');
const emailInput = document.getElementById('email-input');

// Clear local storage when loading the index.html page
localStorage.removeItem('email');

// Redirect to Success page on-submit
submitBtn.addEventListener('click', (e) => {
    // Prevent form submission
    e.preventDefault();

    // Email validation
    if (emailCheck(emailInput.value)) {
        // If email passes the validation test, remove the error class, save email to local storage, and redirect to Seccess page
        formGroup.classList.remove('error');
        localStorage.setItem('email', emailInput.value);
        window.location.href = './success.html';
    } else {
        // If email fails the test, add an error class
        formGroup.classList.add('error');
    }
});

// Email validation test
function emailCheck(str) {
    const regex = /^[\w.]+@[\w]+[.]{1}[a-zA-Z]{2,}$/;
    return regex.test(str);
}