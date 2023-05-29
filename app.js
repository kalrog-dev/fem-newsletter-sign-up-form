const submitBtn = document.getElementById('newsletter-submit-btn');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = './success.html';
});